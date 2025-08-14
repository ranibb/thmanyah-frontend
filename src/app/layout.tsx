// src/app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import "./globals.css";

const ibmPlexSansArabic = localFont({
  src: [
    { path: "../../public/fonts/IBMPlexSansArabic-Thin.otf", weight: "100" },
    {
      path: "../../public/fonts/IBMPlexSansArabic-ExtraLight.otf",
      weight: "200",
    },
    { path: "../../public/fonts/IBMPlexSansArabic-Light.otf", weight: "300" },
    { path: "../../public/fonts/IBMPlexSansArabic-Regular.otf", weight: "400" },
    { path: "../../public/fonts/IBMPlexSansArabic-Medium.otf", weight: "500" },
    {
      path: "../../public/fonts/IBMPlexSansArabic-SemiBold.otf",
      weight: "600",
    },
    { path: "../../public/fonts/IBMPlexSansArabic-Bold.otf", weight: "700" },
  ],
  display: "swap",
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Podbay",
  description: "Search for podcasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSansArabic.variable} font-sans bg-th-background text-white`}
      >
        <div className="md:grid md:grid-cols-[theme(spacing.sidebar-width)_1fr]">
          <Sidebar />
          <main className="w-full min-w-0">
            <Header />
            <div className="mt-[64px] p-5 md:mt-[50px]">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
