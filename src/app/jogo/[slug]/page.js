import CardLoteria from "@/components/cardLoteria";
import { GetJogo, GetJogoLatest } from "@/services/getJogos";
import "./page.css";

export default async function Page({ params }) {
  const { slug } = params;
  const jogo = await GetJogo(slug);
  const jogoFormatado = jogo.slice(0, 6);
  return (
    <div>
      <h1 className="title-loteria">Resultados {slug}</h1>
      <div className="cards-loteria">
        {jogoFormatado.map(({ concurso, data, local, ...rest }, index) => (
          <CardLoteria
            key={index}
            loteria={{ concurso, data, local, ...rest }}
          />
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: `Resultado ${params.slug}`,
    description: `O Resultados Loterias Caixa informa o resultado ${params.slug} ao vivo e em tempo real.`,
  };
}
