# Nona-me Sales Master 3.2 — Full Replacement

## Main fix
- Telegram API is simplified to ONE Vercel Node Function: `api/telegram.js`.
- Friendly routes remain available through Vercel rewrites:
  - `GET /api/telegram/health`
  - `POST /api/telegram/test`
  - `POST /api/telegram/send`
- No `functions` glob is used in `vercel.json`, avoiding the previous unmatched-function build error.
- Telegram report sends the A5 image first, then the plain-text report. Sender name and sender ID remain included by the app.
- API errors return readable JSON.
- Static icon files are kept at repository root to make GitHub upload easier.
- Node engine is `>=22` for current Vercel deployments.

## IMPORTANT GitHub structure
The repository root must contain `api` as a folder, and inside it only this API file:

```text
api/
└── telegram.js
```

The root should also contain `index.html`, `app.js`, `style.css`, `vercel.json`, `package.json`, and the other project files.

## Telegram configuration
Vercel Environment Variable:
- Key: `TELEGRAM_BOT_TOKEN`
- Type: Secret
- Environment: Production (Preview too if needed)
- Value: BotFather token

Website Admin → Website/Settings:
- Telegram Chat ID = target Telegram chat ID

No new Supabase SQL is required for this Telegram fix.

## Deploy
1. Replace the GitHub repository contents with this ZIP. Do not mix files from older versions.
2. Make sure `api/telegram.js` is inside the `api` folder at the repository root.
3. Make sure the new `vercel.json` replaces the older one.
4. Commit and wait for the Vercel production deployment.
5. Open `https://YOUR-DOMAIN/api/telegram/health`.
6. A working deployment returns JSON with `"ok": true` and the bot username.
7. In Nona-me Admin, press Test Telegram.
8. Then use Daily Report → Send to Telegram.

## If build still fails
The Vercel Project Root Directory must be the repository root—the same location containing `index.html`, `app.js`, `vercel.json`, `package.json`, and the `api` folder.
