# Agarwal Hosiery Silvassa — Premium Fashion Landing Page

An editorial, luxury-grade single-page website for **Agarwal Hosiery Silvassa**, built with React, Vite, Tailwind CSS, and Lucide icons. Designed with a contemporary fashion aesthetic inspired by international apparel brands.

---

## 🌟 Brand & Store Identity

- **Business Name:** Agarwal Hosiery Silvassa
- **Tagline:** Everyday Essentials. Effortlessly Styled.
- **Philosophy:** Clothing • Comfort • Everyday Style
- **Business Type:** Clothing Store | Men's Wear | Ladies' Wear | Hosiery & Undergarments Wholesale
- **Contact Number:** +91 76009 03749
- **Store Address:** Shop No. 05, Rajshree Tower, Silvassa Ring Road, near Ekdant Square Sky Heights, Yogi Vihar, Silvassa, Dadra and Nagar Haveli and Daman and Diu – 396230, India.
- **Google Maps:** [Agarwal Hosiery Silvassa on Google Maps](https://www.google.com/maps/search/?api=1&query=Agarwal+Hosiery+Shop+No+05+Rajshree+Tower+Silvassa+Ring+Road+Silvassa+396230)

---

## 🎨 Color Palette & Design System

- **Charcoal Black:** `#151515` (Primary dark background & luxury contrast)
- **Warm Ivory:** `#F8F6F2` (Editorial canvas & light section backgrounds)
- **Champagne Gold:** `#C6A576` (Accents, badges, active indicators, CTA highlights)
- **Soft Gray:** `#EAE7E2` (Subtle dividers & borders)
- **Typography:**
  - Headlines: *Cormorant Garamond* (High-contrast editorial serif)
  - Interface & Body: *Plus Jakarta Sans* (Clean, modern geometric sans-serif)

---

## 🚀 Website Architecture & Features

1. **Sticky Adaptive Navbar**
   - Transparent over hero section; transitions smoothly into a frosted dark glass on scroll.
   - Bespoke typography logo with gold accent dot and Silvassa subtext.
   - Smooth navigation links with subtle gold underline animations.
   - Direct "Call Now" header CTA and luxury full-screen mobile slide-in drawer.

2. **Cinematic Hero Section**
   - High-impact editorial imagery with subtle ambient zoom effect.
   - Staggered headline reveal: *"EVERYDAY ESSENTIALS. EFFORTLESSLY STYLED."*
   - Subtitle: *"Men's Wear • Women's Wear • Hosiery"*.
   - Action buttons: "Explore Collections" & "Visit Our Store".
   - Animated scroll indicator.

3. **Shop by Category ("FIND YOUR STYLE")**
   - **Men's Wear:** *"Everyday style, made simple."*
   - **Women's Wear:** *"Comfort meets elegance."*
   - **Hosiery & Essentials:** *"Your everyday essentials."*
   - Large vertical editorial cards with hover zoom and click-to-filter interaction with lookbook.

4. **Featured Lookbook ("THE EVERYDAY EDIT")**
   - Asymmetric editorial grid featuring 6 curated lifestyle fashion visuals.
   - Interactive category filter tabs (All Editions, Men's Wear, Women's Wear, Hosiery & Essentials).
   - High-resolution Lightbox modal with garment details, fabric composition, and one-tap Call/WhatsApp enquiry.

5. **Wholesale Feature ("WHOLESALE MADE SIMPLE.")**
   - Headline: *"WHOLESALE MADE SIMPLE."*
   - Supporting text: *"Hosiery and clothing essentials for your business."*
   - Prominent **Enquire Now** button initiating phone call to `+91 76009 03749`.
   - Secondary WhatsApp Wholesale Desk CTA.
   - 4 honest sourcing pillars: Direct Sourcing, Quality Combed Cotton, Regional Trade Partnership, Prompt Local Support.

6. **Visit Our Store ("COME FIND US")**
   - Detailed location card with exact verified address and landmark reference (near Ekdant Square Sky Heights).
   - Embedded interactive Google Map.
   - One-tap "Get Directions (Google Maps)" navigation button.
   - Direct store calling and WhatsApp buttons.

7. **Footer**
   - Minimal and elegant with brand logo, store philosophy, verified contact details, Google Maps link, and back-to-top scroll.

8. **Mobile Floating Action Bar**
   - Fixed minimal bottom action bar on mobile viewports for instant access to "Call Now" and "Directions".
   - Touch-optimized with 44px+ tap targets and padded viewport so content is never obscured.

9. **SEO & Structured Data**
   - Schema.org `ClothingStore` JSON-LD structured data.
   - OpenGraph and Twitter card meta tags for high-engagement social sharing.
   - Custom SVG luxury monogram favicon (`AH`).

---

## 🛠️ Development & Deployment

### Local Development
```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Preview production build locally
npm run preview
```

### Production Build
```bash
# Generate optimized static bundle in ./dist
npm run build
```

### Cloudflare Pages Deployment
This project is configured with relative base paths (`base: './'`), making it 100% compatible with Cloudflare Pages:

- **Framework preset:** `Vite` (or `None`)
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/`
