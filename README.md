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


## V12 Test
- Save Sale and Save & Print
- Receipt print layout for 80mm thermal paper / browser printing
- Admin CMS includes basic receipt display settings

## V13 Liquid Glass UI
- iOS-inspired Liquid Glass visual treatment
- Glass navigation, panels, cards, controls and mobile bottom navigation
- Responsive across phone, tablet and desktop


## V14 changes
- Promotion entry and discount accounting (e.g. 2 cups for 6,000 KHR)
- Promotion is recorded on each sale with gross, discount and net totals
- Bilingual Admin Control Center navigation
- Website Control editor for content, colors and navigation
- Promotion management panel for add/edit/enable/disable/delete


## V15 Telegram Report Format
- Compact daily report
- Clear separator lines between sections
- Khmer + English
- KHR/USD shown compactly
- Optimized for Copy -> Paste into Telegram


## V16 fixes
- Official Nona-me logo + PWA icons
- Bilingual admin sidebar
- Website Control Center
- Product images + Stock images
- Working category selector and Grid/List menu view
- Daily/Weekly/Monthly overview + CSV export
- Compact Telegram report copy with separators
- Staff/User CRUD test controls
