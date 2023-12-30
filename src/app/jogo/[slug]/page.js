import { GetJogo, GetJogoLatest } from "@/services/getJogos";

export default async function Page({ params }) {
  const { slug } = params;
  const jogo = await GetJogo(slug);
  const jogoFormatado = jogo;
  return (
    <div>
      <h1>{slug}</h1>
      <div>
        {jogoFormatado.map(({ concurso, data, local }, index) => (
          <div key={index}>
            <p>{concurso}</p>
            <p>{data}</p>
            <p>{local}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: params.slug,
    description: params.slug,
  };
}
