# Nona-me Sales Master 3.3 — Full Replacement

## Telegram fix
- Uses an explicit ESM default export for the Vercel Node Function.
- `package.json` sets `type: module` so `api/telegram.js` is interpreted as ESM.
- Keeps the working rewrite routes:
  - GET `/api/telegram/health`
  - POST `/api/telegram/test`
  - POST `/api/telegram/send`
- Uses `TELEGRAM_BOT_TOKEN` from Vercel Production.
- Chat ID remains in the website Admin Telegram settings.

## Deploy
Upload the complete contents of this ZIP to the GitHub repository root as a full replacement.
Do not mix with older versions.
