# Dr Lolo Cosmetics - Developer Build Instructions

## Project Overview

Build the official website for **Dr Lolo Cosmetics** - a premium skincare and cosmetic company. This website must replicate the **exact design patterns, animations, layout structure, and component architecture** of the EDAKA website (the reference project), with all colors and content adapted for the Dr Lolo cosmetic brand.

**Reference Project:** Next.js 16 App Router, TypeScript, Tailwind CSS 4, Framer Motion, shadcn/ui, Tabler Icons

**Production URL (target):** https://www.drlolo.com (update as needed)

---

## Tech Stack (Exact Same as Reference)

| Technology | Version/Package |
|------------|-----------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Icons | Tabler Icons (`@tabler/icons-react`) |
| UI Components | shadcn/ui (full installation) |
| Fonts | Manrope (headings), Inter (body), Playfair Display (accent) |

---

## Brand Colors (CRITICAL - Replace All EDAKA Colors)

### Primary Palette
```css
--green: #2d6933           /* PRIMARY - Deep forest green. Replaces ALL maroon (#4d1423) usage */
--green-light: #3d8a45     /* Primary hover state. Replaces maroon-light (#6d2438) */
--green-dark: #1f4a24      /* Primary dark variant. Replaces maroon-dark (#3a0f1a) */
--gold: #c9a24d            /* ACCENT - Warm gold. Replaces ALL pink (#f4c8cd) usage */
--gold-light: #e8d5a3      /* Gold light variant. Replaces pink-light (#fce8eb) */
--gold-dark: #a8833a       /* Gold dark variant. Replaces pink-dark (#e8a8b0) */
--cream: #f7f3ea           /* Supporting - Soft cream background */
--green-tint: #eef6ef      /* Supporting - Very light green tint */
--black: #000000           /* Text and dark elements */
--white: #ffffff           /* Backgrounds and text on dark */
```

### Color Usage Mapping (EDAKA → Dr Lolo)
| EDAKA Color | Dr Lolo Color | Usage |
|-------------|---------------|-------|
| `#4d1423` (maroon) | `#2d6933` (green) | Header bg, footer bg, primary buttons, hero overlays, section backgrounds, CTA cards |
| `#6d2438` (maroon-light) | `#3d8a45` (green-light) | Hover states, gradients |
| `#3a0f1a` (maroon-dark) | `#1f4a24` (green-dark) | Dark variants, gradient ends |
| `#f4c8cd` (pink) | `#c9a24d` (gold) | Secondary text on dark bg, CTAs, header nav links, accent elements, borders |
| `#fce8eb` (pink-light) | `#e8d5a3` (gold-light) | Light backgrounds, hover states, selection bg |
| `#e8a8b0` (pink-dark) | `#a8833a` (gold-dark) | Darker accent variant |
| `#2d6933` (green - NEW) | `#2d6933` | Keep as primary |
| `#f7f3ea` (cream - NEW) | `#f7f3ea` | Alternate section backgrounds, cards |
| `#eef6ef` (green-tint - NEW) | `#eef6ef` | Muted backgrounds, form fields |

### Theme Configuration
- **Background:** Soft cream or green tint (`#f7f3ea` or `#eef6ef`) - replaces pinkish background
- **Foreground:** Dark green (`#1f4a24`) - replaces dark maroon text
- **Primary:** Deep green (`#2d6933`) - replaces maroon
- **Secondary:** Gold (`#c9a24d`) - replaces pink
- **Muted:** Light green tint (`#eef6ef`) - replaces light pink muted
- **Border:** Gold at 30% opacity (`#c9a24d/30`) - replaces pinkish borders
- **Radius:** `0.75rem` (12px) - same as reference
- **Theme color (viewport):** `#2d6933` - replaces `#4d1423`

---

## Typography (Exact Same as Reference)

### Fonts
| Font | Variable | Usage |
|------|----------|-------|
| **Manrope** | `--font-manrope` | Headings, sans-serif primary |
| **Inter** | `--font-inter` | Body text |
| **Playfair Display** | `--font-playfair` | Accent/serif (use sparingly for elegance) |

### CSS Font Stack
```css
--font-sans: 'Manrope', 'Inter', system-ui, sans-serif;
--font-serif: 'Playfair Display', Georgia, serif;
```

