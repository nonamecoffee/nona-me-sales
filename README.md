# Nona-me Sales Master 1.3

Full Replacement build.

## Supabase setup
1. Open Supabase Dashboard -> SQL Editor.
2. Open `supabase_schema.sql` from this package.
3. Copy the entire file and click Run.
4. Authentication -> Providers -> Email -> Enable.
5. Create the first account in the app; the first Auth user is assigned `admin`, later users are `staff`.

If the SQL editor shows an error, send the exact red error message or a screenshot; do not mix SQL from older versions.

The browser uses only the Supabase publishable key. Never place a `service_role` key in the frontend.
