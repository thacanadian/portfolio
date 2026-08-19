export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: [] }],
    sitemap: "https://noahkrynicki-portfolio.vercel.app/sitemap.xml",
  };
}
