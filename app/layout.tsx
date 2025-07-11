import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { PrefProvider } from "./context/PrefContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexaid.com.au"),
  title: "Apex Aid Services",
  description: "Care that Uplifts, Support that Endures",
  openGraph: {
    siteName: "Apex Aid Services",
    type: "website",
    locale: "en_US",
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
        className={"antialiased flex flex-col justify-between min-h-screen"}
      >
        <PrefProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </PrefProvider>
      </body>
    </html>
  );
}
