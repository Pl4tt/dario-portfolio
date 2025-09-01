import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ModeProvider } from "@/components/mode/ModeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  title: "Dario Patt — Portfolio",
  description: "Curiosity-led. Reliable, versatile systems.",
  openGraph: { title: "Dario Patt — Portfolio", description: "Curiosity-led. Reliable, versatile systems.", type: "website" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ModeProvider>
          {children}
        </ModeProvider>
      </body>
    </html>
  );
}
