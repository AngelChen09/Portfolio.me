import type { Metadata } from "next";
import { Geist, Geist_Mono, Aboreto, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aboretoSans = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  weight: "400",
});

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Angel's Portfolio",
  description: "made with <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aboretoSans.variable} ${interSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
