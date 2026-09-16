# Nona-me Coffee Sales V10 — Test Build

Responsive web/PWA test build for iPhone, iPad, Android phone, Android tablet, Windows PC and Mac.

## Included
- Khmer + English UI and daily/weekly/monthly reports
- Remember Login
- Sales, expenses, running cash, bank deposits
- Admin dashboard, staff view, inventory and low-stock alert
- Audit log
- Daily PNG/TXT/text sharing and Weekly/Monthly CSV for Google Sheets
- PWA manifest + branded placeholder app icons

## Demo login
- Staff: `staff01` / `1234`
- Admin: `admin` / `admin`

## Important
This is still a browser/local-storage test build. It is **not yet the production multi-device Supabase version** and it does not directly authenticate to Google Sheets. CSV can be opened/imported by Google Sheets.

## Deploy
Upload the extracted files to the root of the GitHub repository connected to Vercel, then commit. Vercel should redeploy automatically.

## App icon
The package includes a temporary Nona-me branded icon. Replace `icons/icon-192.png` and `icons/icon-512.png` with the official shop logo when the final logo asset is supplied.
