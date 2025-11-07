import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoulThread - Under Development",
  description: "Website currently under development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
