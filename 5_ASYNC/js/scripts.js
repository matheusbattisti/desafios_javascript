// Callback

// 39 - temporizador personalizado
function temporizadorPersonalizado(segundos, acao) {
  setTimeout(acao, segundos * 1000);
}

// temporizadorPersonalizado(3, () => {
//   console.log("3 segundos se passaram!");
// });

// 40 - mapear array
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

// 41 - execução condicional
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

// 42 - Simulação de API
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

// 43 - carregando dados com fetch
function carregarDadosFetch(url) {
  return fetch(url).then((response) => response.json());
}

carregarDadosFetch("https://jsonplaceholder.typicode.com/todos/1").then(
  (dados) => {
    console.log(dados);
  }
);

// 44 - cadeia de promises
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

// 45 - retry em promises
function tentarNovamente(funcao, maxTentativas, intervalo) {
  return new Promise(async (resolve, reject) => {
    for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
      try {
        const resultado = await funcao();
        return resolve(resultado);
      } catch (erro) {
        if (tentativa === maxTentativas) return reject(erro);
        await new Promise((r) => setTimeout(r, intervalo));
      }
    }
  });
}

// Exemplo de uso
const fetchComRetry = () => fetch("https://lalala.com.br");
tentarNovamente(fetchComRetry, 3, 1000)
  .then((response) => response.json())
  .then((dados) => console.log(dados))
  .catch((erro) => console.error("Falha após 3 tentativas", erro));
