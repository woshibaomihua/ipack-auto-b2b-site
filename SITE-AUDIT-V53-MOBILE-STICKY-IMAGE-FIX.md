# V53 Mobile Sticky + Image Loading Fix Audit

## Fixes
- Re-added `Showroom Display` image to both homepage and About page, paired with the original Showroom card and not occupying a full row.
- Added sticky mobile header behavior so the top navigation stays fixed while scrolling.
- Converted dynamic fitment product WebP images into JPG fallback files under `assets/images/product-fallbacks/`.
- Updated Products fitment JS assetProfiles to use product JPG fallbacks, reducing risk of WebP/dynamic rendering failures on mobile previews.
- Kept vehicle JPG fallback paths under `assets/images/vehicle-fallbacks/` and added onerror fallbacks.
- Products page Matched Products stays 3 across on mobile with compact card sizing.

## Why images were still failing
- Static HTML resource checks were passing, but the broken images came from JS-rendered dynamic cards.
- The dynamic product cards were still using WebP sources from `assets/fitment-v26/images/products/`.
- Some mobile preview/browser environments can fail or cache dynamic WebP paths, so V53 converts and references JPG fallbacks directly.

## Audit JSON

```json
{
  "home_showroom_display_added": true,
  "about_showroom_display_added": true,
  "showroom_not_full_row_css": true,
  "sticky_mobile_header_css": true,
  "vehicle_fallback_jpg_count": 34,
  "product_fallback_jpg_count": 33,
  "fitment_js_uses_product_fallbacks": true,
  "fitment_js_uses_vehicle_fallbacks": true,
  "mobile_matched_products_3up_css": true,
  "asset_refs_checked": 105,
  "missing_asset_refs": [],
  "index_missing_refs": [],
  "about_missing_refs": [],
  "products_missing_refs": [],
  "node_checks": {
    "assets/js/main.js": [
      0,
      ""
    ],
    "assets/fitment-v26/fitment-v26.js": [
      0,
      ""
    ]
  }
}
```
