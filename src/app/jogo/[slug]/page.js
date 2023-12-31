import CardLoteria from "@/components/cardLoteria";
import { GetJogo, GetJogoLatest } from "@/services/getJogos";
import { navLinks } from "@/utils";
import "./page.css";

export default async function Page({ params }) {
  const { slug } = params;
  const jogo = await GetJogo(slug);
  const jogoFormatado = jogo.slice(0, 6);

  const newSlug = navLinks.find(
    (nav) => nav.path.split("/")[nav.path.split("/").length - 1] === slug
  );
  console.log(newSlug);
  return (
    <div>
      <h1 className="title-loteria">
        Resultado <span style={{ color: newSlug.cor }}>{newSlug.nome}</span>
      </h1>
      <hr />
      <div className="cards-loteria">
        {jogoFormatado.map(({ concurso, data, local, ...rest }, index) => (
          <CardLoteria
            key={index}
            loteria={{ concurso, data, local, ...rest }}
            navLinks={navLinks}
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
