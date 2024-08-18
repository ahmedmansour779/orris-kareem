import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./providers/aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orris",
  description: "Generated by create next app",
  // icons: {
  //   icon: "./favIcon.svg",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
