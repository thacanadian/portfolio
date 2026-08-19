export default function sitemap() {
  const base = "https://noahkrynicki-portfolio.vercel.app";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/projects`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/resume`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
