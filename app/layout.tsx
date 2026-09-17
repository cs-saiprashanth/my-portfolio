import type { Metadata } from "next";
import { Mona_Sans, Geist_Mono, Corinthia } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const signatureFont = Corinthia({
  weight: ["400", "700"],
  variable: "--font-signature",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Prashanth — UI/UX Product Designer & Developer",
  description: "Cinematic Product Design Portfolio of Sai Prashanth — UI/UX, AI Interfaces & Design Systems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} ${geistMono.variable} ${signatureFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#050508] text-zinc-100 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
