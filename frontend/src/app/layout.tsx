import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />

        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />

        <meta name="robots" content="index, follow" />
      </head>
      <body className="w-full h-full container mx-auto bg-black">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
