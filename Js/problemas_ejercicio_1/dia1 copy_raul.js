// Día 1

// Ejercicio 1: Dado a, b, c; encuentra el mayor de los 3 números

function numeroMayor(a,b,c){

let nMayor;

   if(a >= b && a >= c){
    nMayor = a;
   } else if(b >= a && b >= c){
    nMayor = b;
   } else {
    nMayor = c;
   }
   return nMayor;
}

console.log(numeroMayor(10,21,9));

// Ejercicio 2: Pide a tus compañeros dos números y un operador y muestra el resultado (Pueba en consola del navegador)

let numero_1 = Number(prompt("Ingresa un numero: "));
let numero_2 = Number(prompt("Ingresa un numero: "));
let operador = prompt("Ingresa alguno de los siguientes operadores '+,-,*,/': ")

function operacion(num1, num2, op){
    let resultado;

    switch(op){
        case '+':
            resultado = num1 + num2;
            break;

        case '-':
            resultado = num1 - num2;
            break;

        case '*':
            resultado = num1 * num2;
            break;

        case '/':
            resultado = num1 / num2;
            break;

        default:

            return `El resultado es: ${resultado}`;

}

operacion(numero_1, numero_2, operador);

// Ejercicio 3: Dado un número del 1 al 100, indica si el rango es: 1 - 25 -> Bajo; 26 - 50 -> medio; 51 - 75 -> Alto; 76 - 100 -> Muy alt
