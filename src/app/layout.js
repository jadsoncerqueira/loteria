import { Inter } from "next/font/google";
import Navegacao from "@/components/navegacao";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Resultado ao vivo dos sorteios das Loterias Caixa",
  description:
    "Resultados Mega-Sena · Lotofácil · Quina · Lotomania · Timemania · Dupla Sena · Federal · Dia de sorte · Super sete",
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navegacao />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
