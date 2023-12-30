export default async function GetJogos() {
  const data = await fetch("https://loteriascaixa-api.herokuapp.com/api");
  return await data.json();
}

export async function GetJogo(loteria) {
  const data = await fetch(
    `https://loteriascaixa-api.herokuapp.com/api/${loteria}`
  );
  return await data.json();
}

export async function GetJogoLatest(loteria) {
  const data = await fetch(
    `https://loteriascaixa-api.herokuapp.com/api/${loteria}/latest`
  );
  return await data.json();
}
