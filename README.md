# Aaryan's Portfolio 

https://v0-portfolio-zeta-eight.vercel.app/

## Features

- Modern UI with dark theme and purple accents
- Fully responsive design
- Accessible components using Radix UI
- Optimized performance with Next.js
- Integrated resume section
- Social media integration
- Dynamic project showcase
- TypeScript for type safety

## Tech Stack

- **Framework:** Next.js 15.2.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Forms:** React Hook Form + Zod
- **Deployment:** Netlify
- **Other Tools:**
  - next-themes (theme management)
  - tailwindcss-animate (animations)
  - recharts (data visualization)
  - date-fns (date formatting)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aaryouz/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

The site will be available at `http://localhost:3000`

## Project Structure

```
portfolio/
├── app/                 # Next.js app directory (App Router)
│   ├── page.tsx        # Home page
│   └── projects/       # Dynamic project routes
├── components/         # Reusable React components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static assets
│   ├── images/        # Image assets
│   └── resume/        # Resume files
├── styles/            # CSS and styling
└── types/             # TypeScript definitions
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the necessary build configurations.

### Automatic Deployments

- Push to `main` branch triggers production deployment
- Preview deployments are created for pull requests

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Add any required environment variables here
```
