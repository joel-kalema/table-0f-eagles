import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";

const inter = Questrial({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: "TABLE OF EAGLES",
  description: "is a conference carrying a vision of the Preparation of the Bride of Christ for the soon return of our Lord Jesus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
