import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Geist_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Handbook | August",
  description: "Onboarding tool for August Collections.",
  icons: {
    icon: "/images/favicon-h.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakartaSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} bg-[#f4f0ec] text-[#1f2937] antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <TopNav />
          <main className="mx-auto w-full max-w-[420px] px-6 pb-16 sm:max-w-[1440px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
