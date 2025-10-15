import type { Metadata } from "next";
import { Tinos, Parisienne } from "next/font/google";
import "./globals.css";
import Nav from "./utils/nav";
import ScrollToTop from "./utils/ScrollToTop";

const tinos = Tinos({
  variable: "--font-tinos",
  subsets: ["latin"],
  weight: '400', // Tinos only has 400
});

const parisienne = Parisienne({
  subsets: ['latin'],
  weight: '400', // Parisienne only has 400
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
      <body className={`${tinos.className} ${parisienne.className} antialiased overflow-x-hidden`}>
        <ScrollToTop />
        <Nav />
        <div className="fade-in pt-31">
          {children}
        </div>
      </body>
    </html>
  );
}
