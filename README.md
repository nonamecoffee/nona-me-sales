# Nona-me Sales — Master Full Build V20

A complete replacement build for Nona-me Coffee.

## Included
- Single-language interface: Khmer OR English only
- Light / Dark / Auto
- Visual appearance color pickers
- Official Nona-me logo and PWA icons
- Staff/Admin login with Remember Login
- Sales with category selection and Grid/List menu
- Promotion bundles such as 2 cups for a fixed price
- Expenses
- Running cash balance
- Bank deposits
- Cash count
- Stock input for staff + stock image + notes
- Products/Menu management + images
- Staff/Users management
- Admin Website Control
- Daily / Weekly / Monthly reports
- Compact Telegram copy format with separator lines
- CSV export
- Receipt print
- Responsive iPhone/iPad/Android phone/tablet/PC/Mac

This is a browser-storage prototype. Supabase cloud sync and direct Google Sheets API integration are not included in this V20 build.


## V21 Fix
- Daily Report is now always accessible on phone.
- Staff mobile bottom navigation includes Report.
- Admin mobile bottom navigation includes Report.
- Added a compact mobile quick-navigation row including Report.


## V22 Update
- Daily Report now has a Save Image button.
- Saves the compact daily report as a PNG for phone use, Telegram, and storage.
- The image captures the report panel including KHR/USD figures and report details.


## V23 Fix
- Products are embedded in app.js as a fallback, so Menu cannot disappear if products.json fails to load.
- Added a dedicated Menu page visible to Staff and Admin.
- Menu supports category selection and Grid/List view.
- Existing Products/Menu management remains in Admin.


## V24 Fix
- Products/Menu are editable from Admin.
- Added product Edit action for name, price, category and image.
- Added product image replacement.
- Added Menu Category manager (add/rename/delete).


## V25 Update
- Fixed dark-mode text contrast across headings, labels, cards, tables, buttons, reports, forms and navigation.
- Inputs/selects/placeholders now use readable dark-theme text.
- Active buttons keep white text for contrast.


## V26 Promotion Fix
- Promotion list now has an Edit button.
- Admin can edit English name, Khmer name, number of cups and promotion price.
- Promotion creation includes a target-product selector.


## V27 Full Replacement
- Fixed Admin internal navigation so newly rendered Admin controls are bound every time.
- Promotion Edit now works after opening the Promotions section and after navigating within Admin.
- Keeps the full V26 system and features intact.


## V28 Update
- Added minimalist typography using Inter for English and Noto Sans Khmer for Khmer.
- Improved anti-aliasing, text rendering, spacing and mobile type scale.
- Font changes are CSS-only; existing features and layout are preserved.
