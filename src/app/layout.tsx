import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
});

const zodiak = localFont({
  src: [
    {
      path: "../../public/fonts/Zodiak-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-zodiak",
});

export const metadata: Metadata = {
  title: "RANK ",
  description: "RANK is a luxury leather portfolio website showcasing premium collections, editorial stories, and bespoke atelier services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmMono.variable} ${zodiak.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen bg-offwhite antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
