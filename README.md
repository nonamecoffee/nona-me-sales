# Nona-me Sales — Master 1.5

Full Replacement build with Supabase Cloud Authentication and shared cloud data.

## Supabase setup
1. Supabase Project URL is already configured in `app.js`.
2. The browser uses the Supabase publishable key only; never use a service-role key in frontend code.
3. Open Supabase → SQL Editor → New Query.
4. Copy the complete `supabase_schema.sql` from this ZIP and Run it.
5. Enable Email provider in Supabase Auth if it is not already enabled.
6. Create the first Cloud account from the website. The SQL trigger makes the first Cloud user an Admin and later users Staff.

## Cloud data
Operational data is synced to Supabase tables for:
- Sales + sale items
- Expenses
- Bank deposits
- Cash counts
- Stock items
- Shared catalog/settings state (Admin writes; authenticated users read)

Product images and stock images are kept as square data URLs for this prototype.

## Important
The Demo login is still available for offline testing. Demo data is local to the current browser and is not the same as Cloud accounts.
