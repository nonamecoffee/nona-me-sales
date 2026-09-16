# Nona-me Sales — Master System 1.2

Full replacement package for the Nona-me sales web app.

## Supabase
Project URL is already configured in `app.js`.
The frontend uses the Supabase Publishable Key only.

### First setup
1. Open Supabase Dashboard.
2. Go to **SQL Editor**.
3. Open `supabase_schema.sql` from this package.
4. Paste the whole file and click **Run**.
5. In **Authentication → Providers → Email**, enable Email provider.
6. For easier first testing, you may disable email confirmation. For production, use your preferred email verification policy.

### Cloud accounts
- The first Cloud Account created becomes **Admin**.
- Later Cloud Accounts become **Staff** by default.
- Login with Email + Password enables Cloud Sync across devices.
- Username/password `admin/admin` and `staff01/1234` are kept as local demo fallback and do not provide Cloud Sync.

## Deployment
Extract the ZIP and replace the project files in GitHub. Vercel will deploy the updated project.
