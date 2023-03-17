// Variáveis e tipos de dados

// 1 - Conversão de temperatura
const celsius = 30;
const fahrenheit = 86;

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log(
  `${celsius} graus Celsius equivalem a ${celsiusToFahrenheit(
    celsius
  )} graus Fahrenheit.`
);
console.log(
  `${fahrenheit} graus Fahrenheit equivalem a ${fahrenheitToCelsius(
    fahrenheit
  )} graus Celsius.`
);

// 2 - Cálculo IMC
const altura = 1.75;
const peso = 70;

function calcularIMC(altura, peso) {
  return peso / (altura * altura);
}

const imc = calcularIMC(altura, peso);
console.log(`Seu IMC é ${imc.toFixed(2)}.`);

// 3 - Concatenação de strings e interpolação
const nome = "João";
const idade = 25;
const cidade = "São Paulo";

function criarMensagem(nome, idade, cidade) {
  return `Olá, ${nome}! Você tem ${idade} anos e mora em ${cidade}.`;
}

const mensagem = criarMensagem(nome, idade, cidade);
console.log(mensagem);

// Operadores e expressões

// 4 - Cálculo de área e perímetro de um retângulo
const comprimento = 10;
const largura = 5;

function calcularArea(comprimento, largura) {
  return comprimento * largura;
}

function calcularPerimetro(comprimento, largura) {
  return 2 * (comprimento + largura);
}

const area = calcularArea(comprimento, largura);
const perimetro = calcularPerimetro(comprimento, largura);
console.log(`A área do retângulo é ${area} e o perímetro é ${perimetro}.`);

// 5 - Verificação da divisibilidade
const numero1 = 13;
const numero2 = 2;

function verificaDivisibilidade(numero1, numero2) {
  return numero1 % numero2 === 0;
}

const divisivel = verificaDivisibilidade(numero1, numero2);
console.log(
  `O número ${numero1} é divisível por ${numero2}? ${divisivel ? "Sim" : "Não"}`
);

// Controle de fluxo (if, else, switch)

// 6 - Classificação de faixa etária
const idadeDoUsuario = 25;

function classificarFaixaEtaria(idade) {
  if (idade >= 0 && idade <= 12) {
    return "Criança";
  } else if (idade >= 13 && idade <= 17) {
    return "Adolescente";
  } else if (idade >= 18 && idade <= 59) {
    return "Adulto";
  } else {
    return "Idoso";
  }
}

const classificacao = classificarFaixaEtaria(idadeDoUsuario);
console.log(`A faixa etária é: ${classificacao}`);

// 7 - Comparação de números
const numeroA = 10;
const numeroB = 15;

function compararNumeros(a, b) {
  if (a > b) {
    return "O primeiro número é maior que o segundo.";
  } else if (a < b) {
    return "O primeiro número é menor que o segundo.";
  } else {
    return "Os números são iguais.";
  }
}

const resultado = compararNumeros(numeroA, numeroB);
console.log(resultado);

// 8 - Calculadora básica com switch
const valor1 = 10;
const valor2 = 5;
const operador = "+";

function calcular(a, b, operador) {
  let resultado;

  switch (operador) {
    case "+":
      resultado = a + b;
      break;
    case "-":
      resultado = a - b;
      break;
    case "*":
      resultado = a * b;
      break;
    case "/":
      resultado = a / b;
      break;
    default:
      return "Operador inválido.";
  }

  return `O resultado da operação é: ${resultado}`;
}

const resultadoCalculo = calcular(valor1, valor2, operador);
console.log(resultadoCalculo);

// 9 - calculo de tarifas
const idadeUsuario = 22;
const tipoPasse = "estudante";
const tarifaNormal = 2.5;

function calcularTarifa(idade, tipoPasse) {
  if (idade < 6) {
    return 0;
  }

  let desconto = 0;

  if (tipoPasse === "estudante") {
    desconto = 0.5;
  } else if (tipoPasse === "idoso" && idade >= 60) {
    desconto = 0.3;
  }

  return tarifaNormal * (1 - desconto);
}

const tarifa = calcularTarifa(idadeUsuario, tipoPasse);
console.log(
  `A tarifa para uma pessoa com ${idade} anos e passe do tipo "${tipoPasse}" é $${tarifa.toFixed(
    2
  )}.`
);

// Loops

// 10 - somatório de 1 a N
const N = 10;
let soma = 0;

for (let i = 1; i <= N; i++) {
  soma += i;
}

console.log(`A soma dos números de 1 a ${N} é ${soma}.`);

// 11 - tabela de multiplicação
const numero = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

// 12 - números primos até M
const M = 50;

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

for (let i = 2; i <= N; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// 13 - Exibição de padrões
const X = 5;

for (let i = 1; i <= X; i++) {
  console.log("*".repeat(i));
}

// 14 - Fibonacci
const Z = 5;

function fibonacciAteN(n) {
  let a = 0;
  let b = 1;
  let sequencia = [];

  while (a <= n) {
    sequencia.push(a);
    const temp = a;
    a = b;
    b = temp + b;
  }

  return sequencia;
}

const sequenciaFibonacci = fibonacciAteN(Z);
console.log(`A sequência de Fibonacci até ${Z} é:`, sequenciaFibonacci);
