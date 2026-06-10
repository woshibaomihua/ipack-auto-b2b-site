# V43 Top Upload Restored + Matched Products Default Audit

## Fixes
- Restored `Upload Lamp Photo for Exact Match` in the top search/fitment tool area.
- Removed upload blocks outside the top hero/fitment area.
- Ensured bottom RFQ form has no duplicate upload input.
- Kept the top file input bound to `bottomRFQForm` via `form="bottomRFQForm"`.
- Re-applied default `All Lamps + Single + Pair Kits` initialization.
- Matched Products grid remains clean with Pair Kit shown inside the main grid.

## Audit
{
  "top_upload_exists": true,
  "upload_cards": [
    {
      "text": "Upload Lamp Photo for Exact Match Upload a lamp photo, OE label or screenshot. I",
      "inside_hero": true
    }
  ],
  "bottom_upload_exists": false,
  "rfq_upload_form_attr": "bottomRFQForm",
  "default_init_all_lamps": true,
  "default_init_all_packages": true,
  "catalog_exists": false,
  "three_d_button_exists": false,
  "duplicate_ids": {},
  "missing_refs": [],
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