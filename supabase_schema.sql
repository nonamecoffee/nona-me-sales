-- NONA-ME SALES V5 — Supabase starter schema
-- Run this in Supabase SQL Editor when you are ready for real online multi-device data.
-- IMPORTANT: enable Auth and create users in Supabase Auth before using profiles.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'staff' check (role in ('super_admin','admin','staff')),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name_en text not null,
  name_kh text not null,
  category text not null,
  price_khr numeric(12,2) not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.sales (
  id uuid primary key default gen_random_uuid(),
  sold_at timestamptz not null default now(),
  staff_id uuid references public.profiles(id),
  payment_method text not null check (payment_method in ('Cash','ABA','Other')),
  currency text not null check (currency in ('KHR','USD')),
  amount numeric(12,2) not null,
  total_khr numeric(12,2) not null,
  exchange_rate numeric(12,2) not null default 4000,
  cups integer not null default 0
);

create table if not exists public.sale_items (
  id uuid primary key default gen_random_uuid(),
  sale_id uuid not null references public.sales(id) on delete cascade,
  product_id uuid references public.products(id),
  product_name_en text not null,
  product_name_kh text not null,
  qty integer not null,
  unit_price_khr numeric(12,2) not null
);

create table if not exists public.expenses (
  id uuid primary key default gen_random_uuid(),
  spent_at timestamptz not null default now(),
  staff_id uuid references public.profiles(id),
  description text not null,
  amount numeric(12,2) not null,
  currency text not null check (currency in ('KHR','USD')),
  payment_method text not null check (payment_method in ('Cash','ABA','Other')),
  note text,
  exchange_rate numeric(12,2) not null default 4000
);

create table if not exists public.cash_closings (
  id uuid primary key default gen_random_uuid(),
  closed_at timestamptz not null default now(),
  staff_id uuid references public.profiles(id),
  opening_khr numeric(12,2) not null default 0,
  opening_usd numeric(12,2) not null default 0,
  expected_khr numeric(12,2) not null default 0,
  expected_usd numeric(12,2) not null default 0,
  actual_khr numeric(12,2) not null default 0,
  actual_usd numeric(12,2) not null default 0,
  exchange_rate numeric(12,2) not null default 4000
);

create table if not exists public.shop_settings (
  id integer primary key default 1,
  shop_name text not null default 'nona-me coffee',
  phone text,
  telegram text,
  address text,
  default_exchange_rate numeric(12,2) not null default 4000,
  updated_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles(id),
  action text not null,
  entity_type text,
  entity_id uuid,
  details jsonb,
  created_at timestamptz not null default now()
);

-- Production TODO:
-- 1) Add Row Level Security (RLS).
-- 2) Staff can INSERT sales/expenses/closing for themselves.
-- 3) Staff can SELECT their own daily records.
-- 4) Admin can SELECT/UPDATE/DELETE all records.
-- 5) Never put a Supabase service_role key in browser code.
