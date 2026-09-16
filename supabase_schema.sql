-- Nona-me Sales Master 1.7
-- Safe, idempotent Supabase schema.
-- Run this whole script in Supabase SQL Editor.
-- It can be run again safely.
-- Never put a service_role key in browser code.

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
  updated_by uuid references auth.users(id) on delete set null
);

-- Compatibility migration for projects where nona_me_state already existed
-- before updated_by was added. CREATE TABLE IF NOT EXISTS does not alter
-- an existing table, so explicitly add the column when missing.
alter table if exists public.nona_me_state
  add column if not exists updated_by uuid references auth.users(id) on delete set null;

-- Keep the existing timestamp column available on older installations.
alter table if exists public.nona_me_state
  add column if not exists updated_at timestamptz not null default now();


create table if not exists public.nona_me_categories (
  id uuid primary key default gen_random_uuid(),
  name_en text not null,
  name_kh text not null,
  active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.nona_me_products (
  id uuid primary key default gen_random_uuid(),
  name_en text not null,
  name_kh text not null,
  category_id uuid references public.nona_me_categories(id) on delete set null,
  price_khr numeric(14,2) not null default 0 check (price_khr >= 0),
  active boolean not null default true,
  image_url text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.nona_me_promotions (
  id uuid primary key default gen_random_uuid(),
  name_en text not null,
  name_kh text not null,
  buy_qty integer not null default 1 check (buy_qty > 0),
  promo_price_khr numeric(14,2) not null default 0 check (promo_price_khr >= 0),
  active boolean not null default true,
  starts_on date,
  ends_on date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.nona_me_promotion_products (
  promotion_id uuid not null references public.nona_me_promotions(id) on delete cascade,
  product_id uuid not null references public.nona_me_products(id) on delete cascade,
  primary key (promotion_id, product_id)
);

create table if not exists public.nona_me_sales (
  id uuid primary key default gen_random_uuid(),
  sale_date date not null default current_date,
  sale_time timestamptz not null default now(),
  staff_user_id uuid references auth.users(id) on delete set null,
  currency text not null check (currency in ('KHR','USD')),
  payment_method text not null check (payment_method in ('Cash','ABA','Other')),
  exchange_rate numeric(14,4) not null default 4000 check (exchange_rate > 0),
  subtotal numeric(14,2) not null default 0 check (subtotal >= 0),
  discount numeric(14,2) not null default 0 check (discount >= 0),
  total numeric(14,2) not null default 0 check (total >= 0),
  promotion_id uuid references public.nona_me_promotions(id) on delete set null,
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.nona_me_sale_items (
  id uuid primary key default gen_random_uuid(),
  sale_id uuid not null references public.nona_me_sales(id) on delete cascade,
  product_id uuid references public.nona_me_products(id) on delete set null,
  product_name_en text not null default '',
  product_name_kh text not null default '',
  qty integer not null default 1 check (qty > 0),
  unit_price_khr numeric(14,2) not null default 0 check (unit_price_khr >= 0),
  line_total_khr numeric(14,2) not null default 0 check (line_total_khr >= 0),
  created_at timestamptz not null default now()
);

create table if not exists public.nona_me_expenses (
  id uuid primary key default gen_random_uuid(),
  expense_date date not null default current_date,
  expense_time timestamptz not null default now(),
  staff_user_id uuid references auth.users(id) on delete set null,
  description text not null,
  amount numeric(14,2) not null default 0 check (amount > 0),
  currency text not null check (currency in ('KHR','USD')),
  payment_method text not null check (payment_method in ('Cash','ABA','Other')),
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.nona_me_bank_deposits (
  id uuid primary key default gen_random_uuid(),
  deposit_date date not null default current_date,
  deposit_time timestamptz not null default now(),
  staff_user_id uuid references auth.users(id) on delete set null,
  amount numeric(14,2) not null default 0 check (amount > 0),
  currency text not null check (currency in ('KHR','USD')),
  bank_name text not null default '',
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.nona_me_cash_counts (
  id uuid primary key default gen_random_uuid(),
  count_date date not null default current_date,
  count_time timestamptz not null default now(),
  staff_user_id uuid references auth.users(id) on delete set null,
  actual_khr numeric(14,2) not null default 0 check (actual_khr >= 0),
  actual_usd numeric(14,2) not null default 0 check (actual_usd >= 0),
  expected_khr numeric(14,2) not null default 0,
  expected_usd numeric(14,2) not null default 0,
  note text,
  created_at timestamptz not null default now()
);

create table if not exists public.nona_me_stock_items (
  id uuid primary key default gen_random_uuid(),
  name_en text not null default '',
  name_kh text not null default '',
  qty numeric(14,3) not null default 0,
  unit text not null default 'pcs',
  minimum_qty numeric(14,3) not null default 0,
  cost_per_unit_khr numeric(14,2) not null default 0 check (cost_per_unit_khr >= 0),
  image_url text,
  active boolean not null default true,
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.nona_me_stock_movements (
  id uuid primary key default gen_random_uuid(),
  stock_item_id uuid not null references public.nona_me_stock_items(id) on delete cascade,
  movement_date date not null default current_date,
  movement_time timestamptz not null default now(),
  movement_type text not null check (movement_type in ('IN','OUT','ADJUST')),
  qty numeric(14,3) not null check (qty > 0),
  staff_user_id uuid references auth.users(id) on delete set null,
  reference text,
  note text,
  created_at timestamptz not null default now()
);

create table if not exists public.nona_me_app_settings (
  id text primary key,
  settings jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null
);

create table if not exists public.nona_me_audit_logs (
  id uuid primary key default gen_random_uuid(),
  action text not null,
  entity_type text not null,
  entity_id text,
  actor_user_id uuid references auth.users(id) on delete set null,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- Indexes
create index if not exists idx_nona_products_category on public.nona_me_products(category_id);
create index if not exists idx_nona_products_active on public.nona_me_products(active);
create index if not exists idx_nona_sales_date on public.nona_me_sales(sale_date);
create index if not exists idx_nona_sales_staff on public.nona_me_sales(staff_user_id);
create index if not exists idx_nona_sale_items_sale on public.nona_me_sale_items(sale_id);
create index if not exists idx_nona_expenses_date on public.nona_me_expenses(expense_date);
create index if not exists idx_nona_deposits_date on public.nona_me_bank_deposits(deposit_date);
create index if not exists idx_nona_cash_counts_date on public.nona_me_cash_counts(count_date);
create index if not exists idx_nona_stock_movements_item on public.nona_me_stock_movements(stock_item_id);
create index if not exists idx_nona_audit_created on public.nona_me_audit_logs(created_at desc);

-- Admin helper used by RLS. SECURITY DEFINER avoids policy recursion.
create or replace function public.nona_me_is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.nona_me_profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
      and p.active = true
  );
$$;

revoke all on function public.nona_me_is_admin() from public;
grant execute on function public.nona_me_is_admin() to authenticated;

-- Create a profile automatically for each Auth user.
-- The first registered Cloud user becomes Admin; later users become Staff.
create or replace function public.nona_me_new_profile()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  first_user boolean;
  nm text;
begin
  select not exists (select 1 from public.nona_me_profiles) into first_user;
  nm := coalesce(
    nullif(new.raw_user_meta_data->>'display_name',''),
    nullif(split_part(coalesce(new.email,''),'@',1),''),
    'User'
  );

  insert into public.nona_me_profiles (id, display_name, role, active)
  values (new.id, nm, case when first_user then 'admin' else 'staff' end, true)
  on conflict (id) do nothing;

  return new;
end;
$$;

revoke all on function public.nona_me_new_profile() from public;
grant execute on function public.nona_me_new_profile() to postgres, service_role;

drop trigger if exists on_auth_user_created_nona_me on auth.users;
create trigger on_auth_user_created_nona_me
after insert on auth.users
for each row
execute function public.nona_me_new_profile();

-- RLS
alter table public.nona_me_profiles enable row level security;
alter table public.nona_me_state enable row level security;
alter table public.nona_me_categories enable row level security;
alter table public.nona_me_products enable row level security;
alter table public.nona_me_promotions enable row level security;
alter table public.nona_me_promotion_products enable row level security;
alter table public.nona_me_sales enable row level security;
alter table public.nona_me_sale_items enable row level security;
alter table public.nona_me_expenses enable row level security;
alter table public.nona_me_bank_deposits enable row level security;
alter table public.nona_me_cash_counts enable row level security;
alter table public.nona_me_stock_items enable row level security;
alter table public.nona_me_stock_movements enable row level security;
alter table public.nona_me_app_settings enable row level security;
alter table public.nona_me_audit_logs enable row level security;

-- Remove policies before recreating them; makes the script re-runnable.
do $$
declare
  r record;
begin
  for r in
    select schemaname, tablename, policyname
    from pg_policies
    where schemaname='public'
      and tablename in (
        'nona_me_profiles','nona_me_state','nona_me_categories','nona_me_products',
        'nona_me_promotions','nona_me_promotion_products','nona_me_sales','nona_me_sale_items',
        'nona_me_expenses','nona_me_bank_deposits','nona_me_cash_counts','nona_me_stock_items',
        'nona_me_stock_movements','nona_me_app_settings','nona_me_audit_logs'
      )
  loop
    execute format('drop policy if exists %I on %I.%I', r.policyname, r.schemaname, r.tablename);
  end loop;
end $$;

-- Profiles
create policy nona_profiles_self_select on public.nona_me_profiles
for select to authenticated using (id = auth.uid());
create policy nona_profiles_admin_select on public.nona_me_profiles
for select to authenticated using (public.nona_me_is_admin());
create policy nona_profiles_admin_insert on public.nona_me_profiles
for insert to authenticated with check (public.nona_me_is_admin());
create policy nona_profiles_admin_update on public.nona_me_profiles
for update to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());
create policy nona_profiles_admin_delete on public.nona_me_profiles
for delete to authenticated using (public.nona_me_is_admin());

-- Shared state used by the current web client
create policy nona_state_auth_select on public.nona_me_state
for select to authenticated using (true);
create policy nona_state_admin_insert on public.nona_me_state
for insert to authenticated with check (public.nona_me_is_admin());
create policy nona_state_admin_update on public.nona_me_state
for update to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());
create policy nona_state_admin_delete on public.nona_me_state
for delete to authenticated using (public.nona_me_is_admin());

-- Catalog / settings: everyone authenticated can read; only Admin can change.
create policy nona_categories_select on public.nona_me_categories for select to authenticated using (true);
create policy nona_categories_admin_modify on public.nona_me_categories for all to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());

create policy nona_products_select on public.nona_me_products for select to authenticated using (true);
create policy nona_products_admin_modify on public.nona_me_products for all to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());

create policy nona_promotions_select on public.nona_me_promotions for select to authenticated using (true);
create policy nona_promotions_admin_modify on public.nona_me_promotions for all to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());

create policy nona_promo_products_select on public.nona_me_promotion_products for select to authenticated using (true);
create policy nona_promo_products_admin_modify on public.nona_me_promotion_products for all to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());

create policy nona_settings_select on public.nona_me_app_settings for select to authenticated using (true);
create policy nona_settings_admin_modify on public.nona_me_app_settings for all to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());

