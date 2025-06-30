import React from "react";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";

import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sandbox",
  description: "Sandbox project using Next.js",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col antialiased`}
      >
        <Providers>
          <div className="min-h-screen bg-[url(/ellipsis.svg)] bg-[length:30px_30px] bg-repeat">
            <Navbar />
            <main className="mt-2 flex flex-wrap justify-center gap-4 px-4">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
