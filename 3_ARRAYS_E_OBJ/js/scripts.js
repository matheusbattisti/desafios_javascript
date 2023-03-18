// Arrays
// 23 - Remover elementos duplicados de array
function removerDuplicatas(arr) {
  return Array.from(new Set(arr));
}

const arrayOriginal = [1, 2, 3, 4, 1, 5, 2, 6, 3];
const arraySemDuplicatas = removerDuplicatas(arrayOriginal);
console.log(`Array original: [${arrayOriginal.join(", ")}]`);
console.log(`Array sem duplicatas: [${arraySemDuplicatas.join(", ")}]`);

// 24 - Concatenar dois arrays
function concatenarArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayConcatenado = concatenarArrays(array1, array2);
console.log(`Array concatenado: [${arrayConcatenado.join(", ")}]`);

// 25 - interseção entre arrays
function intersecaoArrays(arr1, arr2) {
  return arr1.filter((elemento) => arr2.includes(elemento));
}

const array3 = [1, 2, 3, 4, 5];
const array4 = [4, 5, 6, 7, 8];
const arrayIntersecao = intersecaoArrays(array3, array4);
console.log(`Interseção entre os arrays: [${arrayIntersecao.join(", ")}]`);

// 26 - média de elementos do array
function mediaArray(arr) {
  const soma = arr.reduce((acumulador, valor) => acumulador + valor, 0);
  return soma / arr.length;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const media = mediaArray(numeros);
console.log(`A média dos elementos do array é ${media.toFixed(2)}.`);

// Objetos
// 27 - calcular a soma dos números em um objeto
const numerosObject = {
  a: 5,
  b: 10,
  c: 15,
};

function somaValoresObjeto(obj) {
  let soma = 0;
  for (const chave in obj) {
    if (obj.hasOwnProperty(chave) && typeof obj[chave] === "number") {
      soma += obj[chave];
    }
  }
  return soma;
}

console.log(`Soma dos valores do objeto: ${somaValoresObjeto(numerosObject)}`);

// 28 - filtrar propriedades de um objeto
const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Engenheiro",
  hobbies: ["Futebol", "Leitura", "Viagens"],
};

function filtrarPropriedades(obj, propriedadesPermitidas) {
  const newObj = {};
  for (const prop of propriedadesPermitidas) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}

const propriedadesPermitidas = ["nome", "profissao"];
const pessoaFiltrada = filtrarPropriedades(pessoa, propriedadesPermitidas);
console.log("Objeto Pessoa filtrado com propriedades permitidas:");
console.log(pessoaFiltrada);

// 29 - unindo objetos
const objetoA = { a: 1, b: 2 };
const objetoB = { b: 3, c: 4 };

function unirObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const objetoUnido = unirObjetos(objetoA, objetoB);
console.log("Objeto unido:");
console.log(objetoUnido);
