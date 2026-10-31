# Veloura Parfums — React E-Commerce Website

A responsive perfume-storefront project built with React.js and Vite.

## Features
- Responsive home page and product catalogue
- Product category filters (All, Women, Men, Unisex)
- Live product search
- Add-to-cart functionality, quantity controls, remove item and subtotal
- Newsletter form with basic email validation
- Mobile navigation and responsive layouts
- Demo checkout notice (no real payment processing)

## Requirements
- Node.js 18 or newer
- npm

## Run locally
1. Extract the ZIP.
2. Open this project folder in VS Code.
3. Open Terminal in the project folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Create production build
```bash
npm run build
npm run preview
```

The production website is generated in the `dist` folder.

## Deploy on Vercel
1. Create a GitHub repository and upload all project files (do not upload `node_modules`).
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Vercel should detect Vite automatically.
5. Use `npm run build` as the build command and `dist` as the output directory.
6. Click Deploy.

## Important project notes
- Product catalogue, prices and product details are sample/demo data stored in `src/main.jsx`.
- Product photography is loaded from Unsplash, so an internet connection is needed to display those images.
- Checkout is a front-end demo only. It does not collect payments or create real orders.
- This is a front-end React project; no backend, login system or database is connected.

## Viva preparation
Be ready to explain:
- React components and JSX
- `useState` for cart, filters, search and newsletter state
- `useMemo` for filtering products
- `map()` to render product cards and cart items
- Event handlers such as `onClick`, `onChange` and `onSubmit`
- Vite development server and production build
