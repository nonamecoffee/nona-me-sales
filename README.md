# Nona-me Sales Master 2.8

Full replacement build based on Master 2.6.

## Telegram
- Telegram delivery now uses a Node.js Vercel serverless route with a manual multipart upload for maximum runtime compatibility.
- The API checks the bot token with getMe before every send and returns Telegram/Vercel errors to the UI.
- Uses Vercel serverless route: /api/telegram/send
- TELEGRAM_BOT_TOKEN must be set in Vercel Environment Variables.
- Admin Website settings includes Telegram Chat ID and a Test Telegram button.
- Send to Telegram sends the A5 report image first, then the full plain-text report.
- Full text is chunked to Telegram message size limits.
- No HTML parse mode is used for report text, avoiding formatting errors.
- Errors returned by Telegram are shown to the user.

## Deploy
Replace the whole GitHub repo with this package, then redeploy on Vercel.
No new Supabase SQL is required for the Telegram fix.
