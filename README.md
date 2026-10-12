# Caryn Greeff

Vercel-ready Next.js website with the original design, imagery, content, and subtle scroll animations. The animations respect reduced-motion preferences.

## Upload to GitHub and deploy

1. Extract the ZIP on your computer. Upload the extracted files and folders to a **new GitHub repository**. Do not upload the ZIP itself. `package.json`, `vercel.json`, `app/`, and `public/` must be at the repository root.
2. In Vercel, choose **Add New → Project**, then import that repository.
3. Confirm **Framework Preset: Next.js** and **Root Directory: ./ ** (the directory containing `package.json`). The included `vercel.json` configures installation, build, and output automatically.
4. Click **Deploy**, wait for **Ready**, and open the deployment URL.

No environment variables, database, or Cloudflare account are required. The contact button opens an email addressed to hello@caryngreeff.com.

If replacing an existing repository, replace its old contents rather than merging this package with the previous Cloudflare/Sites project. In particular, do not retain the previous `vite.config.ts`, `worker/`, `build/`, `db/`, `.openai/`, package.json, or other lockfiles. A fresh repository and fresh Vercel import avoid stale settings.

## Local development

Use Node.js 24 and pnpm 11.25.0.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000.

```sh
pnpm build
pnpm start
```

The production output is `.next`. Do not set Vercel's output directory to `dist` or `public`.

## Structure

- `app/page.tsx`: page content
- `app/globals.css`: original responsive styling
- `app/scroll-animations.tsx`: accessible scroll animations
- `app/layout.tsx`: fonts, title, and metadata
- `public/`: image and favicon
- `vercel.json`: Vercel deployment configuration

This package does not transfer the original Sites hosting access restrictions. Manage deployment access separately in Vercel if required.