-- Operational tables: Staff/Admin can read and insert; only Admin can update/delete.
create policy nona_sales_select on public.nona_me_sales for select to authenticated using (true);
create policy nona_sales_insert on public.nona_me_sales for insert to authenticated with check (true);
create policy nona_sales_admin_update on public.nona_me_sales for update to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());
create policy nona_sales_admin_delete on public.nona_me_sales for delete to authenticated using (public.nona_me_is_admin());

create policy nona_sale_items_select on public.nona_me_sale_items for select to authenticated using (true);
create policy nona_sale_items_insert on public.nona_me_sale_items for insert to authenticated with check (true);
create policy nona_sale_items_admin_update on public.nona_me_sale_items for update to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());
create policy nona_sale_items_admin_delete on public.nona_me_sale_items for delete to authenticated using (public.nona_me_is_admin());

create policy nona_expenses_select on public.nona_me_expenses for select to authenticated using (true);
create policy nona_expenses_insert on public.nona_me_expenses for insert to authenticated with check (true);
create policy nona_expenses_admin_update on public.nona_me_expenses for update to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());
create policy nona_expenses_admin_delete on public.nona_me_expenses for delete to authenticated using (public.nona_me_is_admin());

create policy nona_deposits_select on public.nona_me_bank_deposits for select to authenticated using (true);
create policy nona_deposits_insert on public.nona_me_bank_deposits for insert to authenticated with check (true);
create policy nona_deposits_admin_update on public.nona_me_bank_deposits for update to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());
create policy nona_deposits_admin_delete on public.nona_me_bank_deposits for delete to authenticated using (public.nona_me_is_admin());

