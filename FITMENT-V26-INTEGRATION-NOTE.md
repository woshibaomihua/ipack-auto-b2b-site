# Fitment V26 Integration Note

The uploaded fitment/3D RFQ product page has been integrated into `products.html`.

## What was integrated
- Vehicle + OE search
- Year / Make / Model / Body / Lamp Type / Package filters
- Clickable vehicle light hotspots
- Single-side parts and left + right pair-kit logic
- Popular vehicles strip
- Matched products grid
- Inquiry List
- 3D-look vehicle modal
- Photo upload prompt

## Integration behavior
The fitment module keeps its own visual inquiry list and also syncs selected parts into the main website RFQ list (`quote-list.html`) through localStorage.

## Assets
All uploaded assets are copied to:

`assets/fitment-v26/`

This avoids overwriting the main website assets.
