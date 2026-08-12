import "./globals.css";

export const metadata = {
  title: "Noah Krynicki — Operations, Product & Business Development",
  description:
    "Portfolio of Noah Krynicki, a DFW-based operator and product builder creating software, business systems, and customer-focused workflows.",
  authors: [{ name: "Noah Krynicki" }],
  creator: "Noah Krynicki",
  openGraph: {
    title: "Noah Krynicki — Operations, Product & Business Development",
    description:
      "Software, operating systems, and customer-focused workflows built with curiosity and intent.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Krynicki — Operations, Product & Business Development",
    description:
      "Software, operating systems, and customer-focused workflows built with curiosity and intent.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
