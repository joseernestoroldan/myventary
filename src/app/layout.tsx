import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Inventra",
  description: "Aplicacion para gestionar inventarios",
  icons: [{ rel: "icon", url: "/InventraIcon.png" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <div className="bg-multi-gradient min-h-screen w-full">{children}</div>
      </body>
    </html>
  );
}
