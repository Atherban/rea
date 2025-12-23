import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavHeader from "@/src/components/layout/NavHeader";
import Footer from "@/src/components/layout/Footer";

/* =========================
   SEO Metadata
   ========================= */

export const metadata: Metadata = {
  title: {
    default: "Rajeshwari Engineering & Automation",
    template: "%s | Rajeshwari Engineering & Automation",
  },
  description:
    "Electrical panel manufacturing and industrial automation solutions including LT panels, APFC, MCC, PLC, SCADA, and DG synchronization systems.",
  openGraph: {
    title: "Rajeshwari Engineering & Automation",
    description:
      "Electrical panel manufacturing and industrial automation solutions for industrial and commercial applications.",
    url: "https://www.rajeshwariengineering.com",
    siteName: "Rajeshwari Engineering & Automation",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.rajeshwariengineering.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rajeshwari Engineering & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajeshwari Engineering & Automation",
    description:
      "Electrical panel manufacturing and industrial automation solutions.",
    images: ["https://www.rajeshwariengineering.com/og-image.jpg"],
  },
};

/* =========================
   Fonts
   ========================= */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* =========================
   Root Layout
   ========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          min-h-screen flex flex-col
          ${geistSans.variable}
          ${geistMono.variable}
        `}
      >
        <NavHeader />

        {/* Main content grows to push footer down */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
