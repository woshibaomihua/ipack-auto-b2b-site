# I-Pack Auto Parts V3 Authority Website Package

This is a static B2B inquiry website package for Guangzhou I-Pack Auto Parts Co., Limited.

## Structure
- index.html
- products.html
- quote-list.html
- oe-number-search.html
- vehicle-search.html
- blog.html
- about.html / contact.html / faq.html
- products/*.html
- categories/*.html
- vehicles/*.html
- oe/*.html
- blog/*.html
- solutions/*.html
- assets/css/styles.css
- assets/js/main.js
- assets/images/*.webp
- product-data.json
- sitemap.xml
- robots.txt
- llms.txt
- SEO-AEO-AI-ROADMAP.md

## Important
- All images are PNG. No SVG images are used.
- The ZIP root contains index.html directly.
- All paths are relative.
- Forms are demo / mailto compatible and include Netlify form attributes. Connect a real form backend before launch.
- Replace placeholder domain and contact information before going live.

## Domain replacement
Search and replace:
- https://ipackautoparts.com
- lynda.yang@ipackauto.com
- +86 18620780862
- 8613500000000


## Newly integrated company assets
- assets/images/company-logo.webp
- assets/images/company-banner-service.webp
- assets/images/company-profile.webp
- assets/images/company-achievements.webp

These assets have been integrated into the homepage and About page to improve brand trust and B2B inquiry conversion.


## V6 clean banner update
- Homepage hero now uses a single clean banner image block.
- Duplicate hero text panel has been removed to avoid mixed/overlapping display.
- Search/RFQ functions are separated into clear sections below the banner.
- Homepage H1 is now placed in the search section for clean UX and SEO readability.

## V9 Modular Hero Update
- The homepage Hero now uses a clean background image: `assets/images/hero-auto-parts-clean.webp`.
- Hero headline, subtitle, buttons and selling-point tags are rendered as HTML/CSS, not burned into the image.
- This avoids duplicate text, improves mobile responsiveness, and is better for SEO/AEO/AI readability.
- WhatsApp floating button is placed on the left bottom; Get Free Quote floating button is placed on the right bottom.


## V10 Modular Company Section Update
- Homepage company section rebuilt as an HTML + CSS module instead of relying on one single infographic.
- Source materials from the uploaded company posters were cropped into reusable assets: factory aerial, machine equipment, workshop, R&D manufacturing, showroom, exhibitions, certificates and development milestones.
- Homepage and About page now use these modular company assets with SEO-friendly HTML text.


## V12 Company Section Redesign
- Rebuilt the company profile area into a brochure-inspired HTML + CSS module based on the provided company visuals.
- Exhibitions, certificates and milestones are now shown as direct large image blocks, similar to the preferred display style.
- Homepage and About page both use the updated company presentation system.

## V15 Products / OE / Vehicle Search Revision
- Removed the V14 standalone vehicle taxonomy page idea.
- Kept the original focused vehicle landing page structure.
- Checked the make/model coverage from the user-provided category screenshot and added those makes/models into Products and Vehicle Search selectors.
- Products page still includes Year / Make / Model / Category / OE filters, default product display and professional product cards.
- OE Search still returns matched products based on URL or input search.
- No extra `for-xxx-parts.html` vehicle category pages are generated.


## V17 Featured Products + WhatsApp Fixed
- Homepage Featured Products section replaced with generated product cases.
- Product cards now support hover-to-vehicle-scene preview where a scene image is available.
- WhatsApp floating button is replaced across all HTML pages with visual auto-parts WhatsApp button.
- Audit report: SITE-AUDIT-V17.md


## V18 Finder + WhatsApp Glow
- Homepage finder panel reordered: vehicle fitment filters are now above the OE / keyword search area.
- WhatsApp floating button upgraded with a glow + pulse effect.


## V19 Final Polish
- One-Stop Service section switched to a vertical layout to preserve full image visibility.
- WhatsApp floating button now uses glow + bounce animation.
- Final site audit added in SITE-AUDIT-V19.md.


## V20 Navigation Simplified + Products Search Center
- Main navigation now removes OE Search and Vehicle Search to reduce redundancy.
- Products becomes the main product search center, including OE search, vehicle filtering, category search, popular chips and RFQ guidance.
- OE Search and Vehicle Search pages remain available for SEO, footer/internal links and advanced search needs.


## V21 Modular Service + Clickable Product Cards + Auto Detail Gallery
- One-Stop Service section rebuilt as image + HTML + CSS module.
- Featured product images and dynamic product card images are now clickable to product detail pages.
- Selected product detail pages use auto-play product / vehicle-scene image sliders.
- Audit report: SITE-AUDIT-V21.md


## V22 Contact / Navigation / Products Search Fix
- Phone updated: +86 18620780862
- WhatsApp updated: https://wa.me/8618620780862?text=Hi%2C%20I%20am%20interested%20in%20I-Pack%20auto%20parts.%20Please%20help%20confirm%20fitment%20and%20quote.%20Product%20/%20OE%20number%3A%20Vehicle%20model%20/%20year%3A%20Quantity%3BCan%20we%20chat%3F
- Main nav now includes Blog and About, replacing Company. Guides was not added because there is no guides.html page; Blog is used as the content/SEO entry.
- Products page shows default product cards before filtering and supports live search from existing product data.
- Audit report: SITE-AUDIT-V22.md


## V23 RFQ Conversion + Image Upload/Paste
- RFQ actions simplified: Get Quote / Add to RFQ / View Detail / WhatsApp.
- Contact, Quote List and product RFQ forms now support image file upload and paste-image preview.
- Forms use multipart/form-data and are ready for Netlify/Formspree/custom backend file receiving.
- WhatsApp remains linked to https://wa.me/8618620780862?text=Hi%2C%20I%20am%20interested%20in%20I-Pack%20auto%20parts.%20Please%20help%20confirm%20fitment%20and%20quote.%20Product%20/%20OE%20number%3A%20Vehicle%20model%20/%20year%3A%20Quantity%3BCan%20we%20chat%3F
- Audit report: SITE-AUDIT-V23.md


## V24 Simplified Products Search
- Products search panel simplified to one primary search bar, one compact filter row, a short quick-search row and one RFQ tip.
- Removed the heavy Advanced links row and 4-step process strip from the top search panel.
- Kept all search functionality and default product display.


## V25 RFQ Autofill + Clickable Product Images + Hover Gallery
- Add to RFQ stores complete product information and writes it into the Quote List form automatically.
- Quote List shows selected product image, fitment, OE and quantity fields.
- Homepage Featured Catalog product images are clickable.
- Product detail thumbnails update the top gallery on hover/focus/click.
- Audit report: SITE-AUDIT-V25.md


## V26 Fitment 3D RFQ Integration
- Integrated the uploaded `auto-light-fitment-3d-rfq-site-v6-3d-look` product-page module into `products.html`.
- Added vehicle/OE fitment search, lamp hotspots, matched products, single-side and pair-kit selection, popular vehicle strip, 3D-look modal and RFQ inquiry box.
- Uploaded assets are isolated under `assets/fitment-v26/` to avoid conflicts with the main site.
- Fitment module Add to Inquiry List also syncs selected products into the main site RFQ localStorage (`ipack_inquiry_list_v4`).


## V27 Email + WhatsApp Prefill
- Contact email updated to `lynda.yang@ipackauto.com` across HTML/JS/JSON/MD/XML/TXT files.
- WhatsApp links updated to a prefilled buyer inquiry template.
- WhatsApp number remains `+86 18620780862`.


## V28 Fitment RFQ UX Polish
- WhatsApp prefilled message simplified to avoid a long preview box.
- Homepage OE search now sends buyers to `products.html?search=...`.
- Fitment module selected part panel now supports Left / Right / Set choice and editable quantity.
- Fitment module Inquiry List quantities are editable.
- Pair-kit product cards use a larger left+right product image display.
- WhatsApp template: `Hi, I am interested in I-Pack auto parts. Please help confirm fitment and quote. Product / OE number: Vehicle model / year: Quantity;Can we chat?`


## V35 Launch Ready Fixes
- Replaced all placeholder domains with https://ipackautoparts.com.
- Removed development footer note.
- Converted image assets to WebP and compressed package image weight.
- Products RFQ form now uses Netlify Forms-compatible POST multipart form.
- Added lazy loading / async decoding to images.
- Added analytics placeholder comments in `<head>` for GA4 / Microsoft Clarity IDs.
- Audit report: `SITE-AUDIT-V35-LAUNCH.md`.


## V44 Deep Audit
- Added full search parameter application for Products fitment tool.
- Removed random demo OE generation from fitment product cards.
- Expanded fitment model maps and make alias matching.
- Rechecked fitment left/right product-image references.
- Added audit contact sheet: AUDIT-FITMENT-LEFT-RIGHT-SHEET-V44.png
- Added report: SITE-AUDIT-V44-DEEP-FIXED.md
