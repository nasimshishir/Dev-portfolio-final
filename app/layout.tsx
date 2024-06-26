import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { Toaster } from "@/components/ui/toaster";

const jetbrainMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: [],
  variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
  title: "Nasim's Portfolio",
  description: "Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainMono.variable}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
