import "./globals.css";

export const metadata = {
  title: "Noah Krynicki — Builder & Founder",
  description:
    "Portfolio of Noah Krynicki, a DFW-based builder creating software, business systems, and digital products.",
  openGraph: {
    title: "Noah Krynicki — Builder & Founder",
    description:
      "Software, systems, and businesses built with curiosity and intent.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
