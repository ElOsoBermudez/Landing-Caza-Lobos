

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme/ThemeProvider";
import Navbar02 from "@/components/navbar-02/navbar-02";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Calobos - La caza del lobo en España",
  description: "Información sobre la conservación y gestión del lobo ibérico en España.",
  icons: {
    icon: "/lobo.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LenisProvider>
          <ThemeProvider>
            <Navbar02 />
            {children}
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
