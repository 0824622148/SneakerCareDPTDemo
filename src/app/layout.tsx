import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sneaker Care Department | Premium Sneaker Cleaning & Restoration",
  description:
    "Johannesburg's #1 sneaker cleaning and restoration studio. Book online, free collection & delivery. From beaters to heat — guaranteed.",
  keywords: "sneaker cleaning, sneaker restoration, Johannesburg, shoe cleaning, sneakercare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="bg-bg-primary text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
