import GetJogos from "@/services/getJogos";
import Link from "next/link";

export default function Navegacao() {
  let navLinks = [
    { nome: "MAIS MILIONÁRIA", path: "maismilionaria" },
    { nome: "MEGASENA", path: "megasena" },
    { nome: "LOTOFÁCIL", path: "lotofacil" },
    { nome: "QUINA", path: "quina" },
    { nome: "LOTOMANIA", path: "lotomania" },
    { nome: "TIMEMANIA", path: "timemania" },
    { nome: "DUPLASENA", path: "duplasena" },
    { nome: "FEDERAL", path: "federal" },
    { nome: "DIA DE SORTE", path: "diadesorte" },
    { nome: "SUPER SETE", path: "supersete" },
  ];
  return (
    <header>
      {/* <h1>Logo</h1> */}
      <nav>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>{link.nome}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
