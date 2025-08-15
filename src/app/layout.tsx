import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sidebar } from "@/components/Sidebar";
import "simplebar-react/dist/simplebar.min.css";
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
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${ibmPlexSansArabic.variable} font-sans bg-th-background text-white`}
        suppressHydrationWarning
      >
        <div className="md:grid md:grid-cols-[1fr_theme(spacing.sidebar-width)]">
          <main className="w-full min-w-0">{children}</main>
          <Sidebar />
        </div>
        {/* Empty divs for React Portals, matching page.html */}
        <div id="modal"></div>
        <div id="drop-menu"></div>
        <div id="draggable"></div>
      </body>
    </html>
  );
}
