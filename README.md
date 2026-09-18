# Nona-me Sales Master 3.9

Full Replacement build. Includes high-resolution A5 reporting, aspect-safe official logo rendering, Telegram one-message delivery, Original PNG Document delivery for maximum sharpness, and configurable Report Builder settings.

Telegram delivery defaults to `document` so the original PNG resolution is preserved and the report caption remains attached to the same forwarded message. Admin can switch to Photo in Report Builder.


## Master 4.1 Report Engine Fix
- Report image export measures full report height before capture.
- If content exceeds A5, the complete sheet scales down proportionally so no section is clipped.
- Logo keeps intrinsic aspect ratio with no forced height.
- High/Ultra rasterization remains available.