### Tailwind Config
```ts
fontFamily: {
  sans: ["var(--font-manrope)", "var(--font-inter)", "system-ui", "sans-serif"],
  serif: ["var(--font-playfair)", "Georgia", "serif"],
}
```

---

## Global Styles & Effects (Replicate Exactly)

### 1. Grain Texture Overlay
- Fixed full-screen SVG noise filter
- `opacity: 0.03`, `z-index: 1000`, `pointer-events: none`
- Uses `feTurbulence` fractalNoise with `baseFrequency="0.9"`

### 2. Custom Scrollbar
- Track: `var(--green-tint)` or `var(--gold-light)`
- Thumb: `var(--green)` with 4px radius
- Hover: `var(--green-light)`

### 3. Selection Color
- Background: `var(--gold)`, Text: `var(--green)`

### 4. Smooth Scroll
- `html { scroll-behavior: smooth }`

### 5. Text Balance
- `h1-h6 { text-wrap: balance }`

### 6. Marquee Animation
- Keyframes: `translateX(0)` → `translateX(-50%)`
- Duration: 30s linear infinite

---

## Complete Page Structure (Mirror EDAKA Exactly)

### 1. Homepage (`/`)
**Sections in exact order:**
1. **HeroSection** - Video/image background hero (see below for cosmetic adaptation)
2. **ServicesMarquee** - Scrolling service names ticker
3. **AboutSection** - Company intro with 3 feature cards
4. **ServicesSection** - Service grid with images
5. **WhyChooseSection** - 6 reasons on GREEN background
6. **FeaturedBlogs** - 3 featured blog posts
7. **CTASection** - Call-to-action banner
8. **ContactSection** - Contact form + info

### 2. About Page (`/about`)
1. **AboutHero** - Background image hero (green/gold abstract waves or natural botanical imagery)
2. **AboutContent** - Company description + Mission/Vision cards
3. **ValuesSection** - 5 company values grid
4. **CTASection** - Reused CTA banner

### 3. Services Page (`/services`)
1. **ServicesHero** - Background image hero (green geometric/natural pattern)
2. **ServicesList** - Detailed service list (alternating layout)
3. **CTASection** - Reused CTA banner

### 4. Blog Page (`/blog`)
1. **BlogHero** - Background image hero (dark green with gold accents)
2. **BlogGrid** - All blog posts with category filtering
3. **BlogCTA** - Blog-specific CTA section

### 5. Blog Post Page (`/blog/[slug]`)
- Static generation for all slugs
- Per-post metadata with OpenGraph
- Hero with blog background image + green overlay
- Back link, category badge, date, read time
- Featured image (16:9 aspect ratio)
- BlogPostContent component (custom markdown parser)
- CTA box at end of article
- Related posts section (same category, max 2)

### 6. Contact Page (`/contact`)
1. **ContactHero** - Gradient background (`from-green to-green-dark`)
2. **ContactSection** - Full contact form + info sidebar

---

## Component-by-Component Specifications

### Global Components

#### Site Header (`components/site-header.tsx`)
- **Fixed header**, `z-50`
- Framer Motion initial animation: `y: -100` → `y: 0` (0.6s easeOut)
- **Background behavior:**
  - Transparent on homepage when at top
  - Solid GREEN (`#2d6933`) when scrolled >30px OR on any non-homepage
- **Logo:** Dr Lolo logo, `h-10` mobile, `h-12` desktop (provide green/gold or white/gold variant)
- **Desktop nav links:** `text-gold/80` → hover `text-gold` with `hover:bg-white/10` rounded-full
- **"Book a Consultation" CTA:** Gold pill (`bg-gold text-green`) linking to WhatsApp, with small green dot indicator
- **Mobile:** Hamburger menu (`IconMenu2`/`IconX`), slide-in drawer from right (80% width, spring animation with `damping: 25, stiffness: 200`), staggered nav item entrance (`delay: index * 0.1`)

#### Site Footer (`components/site-footer.tsx`)
- `bg-green text-gold-light`
- Large watermark logo at 5% opacity (150% width, centered)
- 4-column grid on desktop: Brand, Quick Links, Services, Contact
- Social icons: Instagram, Facebook, TikTok, Pinterest (cosmetic brand appropriate)
- Icons with `whileHover={{ scale: 1.1 }}`, `whileTap={{ scale: 0.95 }}`
- Bottom bar: copyright

