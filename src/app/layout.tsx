import type { Metadata } from "next";
import { Quicksand, Kaushan_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header/Header";
import { ProductsProvider } from "@/store/productsProvider";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

const kaushanScript = Kaushan_Script({
  variable: "--font-kaushan-script",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pizza Mania",
  description: "Pizza delivery website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.variable} ${kaushanScript.variable}`}>
        <ProductsProvider>
          <Header />
          <ThemeProvider>{children}</ThemeProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}
