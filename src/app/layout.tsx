import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Static Stack",
  description: "A static website powered by Deploy Box",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