#### Floating WhatsApp Button (`components/floating-whatsapp.tsx`)
- Appears after 2s delay
- Position: `fixed bottom-6 right-6 z-50`
- WhatsApp green (`#25D366`) circular button, `w-14 h-14`
- Pulse ring animation (`animate-ping opacity-30`)
- `whileHover={{ scale: 1.1 }}`, `whileTap={{ scale: 0.95 }}`

---

### Homepage Sections (`components/sections/`)

#### HeroSection (`components/sections/hero-section.tsx`)
- **Video or high-quality image background** - Use a luxurious cosmetic/skincare video or hero image (serum drops, botanical ingredients, glowing skin aesthetic). Must be local file in `/public/`.
  - If video: `autoPlay muted loop playsInline webkit-playsinline="true"`
- **Green overlay**: `bg-green/70` (replaces maroon/70)
- **Parallax scroll**: `useScroll` + `useTransform` - background moves at 30% scroll speed, content fades 1→0 over first 50% scroll
- **Animated geometric rings** (3 rings - EXACT same animation, different colors):
  - Large: 800px, `rotate: 360` (60s), `scale: [1, 1.1, 1]` (8s)
  - Medium: 600px, `rotate: -360` (50s), `scale: [1, 1.2, 1]` (10s)
  - Ring colors: Use `border-gold/30` and `border-gold/20` instead of pink variants
- **Content layout:**
  - Eyebrow badge with pulse dot: "Premium Skincare & Cosmetics" (or similar)
  - H1: "Discover **Radiant** Skin Naturally" (use gold accent span for "Radiant")
  - Description: Short tagline about natural beauty
  - 2 CTAs: "Shop Products" (gold button) + "Book Consultation" (outline gold button)
- **Right side (desktop only)**: Animated ring system with centered Dr Lolo logo
  - 3 concentric rings rotating at different speeds (30s, 25s, 20s)
  - Ring colors: gold at various opacities
- **Stats row**: 3 stats (see `lib/constants.ts` below)
- **Scroll indicator**: Bouncing dot in rounded rectangle at bottom (gold color)

#### ServicesMarquee (`components/sections/services-marquee.tsx`)
- `bg-gold` background, `border-y border-green/10`
- Infinite horizontal scroll: `animate={{ x: [0, "-50%"] }}` (30s linear)
- Items: All service titles + extra cosmetic-related terms
- Separator: `✦` at `text-green/40`

#### AboutSection (`components/sections/about-section.tsx`)
- Two-column layout: text left, cards right
- `useInView` trigger (`once: true, margin: "-100px"`)
- 3 about cards with icons (use cosmetic-appropriate Tabler icons: `IconSparkles`, `IconLeaf`, `IconHeart`)
- Cards: `group` hover effects - icon bg switches green, text changes color
- Background gradient decoration on right (green-tint to transparent)

#### ServicesSection (`components/sections/services-section.tsx`)
- 3-column grid of service cards
- Each card has: hover gradient overlay, image (40px height container), title with arrow icon reveal, description
- Hover: `scale-105` on image, border color change to gold, shadow
- "View All Services" CTA button (gold bg, green text)

#### WhyChooseSection (`components/sections/why-choose-section.tsx`)
- Full-width `bg-green text-gold-light`
- 6 feature cards in 3-column grid
- Icons: Use cosmetic-appropriate Tabler icons (`IconAward`, `IconLeaf`, `IconDroplet`, `IconShieldCheck`, `IconStar`, `IconMessage`)
- Card hover: `bg-gold/10`, icon bg switches to gold with green icon

#### FeaturedBlogs (`components/sections/featured-blogs.tsx`)
- Displays 3 specific featured posts by slug
- 3-column card grid with image hover zoom (`group-hover:scale-105`)
- "View All Articles" button linking to `/blog`

#### CTASection (`components/sections/cta-section.tsx`)
- Centered card with `bg-gradient-to-br from-green via-green to-green-dark`
- Decorative blur circles (gold tinted) and border rings
- Headline with gold accent span
- Two buttons: "Book a Consultation" (gold) + "Chat on WhatsApp" (outline gold)

