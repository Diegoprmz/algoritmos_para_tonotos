// Día 1

// Ejercicio 1: Dado a, b, c; encuentra el mayor de los 3 números

function encontrarMayor(a, b, c) {
    max = a;

    if(max < b){
        max = b;
    } else if (max < c) {
        max = c
    }
}

console.log(encontrarMayor(6,78,3))

/*// Ejercicio 2: Pide a tus compañeros dos números y un operador y muestra el resultado (Pueba en consola del navegador)


let numero1 = prompt('Escribe un numero')
let numero2 = prompt('Escribe un segundo numero')
let operador = prompt('Indica un operador')

function numero(num) {
    let numero1 = Number(numero1);
    let numero2 = Number(numero2);
}   

function realizarOperacion (numero1, numero2, operador) {
    switch(operador) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            return numero1 / numero2;
        default:
            return 'Operador no válido';
    }
}


// Ejercicio 3: Dado un número del 1 al 100, indica si el rango es: 1 - 25 -> Bajo; 26 - 50 -> medio; 51 - 75 -> Alto; 76 - 100 -> Muy alto

function rangoNumero(numero) {
    if(numero >= 1 && numero <= 25) {
        console.log('Bajo');
    } else if (numero >= 26 && numero <= 50) {
        console.log('Medio');
    } else if (numero >= 51 && numero <= 75) {
        console.log('Alto');
    } else if (numero >= 76 && numero <= 100) {
        console.log('Muy alto');
    } else {
        console.log('El numero se encuentra fuera del rango');
    }
}   


*/