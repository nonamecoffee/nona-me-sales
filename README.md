# Nona-me Sales V5

## Included in this prototype
- Staff/Admin login demo
- Khmer / English UI
- 29 Nona-me menu items
- KHR + USD currency
- Editable exchange rate
- Sales entry with Cash / ABA / Other
- Free-text expenses with description, currency, payment and note
- Opening cash + actual cash closing
- Expected vs actual KHR/USD difference
- Daily report: PNG + TXT + copy + share
- Admin Control Center mock
- LocalStorage for prototype testing

## Demo login
- Staff: `staff01` / `1234`
- Admin: `admin` / `admin`

## Production
This prototype still uses browser LocalStorage and demo credentials.
For real multi-device use, connect Supabase Auth + Database and enable Row Level Security.
Use `supabase_schema.sql` as the database starting point.
Do not place a Supabase service_role key in frontend code.
