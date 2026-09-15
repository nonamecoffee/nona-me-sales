# Nona-me Sales V6

V6 changes the cash model to a running balance:
Previous Cash + Cash Sales - Cash Expenses - Bank Deposits = Current Expected Cash

Separate KHR and USD balances are kept throughout.

Staff can:
- Record sales
- Record free-text expenses
- Record bank deposits
- Count actual cash in the table
- Export/share daily report

Admin can:
- View sales, expenses, deposits, cash balance
- Review activity
- Manage future settings/products/staff

Demo:
- staff01 / 1234
- admin / admin

This is still a browser-only prototype using LocalStorage. Production multi-device use requires Supabase Auth + Database + RLS.
