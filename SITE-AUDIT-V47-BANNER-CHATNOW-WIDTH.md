# V47 Banner + Chat Now + Products Width Audit

## Fixes
- Updated homepage banner description to include Suzuki: `Toyota, Honda, Suzuki, Nissan, Mitsubishi and more`.
- Added a `Chat Now` WhatsApp button in the Products page Inquiry Box near `Add Selected Part to RFQ`.
- The Chat Now button opens the exact WhatsApp API URL requested by the user.
- Reduced Products page desktop width from the previous very-wide layout to a more comfortable centered width.
- Kept mobile width responsive and full-width friendly.

## Audit JSON

```json
{
  "homepage_banner_has_suzuki": true,
  "chat_now_button_exists": true,
  "chat_now_href_correct": true,
  "product_width_css_added": true,
  "missing_refs_changed_pages": [],
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
