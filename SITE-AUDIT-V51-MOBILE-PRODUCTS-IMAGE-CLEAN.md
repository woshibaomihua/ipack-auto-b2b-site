# V51 Mobile Products + Homepage Image Clean Audit

## Fixes
- Replaced mobile homepage fitment vehicle/product preview with reliable generated JPG assets and fallback handling.
- Kept Showroom Display paired with other OEM/ODM images on mobile instead of taking a full row.
- Added the Showroom Display image to the About page as well.
- Hid the Products page Popular Vehicles gallery on mobile to reduce vertical space and avoid the broken-image card issue shown in the screenshot.
- Kept Featured Catalog Items mobile two-column layout.

## Audit JSON

```json
{
  "mobile_vehicle_jpg_exists": true,
  "mobile_headlight_jpg_exists": true,
  "index_mobile_vehicle_src": "assets/images/mobile-fitment-vehicle-v51.jpg",
  "index_mobile_product_src": "assets/images/mobile-fitment-headlight-v51.jpg",
  "index_showroom_extra_exists": true,
  "about_showroom_extra_exists": true,
  "showroom_extra_full_row_removed_css": true,
  "products_mobile_vehicle_gallery_hidden": true,
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
