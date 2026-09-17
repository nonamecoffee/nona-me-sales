# Nona-me Sales — Master 2.0

Multi-business SaaS foundation. Nona-me is treated as the first business/tenant; other customers can create their own business inside the same web app.

## What changed
- Cloud login with Supabase Auth.
- Multi-business / multi-tenant business selection.
- Create a new business from the app using a secure Supabase RPC.
- Tenant-isolated business data and business membership policies.
- One cloud JSON data row per business for the current prototype, with the interface ready for later relational normalization.
- Business-scoped local fallback cache.
- Sales, revenue channels, promotions, expenses, cash drawer, deposits, stock, daily report, menu photo/camera, and admin configuration remain available.
- Daily report follows the user's handwritten report structure and copy text uses invoice-like columns.
- Menu scroll remains independent on mobile/tablet.

## Supabase setup
Run `supabase_schema.sql` once in the Supabase SQL Editor. It is safe to re-run.

The browser uses only the project URL and publishable key. Do not put a service-role key in the frontend.

## Important product architecture note
This 2.0 release establishes tenant isolation and the business-management model. The current prototype stores each business's operational data in one JSON document for simplicity. For a production SaaS, the next phase should normalize sales/items/expenses/stock into separate business-scoped tables, add server-side subscription entitlements, billing, invitations, and storage-backed images.

## Deploy
Upload the complete package to GitHub and let Vercel deploy it. Do not mix files from older versions.
