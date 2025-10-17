// Recursividad: Es un atécnica de programación que consiste en una función que se llame a si misma determinadas veces.

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
function factorial(n){ 
    if (n === 0 || n === 1){
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(3));
console.log(factorial(9));


// Serie de finonacci
// Condición base: que imprima solamente un número limitado de miembros
function fibonacci(a = 0, b = 1, nTerminos) {
    
}