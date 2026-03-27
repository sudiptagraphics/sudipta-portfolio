# Sudipta Mondal — Portfolio

A production-ready Next.js 14 portfolio site for **Sudipta Mondal**, Product Designer & Frontend Engineer.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Space Grotesk + DM Sans

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
sudipta-portfolio/
├── app/
│   ├── globals.css       # All global styles & animations
│   ├── layout.tsx        # Root layout with fonts & metadata
│   └── page.tsx          # Main page assembling all sections
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Hero section with code visual
│   ├── About.tsx         # About + philosophy cards
│   ├── Experience.tsx    # Timeline of work history
│   ├── Projects.tsx      # Filterable project grid
│   ├── Skills.tsx        # Skill cards + tech stack
│   ├── Contact.tsx       # Contact CTA section
│   ├── Footer.tsx        # Footer with social links
│   ├── Reveal.tsx        # Scroll-reveal wrapper component
│   ├── StatCounter.tsx   # Animated number counter
│   └── CursorGlow.tsx    # Mouse-following glow effect
├── lib/
│   └── data.ts           # All content data (projects, experience, etc.)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Customisation

All content lives in **`lib/data.ts`** — edit projects, experience, and tech stack there.

To change personal details (name, email, social links), update:
- `app/layout.tsx` — page title & meta description
- `components/Navbar.tsx` — logo initials
- `components/Contact.tsx` — email & LinkedIn URL
- `components/Footer.tsx` — social links

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npx vercel
```
