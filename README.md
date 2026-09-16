# Nona-me Sales — Master 1.6

Full replacement build based on Master 1.5.

## Asset reliability
The official Nona-me logo is included in BOTH locations:
- `logo.png` (root — primary path)
- `assets/nona-me-logo.png` (compatibility copy)

The login/header logo uses `./logo.png` and includes a browser fallback so the UI does not show a broken image when an asset path fails.

## Supabase
- Project URL is configured in `app.js`.
- Publishable key is configured in `app.js`.
- Do not add a service-role key to the browser.

## Deployment
Replace the existing project files in GitHub with the entire contents of this package, then let Vercel deploy.
