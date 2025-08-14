import type { Metadata } from "next";
import localFont from "next/font/local"; // Import the localFont utility
import "./globals.css";

// Configure the local font with all its variations
const ibmPlexSansArabic = localFont({
  src: [
    {
      path: '../../public/fonts/IBMPlexSansArabic-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IBMPlexSansArabic-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IBMPlexSansArabic-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IBMPlexSansArabic-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IBMPlexSansArabic-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IBMPlexSansArabic-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/IBMPlexSansArabic-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap', // Use swap for better performance
  variable: '--font-ibm-plex', // Define the CSS variable name
});

export const metadata: Metadata = {
  title: "Podbay", // You can change this later
  description: "Search for podcasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*
        The ibmPlexSansArabic.variable class provides the CSS variable
        to the entire application.
      */}
      <body className={ibmPlexSansArabic.variable}>
        {children}
      </body>
    </html>
  );
}