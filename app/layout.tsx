import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ESGIN - The Trust Protocol",
  description: "Trash is Bonus, Action is Asset. Digitizing global ESG actions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "antialiased min-h-screen bg-background text-foreground selection:bg-emerald-500/30"
        )}
      >
        {children}
      </body>
    </html>
  );
}
