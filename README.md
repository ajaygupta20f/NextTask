# Vedic Astrologer Website

A modern, responsive website for a Vedic astrologer built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Hero Section**: Beautiful landing page with cosmic design elements
- **API-Driven**: Dynamic content loaded from `/api/hero` endpoint
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: ShadCN UI components with custom styling
- **Performance**: Next.js Image optimization and App Router

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: ShadCN UI
- **Icons**: Lucide React
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vedic-astrologer
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── hero/
│   │       └── route.ts          # Hero API endpoint
│   ├── globals.css               # Global styles and CSS variables
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── ui/
│   │   └── button.tsx            # Button component
│   └── Hero.tsx                  # Hero section component
├── lib/
│   └── utils.ts                  # Utility functions
└── types/
    └── hero.ts                   # TypeScript types
```

## API Endpoints

### GET /api/hero

Returns hero section data:

```json
{
  "title": "Unlock Your Cosmic Destiny",
  "subtitle": "Discover the ancient wisdom of Vedic astrology...",
  "ctaText": "Book Now",
  "ctaLink": "/book",
  "imageUrl": "https://...",
  "badges": [
    { "label": "10k+ Sessions", "icon": "Star" },
    { "label": "Rated 4.9/5", "icon": "ThumbsUp" },
    { "label": "Verified Expert", "icon": "ShieldCheck" }
  ]
}
```

## Customization

### Colors

The color scheme is defined in `src/app/globals.css` using CSS custom properties:

- `--primary`: Purple (#8b5cf6)
- `--accent`: Yellow (#fbbf24)
- `--background`: Dark (#0a0a0a)
- `--foreground`: Light (#ededed)

### Styling

The design uses Tailwind CSS with custom color tokens. All colors reference CSS custom properties for easy theming.

## Deployment

The project can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