create policy nona_cash_counts_select on public.nona_me_cash_counts for select to authenticated using (true);
create policy nona_cash_counts_insert on public.nona_me_cash_counts for insert to authenticated with check (true);
create policy nona_cash_counts_admin_update on public.nona_me_cash_counts for update to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());
create policy nona_cash_counts_admin_delete on public.nona_me_cash_counts for delete to authenticated using (public.nona_me_is_admin());

create policy nona_stock_items_select on public.nona_me_stock_items for select to authenticated using (true);
create policy nona_stock_items_insert on public.nona_me_stock_items for insert to authenticated with check (true);
create policy nona_stock_items_admin_update on public.nona_me_stock_items for update to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());
create policy nona_stock_items_admin_delete on public.nona_me_stock_items for delete to authenticated using (public.nona_me_is_admin());

create policy nona_stock_moves_select on public.nona_me_stock_movements for select to authenticated using (true);
create policy nona_stock_moves_insert on public.nona_me_stock_movements for insert to authenticated with check (true);
create policy nona_stock_moves_admin_update on public.nona_me_stock_movements for update to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());
create policy nona_stock_moves_admin_delete on public.nona_me_stock_movements for delete to authenticated using (public.nona_me_is_admin());

create policy nona_audit_select on public.nona_me_audit_logs for select to authenticated using (public.nona_me_is_admin());
create policy nona_audit_insert on public.nona_me_audit_logs for insert to authenticated with check (true);
create policy nona_audit_admin_update on public.nona_me_audit_logs for update to authenticated using (public.nona_me_is_admin()) with check (public.nona_me_is_admin());
create policy nona_audit_admin_delete on public.nona_me_audit_logs for delete to authenticated using (public.nona_me_is_admin());

-- API grants for PostgREST
 grant usage on schema public to authenticated;
grant select, insert, update, delete on all tables in schema public to authenticated;
grant usage, select on all sequences in schema public to authenticated;

-- Shared state row used by the existing client.
insert into public.nona_me_state (id, state)
values ('main', '{}'::jsonb)
on conflict (id) do nothing;

-- Default settings row for future structured settings.
insert into public.nona_me_app_settings (id, settings)
values ('main', '{}'::jsonb)
on conflict (id) do nothing;
