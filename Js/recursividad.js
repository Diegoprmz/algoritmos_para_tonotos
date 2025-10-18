// Recursividad: Es una técnica de programación que consiste en una función que se llame a si misma determinadas veces.

/* function cuentaRegresiva(numero){ // 11, 10
    if (numero < 0) {
        return
    }

    console.log(numero); // 11, 10
    
    cuentaRegresiva(numero - 1) // 10, 9
}

cuentaRegresiva(11) */

// Factorial
// Condición base: si el número es 0 o 1, devolvemos 1. No se llama a la función de nuevo.
/* function factorial(n){ 
    if (n === 0 || n === 1){
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(3));
console.log(factorial(9)); */


// Serie de finonacci
// Condición base: que imprima solamente un número limitado de miembros
/* function fibonacci(nTerminos, a = 0, b = 1) {
    if (nTerminos === 0) return
    else console.log(a);
    fibonacci(nTerminos - 1, b, a + b)
}

console.log(fibonacci(10));
 */


// Ejercicio 1: 
// función recursiva que sume del 1 hasta n
// Caso base: n === 1 
/* 
function sumaHastaN(n) {
    if (n === 1) return 1;
    return n + sumaHastaN(n - 1);
}
console.log(sumaHastaN(5));

 */

function invertirCadena(string){
    if (string.length === 0) return "";
    return string.slice(-1) + invertirCadena(string.slice(0, -1))
}

console.log(invertirCadena('Hola'));

/* 
HOLA -> HOL
// AHOL
A
AHOL -> HO
// ALHO
AL
ALHO -> H
// ALOH
ALO 
ALHO -> "" == 0
// ALOH 
ALOH

 */

