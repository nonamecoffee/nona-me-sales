-- Nona-me Sales Master 1.2
-- Run in Supabase SQL Editor.
-- IMPORTANT: do not expose service_role keys in frontend.

create table if not exists public.nona_me_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  role text not null default 'staff' check (role in ('admin','staff')),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.nona_me_new_profile()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  first_user boolean;
  nm text;
begin
  select not exists (select 1 from public.nona_me_profiles) into first_user;
  nm := coalesce(new.raw_user_meta_data->>'display_name', split_part(coalesce(new.email,''),'@',1));
  insert into public.nona_me_profiles(id,display_name,role,active)
  values(new.id,nm,case when first_user then 'admin' else 'staff' end,true);
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_nona_me on auth.users;
create trigger on_auth_user_created_nona_me
after insert on auth.users
for each row execute function public.nona_me_new_profile();

create table if not exists public.nona_me_state (
  id text primary key,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

alter table public.nona_me_profiles enable row level security;
alter table public.nona_me_state enable row level security;

drop policy if exists "profiles_self_select" on public.nona_me_profiles;
drop policy if exists "profiles_admin_update" on public.nona_me_profiles;
drop policy if exists "state_authenticated_select" on public.nona_me_state;
drop policy if exists "state_authenticated_insert" on public.nona_me_state;
drop policy if exists "state_authenticated_update" on public.nona_me_state;

create policy "profiles_self_select"
  on public.nona_me_profiles for select to authenticated
  using (id = auth.uid());

create policy "profiles_admin_update"
  on public.nona_me_profiles for update to authenticated
  using (exists(select 1 from public.nona_me_profiles p where p.id=auth.uid() and p.role='admin'))
  with check (exists(select 1 from public.nona_me_profiles p where p.id=auth.uid() and p.role='admin'));

create policy "state_authenticated_select"
  on public.nona_me_state for select to authenticated
  using (true);

create policy "state_authenticated_insert"
  on public.nona_me_state for insert to authenticated
  with check (true);

create policy "state_authenticated_update"
  on public.nona_me_state for update to authenticated
  using (true) with check (true);

insert into public.nona_me_state(id,state)
values('main','{}'::jsonb)
on conflict(id) do nothing;