#### ContactSection (`components/sections/contact-section.tsx`)
- Two-column: Contact info (2/5) + Form (3/5)
- Contact info cards: Phone, Email, Address (with hover effects)
- WhatsApp quick-response box (`bg-[#25D366]/10`)
- **Form fields**: Full Name, Phone, Email, Service/Concern (dropdown), Message
- **Form submission**: Constructs WhatsApp message, opens `wa.me` URL
- Uses shadcn `Input`, `Label`, `Button` components

---

### About Page Components (`components/about/`)

#### AboutHero (`components/about/about-hero.tsx`)
- Background: Green/gold abstract botanical or natural texture image
- Overlay: `bg-green/40`
- 2 animated rotating border rings (gold color)
- Centered title: "About Dr Lolo Cosmetics"

#### AboutContent (`components/about/about-content.tsx`)
- Prose-style company description
- Mission card: `bg-green text-gold-light` with `IconTarget` or `IconLeaf`
- Vision card: `bg-card border` with `IconEye` or `IconSparkles`

#### ValuesSection (`components/about/values-section.tsx`)
- 5 values in grid (2 cols mobile, 5 cols desktop)
- Suggested cosmetic brand values:
  1. Natural Ingredients (`IconLeaf`)
  2. Scientific Excellence (`IconFlask`)
  3. Cruelty-Free (`IconHeart`)
  4. Premium Quality (`IconDiamond`)
  5. Customer Care (`IconHandHeart`)
- Card hover: icon bg → green, scale 1.1

---

### Services Page Components (`components/services/`)

#### ServicesHero (`components/services/services-hero.tsx`)
- Background: Green botanical/natural pattern
- Overlay: `bg-green/30`
- Same ring decorations as other heroes (gold)

#### ServicesList (`components/services/services-list.tsx`)
- **6 services in vertical list** with alternating image/text layout
- Odd items: image left, text right
- Even items: image right, text left (`lg:order-2` / `lg:order-1`)
- Each service has: icon (in 64px rounded box), title, description, details
- `aspect-[4/3]` images with gradient overlay

**Suggested Dr Lolo Services (6):**
1. **Facial Treatments** - Customized facials for all skin types
2. **Body Care** - Body scrubs, wraps, and treatments
3. **Skin Consultation** - Personalized skincare analysis and routines
4. **Product Sales** - Premium skincare products for home use
5. **Anti-Aging Solutions** - Advanced treatments for youthful skin
6. **Acne & Scar Treatment** - Specialized solutions for problem skin

---

### Blog Page Components (`components/blog/`)

#### BlogHero (`components/blog/blog-hero.tsx`)
- Background: Dark green with gold accents/botanical elements
- Overlay: `bg-green/30`
- Standard ring decorations (gold)

#### BlogGrid (`components/blog/blog-grid.tsx`)
- **Category filter buttons**: All, Skincare Tips, Product Reviews, Beauty Routines, Natural Ingredients, Anti-Aging, Body Care
- Active state: `bg-green text-gold-light`
- Inactive: `bg-muted text-muted-foreground`
- 3-column responsive grid
- Same card design as FeaturedBlogs

#### BlogCTA (`components/blog/blog-cta.tsx`)
- Green card with hardcoded hex colors (`#2d6933`, `#c9a24d`, `#e8d5a3`)
- Decorative rings and blur
- Two CTAs: "Book a Consultation" + "Chat on WhatsApp"

#### BlogPostContent (`components/blog/blog-post-content.tsx`)
- **Custom markdown parser** (no external MD library - build custom like reference)
- Supports: `## ` H2, `### ` H3, `**bold**` subheadings, `- ` unordered lists, `1. ` ordered lists, inline `**bold**`
- Wraps in `motion.article` with fade-in animation

---

### Contact Page Components (`components/contact/`)

#### ContactHero (`components/contact/contact-hero.tsx`)
- **Gradient background**: `bg-gradient-to-b from-green to-green-dark`
- Same rotating ring decorations (gold)
- Title: "Contact Dr Lolo"

---

## Data Configuration (`lib/constants.ts`)

### Company Information
```ts
export const COMPANY_NAME = "Dr Lolo Cosmetics";
export const COMPANY_TAGLINE = "Premium Skincare & Natural Beauty";
export const PHONE = "+[YOUR_PHONE]"; // Update with actual number
export const EMAIL = "info@drlolo.com"; // Update with actual email
export const ADDRESS = "Dr Lolo Cosmetics, [Street Address], [City], [Country]";
export const WHATSAPP_NUMBER = "[YOUR_WHATSAPP_NUMBER]"; // Include country code, no +
```

