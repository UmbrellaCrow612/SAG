import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body className="w-full h-full container mx-auto bg-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
