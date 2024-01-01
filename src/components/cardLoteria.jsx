import { formatarValorEmReal } from "@/utils";
import "./cardLoteria.css";

export default function CardLoteria({ loteria, navLinks }) {
  const {
    valorAcumuladoConcurso_0_5,
    concurso,
    data,
    local,
    dezenas,
    premiacoes,
    dataProximoConcurso,
    proximoConcurso,
    valorArrecadado,
    valorAcumuladoProximoConcurso,
    valorEstimadoProximoConcurso,
    acumulou,
  } = loteria;

  const col = navLinks.find(
    (nav) =>
      nav.path.split("/")[nav.path.split("/").length - 1] === loteria.loteria
  );
  return (
    <div className="card-loteria">
      <div className="info-head" style={{ backgroundColor: col.cor }}>
        <h2>
          <span>{col.nome}</span> Concurso <strong>{concurso}</strong> | {data}
        </h2>
      </div>

      <div
        className="dezenas"
        style={{ gridTemplateColumns: `repeat(${col.col}, min-content)` }}
      >
        <p className="texto-entre-linhas">
          {loteria.loteria === "duplasena" ? "1º Sorteio" : ""}
        </p>
        {dezenas.map((dezena, ind) => {
          if (loteria.loteria === "duplasena" && ind === 5) {
            return (
              <>
                <span style={{ backgroundColor: col.cor }} key={ind}>
                  {dezena}
                </span>
                <p className="texto-entre-linhas ">
                  {loteria.loteria === "duplasena" ? "2º Sorteio" : ""}
                </p>
              </>
            );
          }
          return (
            <span style={{ backgroundColor: col.cor }} key={ind}>
              {dezena}
            </span>
          );
        })}
      </div>
      <p style={{ color: "green" }}>
        {" "}
        <strong>
          {acumulou &&
            `Acumulou para o próximo sorteio: ${formatarValorEmReal(
              valorAcumuladoProximoConcurso
            )}`}
        </strong>
      </p>
      <p>
        <strong>Próximo concurso:</strong> {proximoConcurso}
      </p>
      <p>
        <strong>Valor estimado</strong>{" "}
        {formatarValorEmReal(valorEstimadoProximoConcurso)}
      </p>
      <p>
        <strong>Data: </strong>
        {dataProximoConcurso}
      </p>
      <p>Valor arrecadado: {formatarValorEmReal(valorArrecadado)}</p>
      <table className="tabela-premio">
        <thead>
          <tr style={{ backgroundColor: col.cor, color: "white" }}>
            <th>Faixa</th>
            <th>Ganhadores</th>
            <th>Prêmio</th>
          </tr>
        </thead>
        <tbody>
          {premiacoes.map(({ descricao, ganhadores, valorPremio }, i) => (
            <tr className="linha" key={i}>
              <td>{descricao.replace("nenhum", "0")}</td>
              <td>{ganhadores}</td>
              <td>{formatarValorEmReal(valorPremio)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Local do sorteio: {local}</p>
    </div>
  );
}
