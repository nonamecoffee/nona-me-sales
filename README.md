
## Master 4.5 UX/UI Interaction
- Added lively button press/ripple feedback, hover states, page transitions, modal/toast animations, and mobile-friendly navigation feedback.
- Added subtle async busy indicators for key save/send actions.
- No business logic or data model changes.
# Nona-me Sales Master 3.9

Full Replacement build. Includes high-resolution A5 reporting, aspect-safe official logo rendering, Telegram one-message delivery, Original PNG Document delivery for maximum sharpness, and configurable Report Builder settings.

Telegram delivery defaults to `document` so the original PNG resolution is preserved and the report caption remains attached to the same forwarded message. Admin can switch to Photo in Report Builder.


## Master 4.1 Report Engine Fix
- Report image export measures full report height before capture.
- If content exceeds A5, the complete sheet scales down proportionally so no section is clipped.
- Logo keeps intrinsic aspect ratio with no forced height.
- High/Ultra rasterization remains available.


Master 4.5 adds grapheme-aware Telegram report column alignment for Khmer/Unicode text and keeps the report/Telegram features from 4.2.


Master 4.5 Telegram alignment update: Khmer report text uses a stable stacked-row format rather than mixed-width space columns, so labels and KHR/USD amounts remain visually consistent across Telegram clients.


Master 4.5 adds CSV import/export for Products & Menu and Stock/Inventory. CSV files are UTF-8 with BOM and are Excel-compatible. Import updates existing records by id and adds new records.
