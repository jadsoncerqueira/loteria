import "./cardLoteria.css";

const navLinks = [
  { nome: "HOME", path: "/" },
  { nome: "MAIS MILIONÁRIA", path: "/jogo/maismilionaria", col: 6 },
  { nome: "MEGASENA", path: "/jogo/megasena", col: 6 },
  { nome: "LOTOFÁCIL", path: "/jogo/lotofacil", col: 5 },
  { nome: "QUINA", path: "/jogo/quina", col: 5 },
  { nome: "LOTOMANIA", path: "/jogo/lotomania", col: 5 },
  { nome: "TIMEMANIA", path: "/jogo/timemania", col: 7 },
  { nome: "DUPLASENA", path: "/jogo/duplasena", col: 6 },
  { nome: "FEDERAL", path: "/jogo/federal", col: 5 },
  { nome: "DIA DE SORTE", path: "/jogo/diadesorte", col: 7 },
  { nome: "SUPER SETE", path: "/jogo/supersete", col: 7 },
];

export default function CardLoteria({ loteria }) {
  const {
    concurso,
    data,
    local,
    dezenasOrdemSorteio,
    dezenas,
    premiacoes,
    dataProximoConcurso,
    valorArrecadado,
    valorAcumuladoProximoConcurso,
    valorEstimadoProximoConcurso,
    acumulou,
  } = loteria;

  const col = navLinks.find(
    (nav) =>
      nav.path.split("/")[nav.path.split("/").length - 1] === loteria.loteria
  ).col;
  console.log(loteria);
  return (
    <div className="card-loteria">
      <div className="info-head">
        <p>
          <span>{loteria.loteria}</span> Concurso <strong>{concurso}</strong> |{" "}
          {data}
        </p>
      </div>

      <div
        className="dezenas"
        style={{ gridTemplateColumns: `repeat(${col}, min-content)` }}
      >
        <p class="texto-entre-linhas">
          {loteria.loteria === "duplasena" ? "1º Sorteio" : ""}
        </p>
        {dezenas.map((dezena, ind) => {
          if (loteria.loteria === "duplasena" && ind === 5) {
            return (
              <>
                <span key={ind}>{dezena}</span>
                <p class="texto-entre-linhas ">
                  {loteria.loteria === "duplasena" ? "2º Sorteio" : ""}
                </p>
              </>
            );
          }
          return <span key={ind}>{dezena}</span>;
        })}
      </div>
      <p>{local}</p>
    </div>
  );
}
