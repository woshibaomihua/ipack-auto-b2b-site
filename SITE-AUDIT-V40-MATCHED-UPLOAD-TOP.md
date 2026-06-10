# V40 Matched Products + Upload Top Audit

## Fixes
- Moved `Upload Lamp Photo for Exact Match` from the bottom RFQ form to the top `Find the Right Auto Lights by Vehicle & OE` tool area.
- The uploaded file input still submits with `bottomRFQForm` via `form="bottomRFQForm"`.
- Matched Products now defaults to the full lamp set flow and shows single-side + pair-kit results.
- Pair-kit cards now span full row on desktop and use a much larger image area.
- Regenerated pair-kit images into a tighter, larger display format.

## Audit
{
  "top_upload_exists": true,
  "bottom_upload_exists": false,
  "rfq_upload_form_attr": "bottomRFQForm",
  "pair_images_regenerated": 11,
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