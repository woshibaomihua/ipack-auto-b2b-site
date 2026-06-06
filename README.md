# I-PACK Auto Parts B2B Inquiry Site

A professional, SEO-optimized B2B website built with Next.js 15 + Tailwind CSS, specifically designed for **I-PACK Auto Parts** to capture wholesale leads for Japanese and Hybrid vehicle parts.

## Project Structure
- `app/`: Next.js App Router pages and global styles.
- `components/`: Reusable UI components (Hero, RFQ Form, Vehicle Grid, etc.).
- `lib/constants.ts`: Centralized site content and trust points for easy updates.
- `public/`: Assets and static files.

## Key Features
- **Conversion-Optimized RFQ Form**: Tailored for auto parts with OE number and vehicle model fields.
- **Vehicle-Centric Navigation**: Quick entrances for Toyota Prius, Hiace, Corolla, Camry, RAV4, Honda Civic, and more.
- **Trust Signals**: Integrated 7-year Alibaba Gold Supplier status and 4.9/5 store rating.
- **SEO Ready**: Metadata configured with high-value automotive wholesale keywords.
- **Fully Responsive**: Mobile-friendly design for global wholesale buyers.

## Development & Build

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Local Setup
1. Navigate to the project folder:
   ```bash
   cd ipack-auto-b2b-site
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to preview.

### Build for Production
To generate a production-ready build:
```bash
npm run build
```

## Deployment

### Vercel (Recommended)
This project is pre-configured for Vercel.
1. Push this folder to a GitHub repository.
2. Connect the repository to Vercel.
3. The build settings will be automatically detected (Next.js).

### GitHub Pages
Note: Next.js SSG is required for GitHub Pages. You may need to add `output: 'export'` to `next.config.ts`.

---
Created by Accio Work AI Assistant for Guangzhou I-Pack Auto Parts Co., Limited.
