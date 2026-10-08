import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Providers from "./providers";
// @ts-expect-error CSS is loaded by Next.js and has no TypeScript declarations.
import "./globals.css";

export const metadata: Metadata = {
  title: "StudyBoard",
  description: "A study group task coordination app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}