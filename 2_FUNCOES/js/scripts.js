// Funções
// 15 - Verificar se número é par
function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

const numero = 7;
const resultado = parOuImpar(numero);
console.log(`O número ${numero} é ${resultado}.`);

// 16 - Encontrar fatorial de um número
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

const n = 5;
const resultadoFatorial = fatorial(n);
console.log(`O fatorial de ${n} é ${resultadoFatorial}.`);

// 17 - Máximo e mínimo
function maximo(a, b) {
  return a > b ? a : b;
}

function minimo(a, b) {
  return a < b ? a : b;
}

const num1 = 5;
const num2 = 9;
console.log(`O maior valor entre ${num1} e ${num2} é ${maximo(num1, num2)}.`);
console.log(`O menor valor entre ${num1} e ${num2} é ${minimo(num1, num2)}.`);

// 18 - Inversão de string
function inverterString(str) {
  return str.split("").reverse().join("");
}

const textoParaInverter = "JavaScript";
const textInvertido = inverterString(textoParaInverter);
console.log(`A string "${textoParaInverter}" invertida é "${textInvertido}".`);

// 19 - Contagem de vogais
function contarVogais(str) {
  const vogais = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      count++;
    }
  }

  return count;
}

const texto = "Testando";
const contagemDeVogais = contarVogais(texto);
console.log(
  `A quantidade de vogais na string "${texto}" é ${contagemDeVogais}.`
);

// 20 - Verificar se string é palíndromo
function ehPalindromo(str) {
  const strInvertida = str.split("").reverse().join("");
  return str.toLowerCase() === strInvertida.toLowerCase();
}

const textoParaTeste = "radar";
const resultadoPalindromo = ehPalindromo(textoParaTeste);
console.log(
  `A string "${textoParaTeste}" é um palíndromo? ${
    resultadoPalindromo ? "Sim" : "Não"
  }.`
);

// 21 - gerar array com números aleatórios
function gerarArrayAleatorio(tamanho, maxValor) {
  const arr = [];
  for (let i = 0; i < tamanho; i++) {
    arr.push(Math.floor(Math.random() * (maxValor + 1)));
  }
  return arr;
}

const tamanho = 10;
const maxValor = 50;
const resultadoArray = gerarArrayAleatorio(tamanho, maxValor);
console.log(
  `O array gerado de números aleatórios é: [${resultadoArray.join(", ")}].`
);

// 22 - Encontrar o elemento mais frequente
function elementoMaisFrequente(arr) {
  const contador = {};
  let elemento = arr[0];
  let maxContagem = 1;

  for (const valor of arr) {
    if (!contador[valor]) {
      contador[valor] = 1;
    } else {
      contador[valor]++;
    }

    if (contador[valor] > maxContagem) {
      maxContagem = contador[valor];
      elemento = valor;
    }
  }

  return elemento;
}

const numeros = [2, 3, 4, 2, 1, 5, 2, 3, 1, 4];
const resultadoFrequencia = elementoMaisFrequente(numeros);
console.log(`O elemento mais frequente no array é ${resultadoFrequencia}.`);
