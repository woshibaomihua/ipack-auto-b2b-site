# V50 Mobile Home Image + Layout Audit

## Fixes
- Replaced mobile homepage fitment vehicle/product image sources with robust homepage image assets and added fallback handlers.
- Product-image boxes in the B2B supply section now use a clean white background.
- Featured product case images use larger mobile heights and `object-fit: contain` so product and vehicle-scene images display more completely.
- Added an extra showroom display image into the OEM/ODM support visual row.
- Featured Catalog Items on mobile now use two cards per row with compact card typography and image sizing.

## Audit JSON

```json
{
  "mobile_home_vehicle_img_src": "assets/images/products/axio-81150-12b10-scene.webp",
  "mobile_home_product_img_src": "assets/images/headlights.webp",
  "vehicle_img_exists": true,
  "product_img_exists": true,
  "showroom_extra_added": true,
  "showroom_extra_file_exists": true,
  "featured_catalog_class_added": true,
  "mobile_css_added": true,
  "missing_index_refs": [],
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
