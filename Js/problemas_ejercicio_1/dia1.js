// Día 1

// Ejercicio 1: Dado a, b, c; encuentra el mayor de los 3 números

function mayorDeTres(a, b, c) {
    if (a >= b && a >= c) {
        console.log(`El mayor es ${a}`);
    } else if (b >= a && b >= c) {
        console.log(`El mayor es ${b}`);
    } else {
        console.log(`El mayor es ${c}`);
    }
}
mayorDeTres(a,b,c)

// Ejercicio 2: Pide a tus compañeros dos números y un operador y muestra el resultado (Pueba en consola del navegador)

let primerNumero = prompt('Escribe un número')
let segundoNumero = prompt('Escribe otro número')
let operador = prompt('Escribe un operador para hacer tu operación')

function calculadora(numero1, numero2, operador ){
    let numeroA = Number(numero1)
    let numeroB = Number(numero2)
    let resultado

    if (operador === '+') {
        resultado = numeroA + numeroB
    } else if (operador === '-') {
        resultado = numeroA - numeroB
    } else if (operador === '*') {
        resultado = numeroA * numeroB
    } else if (operador === '/') {
        resultado = numeroA / numeroB
    } else {
        return 'Número no valido'
    }

    return `El resultado es ${resultado}`
}

calculadora(primerNumero, segundoNumero, operador)

// Ejercicio 3: Dado un número del 1 al 100, indica si el rango es: 1 - 25 -> Bajo; 26 - 50 -> medio; 51 - 75 -> Alto; 76 - 100 -> Muy alto

let numeroUsuario = prompt('Escribe un número entre el 1 y el 100')

function rangosNumero(numeroUsuario) {
    let numero = Number(numeroUsuario)

    if (numero >= 1 && numero <= 25) {
        console.log('Bajo');
    } else if (numero >= 26 && numero <= 50) {
        console.log('Medio');
    } else if (numero >= 51 && numero <= 75) {
        console.log('Medio');
    } else if (numero >= 76 && numero <= 100) {
        console.log('Muy alto');
    }
}

rangosNumero(numeroUsuario)
