# RFQ Form Setup Note

This V23 package simplifies the RFQ process and adds image upload / paste-image support.

## Contact
- Phone / WhatsApp: +86 18620780862
- WhatsApp link: https://wa.me/8618620780862?text=Hi%2C%20I%20am%20interested%20in%20I-Pack%20auto%20parts.%20Please%20help%20confirm%20fitment%20and%20quote.%20Product%20/%20OE%20number%3A%20Vehicle%20model%20/%20year%3A%20Quantity%3BCan%20we%20chat%3F

## Image upload / paste support
The forms now include:
- `<input type="file" name="product_photos" accept="image/*" multiple>`
- a paste area where customers can press Ctrl+V to paste product screenshots / OE labels / chat images
- thumbnail preview before submit
- `enctype="multipart/form-data"` for image file delivery

## Important
Static HTML cannot receive uploaded files by itself. To receive uploaded photos, deploy the site with one of these:
- Netlify Forms with file upload support
- Formspree / Basin / Getform file upload endpoint
- Your own backend API

The UI and form HTML are already prepared for file upload. If only WhatsApp is used, customers can click WhatsApp and send the same images in chat.
