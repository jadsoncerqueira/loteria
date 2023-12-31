export const navLinks = [
  { nome: "HOME", path: "/" },
  {
    nome: "MAIS MILIONÁRIA",
    path: "/jogo/maismilionaria",
    col: 6,
    cor: "rgb(3, 65, 168)",
  },
  { nome: "MEGASENA", path: "/jogo/megasena", col: 6, cor: "rgb(0, 128, 89)" },
  {
    nome: "LOTOFÁCIL",
    path: "/jogo/lotofacil",
    col: 5,
    cor: "rgb(156, 22, 98)",
  },
  { nome: "QUINA", path: "/jogo/quina", col: 5, cor: "rgb(83, 19, 170)" },
  {
    nome: "LOTOMANIA",
    path: "/jogo/lotomania",
    col: 5,
    cor: "rgb(173, 78, 0)",
  },
  {
    nome: "TIMEMANIA",
    path: "/jogo/timemania",
    col: 7,
    cor: "rgb(15, 128, 0)",
  },
  {
    nome: "DUPLASENA",
    path: "/jogo/duplasena",
    col: 6,
    cor: "rgb(180, 20, 62)",
  },
  { nome: "FEDERAL", path: "/jogo/federal", col: 5, cor: "rgb(0, 100, 194)" },
  {
    nome: "DIA DE SORTE",
    path: "/jogo/diadesorte",
    col: 7,
    cor: "rgb(130, 107, 13)",
  },
  {
    nome: "SUPER SETE",
    path: "/jogo/supersete",
    col: 7,
    cor: "rgb(90, 114, 29)",
  },
];

// const aux = navLinks.map(
//   (i) => `https://www.loteriascaixaresultados.com${i.path}`
// );
// console.log(aux);

export function formatarValorEmReal(valor) {
  const valorFormatado = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return valorFormatado;
}