### Navigation Items
```ts
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
```

### Services (6 items)
| ID | Title | Icon | Description |
|----|-------|------|-------------|
| `facial-treatments` | Facial Treatments | `face-mask` or `sparkles` | Customized facials using natural ingredients tailored to your skin type |
| `body-care` | Body Care | `bath` or `heart` | Luxurious body scrubs, wraps, and moisturizing treatments |
| `skin-consultation` | Skin Consultation | `stethoscope` or `search` | One-on-one analysis to create your perfect skincare routine |
| `product-sales` | Premium Products | `bottle` or `package` | Take-home skincare products made with natural ingredients |
| `anti-aging` | Anti-Aging Solutions | `clock` or `refresh` | Advanced treatments to reduce fine lines and restore youthful glow |
| `acne-treatment` | Acne & Scar Treatment | `shield-check` or `bandage` | Specialized solutions for acne-prone skin and scar reduction |

### Stats (3 items)
- `100%` - Natural Ingredients
- `Premium` - Skincare Quality
- `Expert` - Beauty Consultation

### Why Choose Us (6 items)
1. **Natural & Organic** - Only the finest natural ingredients
2. **Expert Guidance** - Professional skincare consultants
3. **Premium Quality** - Luxury products and treatments
4. **Personalized Care** - Customized for your skin type
5. **Proven Results** - Visible improvements guaranteed
6. **Friendly Service** - Warm, welcoming experience

### WhatsApp Configuration
```ts
export const WHATSAPP_CONFIG = {
  number: "[YOUR_WHATSAPP_NUMBER]",
  defaultMessage: "Hello Dr Lolo, I would like to inquire about your skincare services and products.",
};
```

---

## Blog System (`lib/blog-data.ts`)

### BlogPost Interface (same as reference)
```ts
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}
```

### Categories
All, Skincare Tips, Product Reviews, Beauty Routines, Natural Ingredients, Anti-Aging, Body Care

### 6 Blog Posts (Cosmetic/Beauty Topics)
1. **"5 Essential Skincare Steps for Glowing Skin Every Morning"**
   - Category: Beauty Routines
   - Keywords: morning skincare routine, glowing skin tips, daily face care

2. **"Why Natural Ingredients Make the Best Skincare Products"**
   - Category: Natural Ingredients
   - Keywords: natural skincare, organic beauty products, botanical ingredients

3. **"Understanding Your Skin Type: A Complete Guide"**
   - Category: Skincare Tips
     - Keywords: skin type guide, oily skin, dry skin, combination skin

4. **"The Best Anti-Aging Ingredients to Look For"**
   - Category: Anti-Aging
   - Keywords: anti-aging skincare, retinol, vitamin C serum, collagen

5. **"How to Build a Simple but Effective Skincare Routine"**
   - Category: Beauty Routines
   - Keywords: simple skincare routine, beginner skincare, basic face care

6. **"Body Care Tips: Beyond Just Face Skincare"**
   - Category: Body Care
   - Keywords: body skincare, body scrub, moisturizing routine

### Content Format
Use the same custom markdown-like format as the reference:
- `## ` for H2 headings
- `### ` for H3 headings
- `**text**` for bold subheadings
- `- ` for unordered lists
- `1. ` for ordered lists

---

## Animation & Interaction Patterns (REPLICATE EXACTLY)

### Framer Motion Patterns (Mandatory)
1. **`useInView`** with `once: true, margin: "-100px"` - triggers animations when sections enter viewport
2. **`initial/animate`** with staggered delays (`0.1`, `0.2`, `0.3`, etc.)
3. **`useScroll` + `useTransform`** - parallax hero effect
4. **`AnimatePresence`** - mobile menu mount/unmount
5. **Spring physics** - mobile drawer (`damping: 25, stiffness: 200`)

