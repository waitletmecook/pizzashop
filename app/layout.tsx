import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; 
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "900"], 
  variable: "--font-montserrat", 
});

export const metadata: Metadata = {
  title: "Fibo Pizza — Доставка еды",
  description: "Заказывайте лучшую пиццу и пасту онлайн",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body className={`${montserrat.className} min-h-full flex flex-col bg-[#F9F9F9]`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}