# Deploying this portfolio elsewhere

This project is portable. Keep the `app` folder and replace the host-specific package configuration with the standard Next.js configuration included in the export ZIP.

## Easiest option: Vercel

1. Upload the export to a new GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Vercel detects Next.js automatically. Keep the default build settings and deploy.

## Netlify

1. Upload the export to GitHub.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Select the repository and allow Netlify to detect Next.js.
4. Deploy with the detected defaults.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Before making it public

- Confirm that the email address is the one you want public.
- Replace the current GitHub avatar with your preferred professional photo if desired.
- Add project screenshots or demos as they become available.
- Do not publish private AeroDetail OS source, customer data, CRM records, pricing internals, credentials, or AAC operating documents.
