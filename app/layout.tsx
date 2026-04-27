import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/component/Navbar";

export const metadata: Metadata = {
  title: "Bonita | Skincare That Understands Your Skin",
  description:
    "Elevate your glow with clean, science-backed skincare. Cruelty-free, sustainable, and packed with antioxidants.",
  keywords:
    "skincare, clean beauty, serum, moisturizer, sunscreen, organic skincare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
