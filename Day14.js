//################## Basic Algorithm Scripting ##################

//#### Convert Celsius to Fahrenheit

function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = (celsius * (9/5)) + 32;

  return fahrenheit;
}

convertToF(30);

//#### Reverse a String

function reverseString(str) {

  return str.split("").reverse().join("");
}

reverseString("hello");

//#### Factorialize a Number

function factorialize(num) {
  let valor_fatorial = 1;
  let i = 2;
  while (i <= num){
    valor_fatorial = valor_fatorial*i;
    i = i + 1;
  }
  return valor_fatorial;
}

factorialize(5);

//#### Find the Longest Word in a String

function findLongestWordLength(str) {
  var aux = str.split(' ');

  var maiorPalavra = aux.sort(function(a, b) { 
    return b.length - a.length;
  });
  return maiorPalavra[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//#### Return Largest Numbers in Arrays