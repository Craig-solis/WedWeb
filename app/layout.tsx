import type { Metadata } from "next";
import { Geist, Geist_Mono, Parisienne } from "next/font/google";
import "./globals.css";
import Nav from "./utils/nav";
import ScrollToTop from "./utils/ScrollToTop";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const parisienne = Parisienne({
  subsets: ['latin'],
  weight: '400', // Parisienne only has 400
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyge and Alyssa's Wedding",
  description: "A beautiful wedding celebration coming soon and created by Craig Solis",
  icons: "/hearts-32.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <ScrollToTop />
        <Nav />
        <div className="fade-in pt-31">
          {children}
        </div>
      </body>
    </html>
  );
}
