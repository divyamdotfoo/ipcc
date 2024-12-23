import type { Metadata } from "next";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Courier_Prime } from "next/font/google";
export const metadata: Metadata = {
  title: "Earth We Inherit",
  description: "Clear answers to all your climate change questions.",
  metadataBase: new URL("https://earthweinherit.vercel.app"),
};

export const viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

const anton = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-anton",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistMono.variable} ${GeistSans.variable} ${anton.variable} font-mono antialiased`}
      >
        <div className=" w-full">{children}</div>
      </body>
    </html>
  );
}
