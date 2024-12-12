import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  weight : ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Nicolas PONS - Portfolio",
  description: "Full-Stack développeur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${JetBrainsMono.className}`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
