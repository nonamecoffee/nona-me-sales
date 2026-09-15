# Nona-me Sales V7 – Responsive Khmer/English Prototype

This build implements the requested prototype improvements:
- Responsive UI for iPhone, iPad, Android phone, Android tablet, Windows PC and Mac.
- Khmer + English language toggle across the main UI and Daily Report.
- Remember Login using a local session (logout clears it).
- KHR and USD remain separate; payment method is independent (Cash / ABA / Other).
- Running cash balance continues across days and supports bank deposits.
- Daily Report preview, Khmer/English text export, PNG export, TXT download and Telegram share.
- LocalStorage prototype only; Supabase should be used for production multi-device sync and secure authentication.

Demo login:
- Staff: staff01 / 1234
- Admin: admin / admin


## V8 enhancements
- Owner Dashboard
- Weekly and Monthly reports
- CSV export formatted for Google Sheets import
- Stock / Inventory with low-stock indicators
- Audit Log
- Staff performance summary
- Responsive target: iPhone, iPad, Android phone/tablet, PC/Mac
- Khmer + English reporting

Google Sheets direct API sync requires the production Google/Supabase integration; this build provides a safe CSV export that opens in Google Sheets.
