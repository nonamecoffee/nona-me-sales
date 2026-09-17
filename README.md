# Nona-me Sales — Master 2.5

Full replacement SaaS build.

## Included
- Multi-business Cloud Login via Supabase
- Sales / Menu / Promotions / Expenses / Cash Drawer / Bank Deposit / Stock / Reports
- Staff & Users management
- Khmer / English whole-app language switch
- Menu/Stock image upload + camera + 1:1 preview + retake
- Daily Report with TOTAL INCOME / TOTAL EXPENSES / NET TOTAL / Cash in Drawer
- Copy Text in invoice-style plain text
- A5 report print and A5 image export
- Telegram report send: one photo with report text as caption, plus sender name and Supabase user ID

## Supabase
Run `supabase_schema.sql` in Supabase SQL Editor once. It is safe to re-run.

Staff management uses `nona_me_add_member_by_email`:
1. Staff creates their own Cloud Account in the app.
2. Admin opens Admin → Staff & Users.
3. Enter that staff email and role.

## Telegram
The browser must never contain a Telegram bot token.

In Vercel Project Settings → Environment Variables add:
- `TELEGRAM_BOT_TOKEN` = your Telegram Bot token

In the app, Admin → Website / Settings → Telegram Chat ID, enter the destination chat/group/channel ID. The bot must be allowed to post there.

The report sender line is generated from the signed-in Supabase user:
- Display name/email
- Supabase user ID

## Deploy
Replace the entire GitHub repository with this package. Vercel will deploy from GitHub.
