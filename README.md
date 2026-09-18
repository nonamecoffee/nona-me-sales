# Nona-me Sales System — Master 5.2

Full Replacement SaaS/Web system for sales, shifts, cash, expenses, stock, menu, promotions, reports, Telegram, roles, permissions and white-label business settings.

## Vercel setup
- Add `SUPABASE_SERVICE_ROLE_KEY` as a Vercel Secret for secure Telegram settings, staff accounts, and server-side data writes. Never expose it in frontend.
- `SUPABASE_URL` and `SUPABASE_ANON_KEY` are optional because the system has current project defaults.
- `TELEGRAM_BOT_TOKEN` is optional legacy fallback; normal configuration is Admin → Telegram Settings.

## Supabase
Run the complete `supabase_schema.sql` once. It adds the secure `nona_me_integrations` table, expanded roles, and admin-controlled data writes.

## Login
One login page. Admin creates staff usernames and passwords. No public staff sign-up.

## Sales
Fixed sales workspace: Menu on the left, Current Sale on the right. Only Menu scrolls on desktop/tablet; mobile uses a right-side Current Sale drawer. Categories use quick buttons instead of dropdowns.

## Telegram
Reports send as one Telegram message containing the report file and caption. Day shift can auto-send an unsent morning report before opening.

## Report
A5 portrait, auto-fit to one page, high/ultra resolution, logo aspect-ratio preserved. Report/Telegram templates are configurable from Admin without code.

## Full replacement
This ZIP is one complete system. Replace repository contents as a whole; do not merge with earlier versions.


## Master 5.2 session stability
- Uses the current Supabase session before every server API call.
- Keeps the session synchronized with Supabase token refresh events.
- API authentication reads the Authorization header as the authoritative bearer token.
- Stale access tokens in request bodies are no longer used for authentication.


## Master 5.2
This release hardens null-safe business data hydration so missing or null report templates fall back to defaults automatically, while preserving all existing features.
