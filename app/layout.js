import "./globals.css";
import "lenis/dist/lenis.css";
import "./motion.css";
import "./launch.css";
import SmoothMotion from "./SmoothMotion";
import Analytics from "./Analytics";

const siteUrl = "https://noahkrynicki-portfolio.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Noah Krynicki — Product, Technical Operations & Business Systems",
    template: "%s — Noah Krynicki",
  },
  description:
    "Portfolio of Noah Krynicki, a Fort Worth / DFW product builder and technical operator creating software, business systems, customer workflows, and zero-to-one ventures.",
  authors: [{ name: "Noah Krynicki" }],
  creator: "Noah Krynicki",
  keywords: [
    "Noah Krynicki",
    "product builder",
    "technical operations",
    "business systems",
    "software portfolio",
    "Fort Worth",
    "DFW",
    "implementation",
    "operations",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Noah Krynicki — Product, Technical Operations & Business Systems",
    description: "Software, operating systems, and customer-focused workflows built from zero to one.",
    type: "website",
    url: siteUrl,
    siteName: "Noah Krynicki",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Krynicki — Product, Technical Operations & Business Systems",
    description: "Software, operating systems, and customer-focused workflows built from zero to one.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Noah Krynicki",
  url: siteUrl,
  image: "https://avatars.githubusercontent.com/u/146765811?v=4",
  jobTitle: "Product Builder and Technical Operator",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fort Worth",
    addressRegion: "TX",
    addressCountry: "US",
  },
  sameAs: [
    "https://github.com/thacanadian",
    "https://www.linkedin.com/in/noah-krynicki-48513b312/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Noah Krynicki Portfolio",
  url: siteUrl,
  author: { "@type": "Person", name: "Noah Krynicki" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <SmoothMotion />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
