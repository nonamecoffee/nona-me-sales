# Nona-me Sales Master 2.7

Full replacement build based on Master 2.6.

## Telegram
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