### Standard Animation Values
| Effect | Initial | Animate | Duration |
|--------|---------|---------|----------|
| Fade up | `{ opacity: 0, y: 20/30/40 }` | `{ opacity: 1, y: 0 }` | 0.6s |
| Fade left | `{ opacity: 0, x: -30 }` | `{ opacity: 1, x: 0 }` | 0.6s |
| Fade right | `{ opacity: 0, x: 30 }` | `{ opacity: 1, x: 0 }` | 0.6s |
| Scale in | `{ opacity: 0, scale: 0.8 }` | `{ opacity: 1, scale: 1 }` | 0.8s |
| Stagger children | `delay: index * 0.1` | - | - |

### Hover & Tap States
- `whileHover={{ scale: 1.1 }}`
- `whileTap={{ scale: 0.95 }}`
- Cards: `group` class with `group-hover:` transitions
- Images: `group-hover:scale-105` with `transition-transform duration-500`

### Special Effects (All Mandatory)
| Effect | Implementation | Colors |
|--------|---------------|--------|
| Video/image hero background | `<video>` or `<Image>` with parallax scroll transform | Green overlay `#2d6933/70` |
| Rotating rings | `animate={{ rotate: 360 }}` varying durations (20-120s) | Gold borders at 20-30% opacity |
| Marquee ticker | `motion.div` with `animate={{ x: [0, "-50%"] }}` | Gold bg, green text |
| Grain overlay | SVG noise filter, `opacity: 0.03`, `z-index: 1000` | Same as reference |
| WhatsApp pulse | `animate-ping` on pseudo-ring | `#25D366` |
| Scroll indicator | `animate={{ y: [0, 8, 0] }}` infinite | Gold color |
| Image hover zoom | `group-hover:scale-105` transition | Same |
| Icon bg swap | `group-hover:bg-green` on icon container | Green/gold swap |

---

## Image Assets Required

### Logos (3 variants needed)
1. **Hero Logo** - Dr Lolo logo on transparent background, gold or white color
2. **Footer Logo** - Same logo optimized for green background
3. **Favicon** - Geometric or lettermark icon (green/gold)

### Hero Background
- High-quality video or image showing:
  - Cosmetic products (serums, creams, lotions)
  - Botanical/natural elements (leaves, flowers, water drops)
  - Luxurious spa aesthetic
  - Soft, warm lighting
- Local file in `/public/`

### Page Backgrounds (3 images for About, Services, Blog heroes)
1. **About Hero Background**: Soft green botanical/leaf texture or abstract natural waves
2. **Services Hero Background**: Green geometric pattern with gold accents or natural ingredients flat lay
3. **Blog Hero Background**: Dark green with gold triangular/botanical accents

### Service Images (6 images)
| Service | Image Description |
|---------|-------------------|
| Facial Treatments | Close-up of facial treatment being applied, spa setting |
| Body Care | Body scrub application or luxurious body products |
| Skin Consultation | Consultant examining client's skin with professional lighting |
| Premium Products | Elegant product lineup on marble or natural stone |
| Anti-Aging Solutions | Before/after style or premium serum application |
| Acne & Scar Treatment | Clear skin close-up or treatment application |

### Blog Images (6 images)
| Post | Image Description |
|------|-------------------|
| Morning Skincare | Bright morning skincare routine flat lay |
| Natural Ingredients | Botanical ingredients, herbs, flowers |
| Skin Type Guide | Diverse skin textures or face close-ups |
| Anti-Aging Ingredients | Serums, vitamin bottles, scientific aesthetic |
| Simple Routine | Minimal skincare products on bathroom counter |
| Body Care Tips | Body products, loofah, natural soaps |

---

## SEO Configuration

### Metadata (`app/layout.tsx`)
```ts
export const metadata = {
  metadataBase: new URL("https://www.drlolo.com"), // Update with actual domain
  title: {
    template: "%s | Dr Lolo Cosmetics",
    default: "Dr Lolo Cosmetics | Premium Skincare & Natural Beauty",
  },
  description: "Dr Lolo Cosmetics offers premium skincare treatments, natural beauty products, and personalized skin consultations. Discover radiant, healthy skin with our expert team.",
  keywords: "skincare, cosmetics, beauty products, facial treatments, natural skincare, anti-aging, body care, skin consultation, [your location]",
  creator: "Dr Lolo Cosmetics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US", // Update as needed
    url: "https://www.drlolo.com",
    siteName: "Dr Lolo Cosmetics",
    title: "Dr Lolo Cosmetics | Premium Skincare & Natural Beauty",
    description: "Premium skincare treatments and natural beauty products.",
    images: [
      {
        url: "/og-image.jpg", // Create OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "Dr Lolo Cosmetics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Lolo Cosmetics",
    description: "Premium skincare treatments and natural beauty products.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.drlolo.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};
```

