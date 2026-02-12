import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viztok — AI-Generated Video Streaming",
  description:
    "The home for AI-generated short-form TV shows and movies. Create, watch, and earn on the next generation of entertainment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
