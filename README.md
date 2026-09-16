# Nona-me Sales — Master System 1.4

Full replacement package. Replace the old web files with this package; do not merge files from older versions.

## Supabase setup
1. Open Supabase Dashboard → SQL Editor.
2. Click **New Query**.
3. Open `supabase_schema.sql` from this package.
4. Copy everything and paste it into the query editor.
5. Click **Run**.
6. Then go to **Authentication → Providers → Email** and enable Email.

### Quick test before running the schema
You already confirmed that this works in your project:
```sql
select now();
```

The 1.4 schema is intentionally idempotent and uses separate tables for the long-term system design while keeping `nona_me_state` for compatibility with the current Master client.

## Cloud
The browser uses only the Supabase Project URL and Publishable key. Never place a `service_role` key in browser code.

## Accounts
The first Supabase Auth account created becomes Admin. Later accounts become Staff by default.

## Current client storage
Master 1.4 preserves the existing cloud-state sync behavior while the structured Supabase tables are prepared for the next data-layer migration. This avoids breaking the approved UI while the database is moved from one JSON state row to normalized records.

## Deployment
GitHub → Vercel. Replace the repository files with this package, commit, then let Vercel deploy.
