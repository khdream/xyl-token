import React from "react";
import "./globals.css";
import { Web3Modal } from "../context/web3modal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XYL Token Pre-Order Registration",
  description: "Pre-order registration page for XYL Token",
  icons: {
    icon: "/fav.png",
    apple: [
      { url: "/fav.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Web3Modal>
      <html lang="en">
        <body className="bg-[#FAFAFA]">
          {children}
        </body>
      </html>
    </Web3Modal>
  );
}
