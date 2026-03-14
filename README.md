# Promptyy

A modern Next.js application built with TypeScript and Tailwind CSS. Ready for your next open source project.

## Features

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Static Export** - Hostable on any static hosting
- **SEO Ready** - Proper metadata and Open Graph tags
- **Dark Mode** - Automatic dark mode support

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/myapp.git
cd myapp
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
# or
pnpm build
```

The static files will be generated in the `dist` directory.

## Project Structure

```
myapp/
├── src/
│   └── app/
│       ├── globals.css    # Global styles
│       ├── layout.tsx     # Root layout with metadata
│       └── page.tsx       # Home page
├── dist/                  # Build output
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Deployment

This project is configured for static export, making it easy to deploy to:

- **Vercel** - Zero config deployment
- **Netlify** - Drag and drop the `dist` folder
- **GitHub Pages** - Free hosting for OSS projects
- **Any CDN** - Upload the `dist` folder

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
