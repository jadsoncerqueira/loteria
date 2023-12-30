import { GetJogo, GetJogoLatest } from "@/services/getJogos";

export default async function Page({ params }) {
  const { slug } = params;
  const jogo = await GetJogo(slug);
  const jogoFormatado = jogo.slice(0, 5);
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
    title: `Resultado ${params.slug}`,
    description: `O Resultados Loterias Caixa informa o resultado ${params.slug} ao vivo e em tempo real.`,
  };
}
