// Callback

// 38 - temporizador personalizado
function temporizadorPersonalizado(segundos, acao) {
  setTimeout(acao, segundos * 1000);
}

// temporizadorPersonalizado(3, () => {
//   console.log("3 segundos se passaram!");
// });

// 39 - mapear array
function mapearArray(valores, transformacao) {
  const resultado = [];
  for (const valor of valores) {
    resultado.push(transformacao(valor));
  }
  return resultado;
}

const numeros = [1, 2, 3, 4, 5];
const quadrados = mapearArray(numeros, (numero) => numero * numero);
console.log(quadrados); // [1, 4, 9, 16, 25]

// 40 - execução condicional
function execucaoCondicional(verificar, executar, naoExecutar) {
  if (verificar()) {
    executar();
  } else {
    naoExecutar();
  }
}

execucaoCondicional(
  () => 5 > 3,
  () => console.log("5 é maior que 3"),
  () => console.log("5 não é maior que 3")
);

// Promises

// 41 - Simulação de API
function simularAPI(resultado, demora) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resultado);
    }, demora);
  });
}

simularAPI("Olá, Mundo!", 1000).then((resultado) => {
  console.log(resultado); // "Olá, Mundo!"
});

// 42 - carregando dados com fetch
function carregarDadosFetch(url) {
  return fetch(url).then((response) => response.json());
}

carregarDadosFetch("https://jsonplaceholder.typicode.com/todos/1").then(
  (dados) => {
    console.log(dados);
  }
);

// 43 - cadeia de promises
async function executarEmSequencia(urls) {
  const dadosArray = [];
  for (const url of urls) {
    const dados = await carregarDadosFetch(url);
    dadosArray.push(dados);
  }
  return dadosArray;
}

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
];

executarEmSequencia(urls).then((dadosArray) => {
  console.log(dadosArray);
});
