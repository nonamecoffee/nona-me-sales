-- Nona-me Sales Master 1.3
-- Safe Supabase schema for the current Nona-me Sales prototype.
-- Run this entire script once in Supabase SQL Editor.
-- Do NOT put a service_role key in the browser.

begin;

create table if not exists public.nona_me_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  role text not null default 'staff' check (role in ('admin','staff')),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.nona_me_state (
  id text primary key,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

-- Helper used by RLS without recursively querying the profiles policy.
create or replace function public.nona_me_is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.nona_me_profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
      and p.active = true
  );
$$;

-- Automatically create a profile for every new Auth user.
-- The first user becomes admin; later users become staff.
create or replace function public.nona_me_new_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  first_user boolean;
  nm text;
begin
  select not exists (select 1 from public.nona_me_profiles) into first_user;
  nm := coalesce(
    nullif(new.raw_user_meta_data->>'display_name',''),
    split_part(coalesce(new.email,''),'@',1),
    'User'
  );

  insert into public.nona_me_profiles(id, display_name, role, active)
  values (
    new.id,
    nm,
    case when first_user then 'admin' else 'staff' end,
    true
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_nona_me on auth.users;
create trigger on_auth_user_created_nona_me
  after insert on auth.users
  for each row
  execute function public.nona_me_new_profile();

-- Enable RLS.
alter table public.nona_me_profiles enable row level security;
alter table public.nona_me_state enable row level security;

-- Remove old policies so this script is safe to re-run.
drop policy if exists "profiles_self_select" on public.nona_me_profiles;
drop policy if exists "profiles_admin_select" on public.nona_me_profiles;
drop policy if exists "profiles_admin_update" on public.nona_me_profiles;
drop policy if exists "state_authenticated_select" on public.nona_me_state;
drop policy if exists "state_authenticated_insert" on public.nona_me_state;
drop policy if exists "state_authenticated_update" on public.nona_me_state;
drop policy if exists "state_authenticated_delete" on public.nona_me_state;

-- Profiles: user can read their own profile; admin can read/update profiles.
create policy "profiles_self_select"
  on public.nona_me_profiles
  for select
  to authenticated
  using (id = auth.uid());

create policy "profiles_admin_select"
  on public.nona_me_profiles
  for select
  to authenticated
  using (public.nona_me_is_admin());

create policy "profiles_admin_update"
  on public.nona_me_profiles
  for update
  to authenticated
  using (public.nona_me_is_admin())
  with check (public.nona_me_is_admin());

-- Shared application state: authenticated users may read/write the single app row.
create policy "state_authenticated_select"
  on public.nona_me_state
  for select
  to authenticated
  using (true);

create policy "state_authenticated_insert"
  on public.nona_me_state
  for insert
  to authenticated
  with check (true);

create policy "state_authenticated_update"
  on public.nona_me_state
  for update
  to authenticated
  using (true)
  with check (true);

create policy "state_authenticated_delete"
  on public.nona_me_state
  for delete
  to authenticated
  using (public.nona_me_is_admin());

-- Explicit grants required for PostgREST/API access after creating tables with SQL.
grant usage on schema public to authenticated;
grant select on public.nona_me_profiles to authenticated;
grant update on public.nona_me_profiles to authenticated;
grant select, insert, update, delete on public.nona_me_state to authenticated;

-- Seed the shared row. Does not overwrite existing data.
insert into public.nona_me_state(id, state)
values ('main', '{}'::jsonb)
on conflict (id) do nothing;

commit;
