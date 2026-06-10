# V36 Homepage + Search Audit

## Fixed / Improved
- Homepage vehicle form now has native fallback: `method="GET"` and `action="products.html"`.
- Homepage OE / keyword search form now has native fallback: `method="GET"` and `action="products.html"`.
- Homepage vehicle filter redirects to `products.html?...#product-listing-grid`.
- Homepage OE search redirects to `products.html?search=...#product-listing-grid`.
- Homepage Year options expanded to 1984–2026.
- Homepage Make and Model lists expanded.
- Product page filters now use the same Make / Model / Year options as homepage, so redirected homepage selections are retained.
- Search normalization improved: punctuation, slash and hyphen variations are matched more reliably.
- Homepage title/meta adjusted from narrow Toyota wording to Japanese Auto Lights & Body Parts supplier positioning.

## Notes
- Homepage fast RFQ form is still Netlify-style HTML form. If deploying on Vercel, Accio should connect it to a Vercel Function or third-party form endpoint.
