import CardLoteria from "@/components/cardLoteria";
import { GetJogoLatest } from "@/services/getJogos";
import { navLinks } from "@/utils";

export default async function Home() {
  const slugs = navLinks.map(
    (navLink) => navLink.path.split("/")[navLink.path.split("/").length - 1]
  );
  slugs.shift();

  const promises = slugs.map((slug) => GetJogoLatest(slug));
  const responses = await Promise.all(promises);
  console.log(responses);
  return (
    <div>
      <h1 className="title-home">Resultados de hoje Loterias</h1>
      <hr />
      <div className="secao-jogos">
        {responses.map(({ concurso, data, local, ...rest }, index) => (
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
