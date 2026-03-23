import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Frontend Developer Portfolio",
    template: "%s | Frontend Developer",
  },

  description:
    "Frontend developer specializing in React, JavaScript, and modern web technologies. Building fast, responsive web applications.",

  keywords: [
    "Frontend Developer",
    "React",
    "JavaScript",
    "Web Developer",
    "Portfolio",
  ],

  authors: [{ name: "Lasha Ergeshidze" }],
  creator: "Lasha Ergeshidze",

  openGraph: {
    title: "lergeshidze",
    description:
      "Projects, skills, and experience in modern web development.",
    url: "https://your-domain.com",
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
      
      <body

        className="min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
