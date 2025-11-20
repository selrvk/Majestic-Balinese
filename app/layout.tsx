import type { Metadata } from "next";
import { Geist, Geist_Mono, Italianno} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const italianno = Italianno({
  subsets: ["latin-ext"], 
  weight: "400",
  variable: "--font-italianno",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Majestic Balinese Mansion",
  description: "Majestic Balinese Mansion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${italianno.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
