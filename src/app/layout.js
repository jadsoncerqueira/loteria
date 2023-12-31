import { Inter } from "next/font/google";
import Navegacao from "@/components/navegacao";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <body className={inter.className}>
        <Navegacao />
        {children}
      </body>
    </html>
  );
}
