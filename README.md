# Appscrip-task-Sharafath-Abi

This project is a responsive Product Listing Page (PLP) built as part of the Appscrip frontend task.  
The page is implemented in Next.js using the App Router, TypeScript, server-side rendering, and plain CSS.

Live URL: https://appscrip-task-sharafath-abi.vercel.app/plp

## About the Task

The goal was to recreate the provided ecommerce PLP design as closely as possible and keep the implementation clean, lightweight, and responsive across desktop, tablet, and mobile.

Along with the UI, the task also asked for:

- SSR
- responsive behavior
- SEO basics
- minimal use of external packages
- clean folder structure
- reusable components

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Plain CSS
- DummyJSON products API

## What’s Included

- Responsive PLP layout based on the design reference
- Header, navigation, filters, sorting, product grid, newsletter, and footer
- Server-rendered product fetching
- Fallback product data if the API is unavailable
- Page metadata and structured data for SEO
- Accessible buttons, labels, and alt text

## Project Structure

```bash
app/
  layout.tsx
  page.tsx
  plp/page.tsx
components/
  Header.tsx
  Navbar.tsx
  FiltersSidebar.tsx
  SortDropdown.tsx
  ProductGrid.tsx
  ProductCard.tsx
  Footer.tsx
  Newsletter.tsx
  PLPClient.tsx
lib/
  api.ts
  seo.ts
  schema.ts
styles/
  globals.css
  header.css
  plp.css
  filters.css
  product.css
  footer.css
```

## Data Source

Product data is fetched from:

https://dummyjson.com/products

If the API is temporarily unavailable, the page falls back to a local product dataset so the UI still renders without crashing.

## SEO Notes

The task explicitly asked for SEO settings, so the project includes:

- page title
- meta description
- semantic heading structure
- product image alt text
- structured data schema

`lib/seo.ts` handles metadata for the page head, while `lib/schema.ts` generates JSON-LD structured data.

## Running Locally

Install dependencies:

```bash
npm install
```

Optional environment setup:

```bash
cp .env.example .env.local
```

You can change `NEXT_PUBLIC_SITE_URL` if you want metadata and schema URLs to
point to a different deployed domain.

You can also change `NEXT_PUBLIC_PRODUCTS_API_BASE` if you want to point the PLP
to a different API base URL.

Start the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000/plp
```

If you run into stale dev cache issues, clear the `.next` folder and restart:

```bash
rm -rf .next
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Notes

- The homepage redirects to `/plp`
- The page is rendered on demand for SSR
- Styling is done entirely with plain CSS and media queries
- The implementation avoids UI libraries and unnecessary packages

## Deployment

The project is deployed here:

https://appscrip-task-sharafath-abi.vercel.app/plp
