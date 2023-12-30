"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import "./navegacao.css";

export default function Navegacao() {
  let navLinks = [
    { nome: "HOME", path: "/" },
    { nome: "MAIS MILIONÁRIA", path: "/jogo/maismilionaria" },
    { nome: "MEGASENA", path: "/jogo/megasena" },
    { nome: "LOTOFÁCIL", path: "/jogo/lotofacil" },
    { nome: "QUINA", path: "/jogo/quina" },
    { nome: "LOTOMANIA", path: "/jogo/lotomania" },
    { nome: "TIMEMANIA", path: "/jogo/timemania" },
    { nome: "DUPLASENA", path: "/jogo/duplasena" },
    { nome: "FEDERAL", path: "/jogo/federal" },
    { nome: "DIA DE SORTE", path: "/jogo/diadesorte" },
    { nome: "SUPER SETE", path: "/jogo/supersete" },
  ];

  let router = usePathname();
  router = router.split("/");
  router = router[router.length - 1];

  const selected = "selected";

  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          {navLinks.map((link, index) => {
            const pat = link.path.split("/");
            return (
              <li key={index}>
                <Link
                  className={`links ${
                    router === pat[pat.length - 1] ? selected : ""
                  }`}
                  href={link.path}
                >
                  {link.nome}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
