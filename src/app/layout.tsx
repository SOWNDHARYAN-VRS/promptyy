import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyApp - Next.js Application",
  description: "A modern Next.js application built with TypeScript and Tailwind CSS",
  keywords: ["nextjs", "react", "typescript", "tailwindcss"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "MyApp",
    description: "A modern Next.js application",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
