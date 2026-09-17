# Nona-me Sales Master 3.4 — Full Replacement

## Telegram Vercel Function fix
This release keeps the Master 3.4 application, keeps the Vercel default export fix, and fixes Telegram report delivery so the daily report is sent as one complete A5 portrait image with a compact sender caption. The surrounding page is no longer captured, and the full text is no longer sent as a second Telegram message.

### Telegram report behavior
- One Telegram message per daily report (A5 portrait image + compact caption)
- Sender name is shown in readable form
- Sender ID is shortened to the last 8 characters for clean presentation
- The full report text is not sent as a second message

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
