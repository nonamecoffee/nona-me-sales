# Nona-me Sales Master 1.7

Full replacement build.

## Important Supabase fix
If your existing `public.nona_me_state` table was created by an older version, this schema explicitly runs:

```sql
alter table if exists public.nona_me_state
  add column if not exists updated_by uuid references auth.users(id) on delete set null;
```

This fixes the error:
`Could not find the 'updated_by' column of 'nona_me_state' in the schema cache`

Run `supabase_schema.sql` in Supabase SQL Editor after deploying this build. If the schema cache still shows the old shape, wait a few seconds and refresh the page before testing again.

This remains a complete standalone package; do not mix files from older versions.
