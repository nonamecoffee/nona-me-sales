# Nona-me Sales Master 3.3 — Full Replacement

## Telegram Vercel Function fix
This release keeps the Master 3.2 application and fixes the Vercel Telegram function export so `api/telegram.js` uses the required default export format. Vercel current Node.js Functions require the function entry point to export a default function.

### Routes
- `GET /api/telegram/health`
- `POST /api/telegram/test`
- `POST /api/telegram/send`

### Required Vercel settings
- Project Root Directory: repository root (`./`)
- Environment Variable: `TELEGRAM_BOT_TOKEN` in Production (Preview too if needed)
- Website Admin → Telegram Chat ID: target chat ID
- Node.js: `22.x` or compatible with the `>=22` engine in `package.json`

### GitHub structure
Keep the included files exactly as delivered. The API file must be located at:

```text
api/telegram.js
```

Do not merge this release with older files. Replace the previous project contents with this ZIP.

### Deploy check
After Vercel deploys, open:

```text
https://YOUR-DOMAIN/api/telegram/health
```

A successful response includes `"ok": true` and the Telegram bot username. Then use **Test Telegram** in the admin area.

No new Supabase SQL is required for this Telegram export fix.