### Viewport
```ts
export const viewport = {
  themeColor: "#2d6933",
  maximumScale: 5,
};
```

---

## WhatsApp Integration Points

Same 7 entry points as reference, adapted for Dr Lolo:
1. Header "Book a Consultation" CTA (desktop + mobile)
2. Homepage hero CTA
3. CTA Section buttons (all pages)
4. Blog CTA
5. Contact form submission (pre-filled with form data)
6. Floating WhatsApp button (global)
7. Contact page quick-response box

---

## shadcn/ui Components to Install

Install the same full suite (reference has ~58 components). Minimum required:
- `button`
- `input`
- `label`
- `card`
- `select` (for service dropdown)
- `textarea`

---

## Configuration Files

### `next.config.mjs`
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
};

export default nextConfig;
```

### `tailwind.config.ts`
- Dark mode: `class`
- Content paths: same as reference
- Custom colors: `green` (DEFAULT/light/dark), `gold` (DEFAULT/light/dark), `cream`, `green-tint`
- Custom animation: `marquee` keyframes

---

## File Structure (Mirror Reference Exactly)

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   ├── floating-whatsapp.tsx
│   ├── theme-provider.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── services-marquee.tsx
│   │   ├── about-section.tsx
│   │   ├── services-section.tsx
│   │   ├── why-choose-section.tsx
│   │   ├── featured-blogs.tsx
│   │   ├── cta-section.tsx
│   │   └── contact-section.tsx
│   ├── about/
│   │   ├── about-hero.tsx
│   │   ├── about-content.tsx
│   │   └── values-section.tsx
│   ├── services/
│   │   ├── services-hero.tsx
│   │   └── services-list.tsx
│   ├── blog/
│   │   ├── blog-hero.tsx
│   │   ├── blog-grid.tsx
│   │   ├── blog-cta.tsx
│   │   └── blog-post-content.tsx
│   ├── contact/
│   │   └── contact-hero.tsx
│   └── ui/                    # shadcn/ui components
├── lib/
│   ├── constants.ts
│   ├── blog-data.ts
│   └── utils.ts
├── public/
│   ├── hero-video.mp4         # or hero image
│   ├── blog-images/
│   ├── service-images/
│   ├── logos/
│   ├── og-image.jpg
│   ├── favicon.ico
│   └── apple-icon.png
└── [config files]
```

---

## Accessibility Requirements

- Semantic HTML structure (same as reference)
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliant (green/gold passes WCAG on appropriate backgrounds)
- Screen reader friendly content

---

## Performance Requirements

- Next.js Image optimization (or `unoptimized: true` for static export)
- Video with autoplay, muted, loop, playsInline for cross-browser
- Font display swap for custom fonts
- Lazy loading for below-fold content
- CSS animations optimized with `transform` and `opacity`

---

## Commands

```bash
# Development
pnpm dev

# Build (must produce static export in `dist/`)
pnpm build

# Start production
pnpm start

# Lint
pnpm lint
```

---

## Quality Checklist

Before delivery, verify:
- [ ] All 6 pages render correctly
- [ ] All animations match reference timing and easing
- [ ] Green (`#2d6933`) replaces ALL maroon instances
- [ ] Gold (`#c9a24d`) replaces ALL pink instances
- [ ] Header is solid green on scroll / transparent on homepage top
- [ ] Mobile menu slides in with spring animation
- [ ] WhatsApp floating button has pulse animation
- [ ] Grain overlay is visible on all pages
- [ ] Custom scrollbar styled with green/gold
- [ ] All hover effects work (cards, images, icons, buttons)
- [ ] Blog category filtering works
- [ ] Contact form sends to WhatsApp with pre-filled message
- [ ] All images have appropriate alt text
- [ ] SEO metadata is correct for Dr Lolo
- [ ] Favicon and OG images are configured

---

*Instructions generated from EDAKA website reference. Replicate all patterns, layouts, and interactions exactly - only colors and content change for Dr Lolo Cosmetics.*
