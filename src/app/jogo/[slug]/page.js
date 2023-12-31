import CardLoteria from "@/components/cardLoteria";
import { GetJogo, GetJogoLatest } from "@/services/getJogos";
import { navLinks } from "@/utils";
import "./page.css";
import Footer from "@/components/footer";

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: "megasena",
        },
      },
      {
        params: {
          slug: "lotofacil",
        },
      },
      {
        params: {
          slug: "lotomania",
        },
      },
      {
        params: {
          slug: "maismilionaria",
        },
      },
      {
        params: {
          slug: "timemania",
        },
      },
      {
        params: {
          slug: "duplasena",
        },
      },
      {
        params: {
          slug: "diadesorte",
        },
      },
      {
        params: {
          slug: "supersete",
        },
      },
      {
        params: {
          slug: "federal",
        },
      },
      {
        params: {
          slug: "quina",
        },
      },
    ],
    fallback: "blocking", // false or "blocking"
  };
};

export default async function Page({ params }) {
  const { slug } = params;
  const jogo = await GetJogo(slug);
  const jogoFormatado = jogo.length > 6 ? jogo.slice(0, 6) : jogo;

  const newSlug = navLinks.find(
    (nav) => nav.path.split("/")[nav.path.split("/").length - 1] === slug
  );

  return (
    <>
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
      <Footer />
    </>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: `Resultado ${params.slug}`,
    description: `O Resultados Loterias Caixa informa o resultado ${params.slug} ao vivo e em tempo real.`,
  };
}
