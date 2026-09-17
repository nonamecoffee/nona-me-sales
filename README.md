# Nona-me Sales Master 2.9

## Full Replacement
This ZIP is a complete replacement package. Replace the GitHub project files with this package; do not merge files from older versions.

## Telegram
- Fixed the report photo upload path in the Vercel serverless function.
- `sendPhoto` now receives the manually-built multipart body correctly.
- `sendMessage` follows after the image.
- Sender name and sender ID are included in the report text/caption.
- `TELEGRAM_BOT_TOKEN` must be configured in Vercel Environment Variables.
- Telegram Chat ID is stored in the business settings in the app.
- No new Supabase SQL is required for this Telegram fix.

## Deploy
1. Replace all GitHub files with the contents of this ZIP.
2. Commit the changes.
3. Let Vercel deploy the new production build.
4. Confirm `TELEGRAM_BOT_TOKEN` is still present in the Production environment.
5. Open the latest deployment and use Admin -> Website -> Test Telegram.
6. Then use Daily Report -> Send to Telegram.
