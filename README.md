# Nona-me Sales V32

Full replacement package for the Nona-me Coffee sales system.

- Light mode only
- Khmer / English whole-interface switch
- Staff and Admin roles
- Sales, expenses, cash, bank deposit, stock
- KHR and USD kept separate
- Menu shows KHR + calculated USD
- Daily report with previous cash, expected cash, actual count and difference
- Report image, print, copy text and CSV export
- Admin Control Center for website, products, promotions, stock, records, users, settings and audit
- PWA/Home Screen support

Demo accounts: `staff01 / 1234` and `admin / admin`

This is a browser/localStorage prototype. Production multi-device sync should use Supabase or another backend.


## V34 report improvements
- Cleaner Copy Text format for Telegram and messaging.
- Print Report uses a clean HTML print layout instead of raw preformatted text.
- Save Image on supported iPhone/iPad/Android browsers uses the native Share Sheet with the PNG file, so the user can choose Save Image / Save to Photos rather than forcing a browser download.
- Standard web browsers cannot silently write directly to the phone gallery; the operating system Share Sheet is required for this step.

V34: Menu panel has independent vertical scrolling so dragging inside Menu does not scroll the surrounding page/panels. Horizontal page overflow is locked.
