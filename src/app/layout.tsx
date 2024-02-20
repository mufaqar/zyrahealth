import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";



const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Zyra Health",
  description: "All About Zyra Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
