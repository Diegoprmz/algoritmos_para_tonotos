/* Estrucutras de control

Búcles:

For 
while
Do while

Condicionales:

If 
Switch 

*/

/* if (condión) {
    //códgo en cuestión
} */

/* let edad = 17
let credencial = true

// Solo se aceptan mayores de 18 y menores de 40

function mayoriaDeEdad(edad) {
    if (edad > 40){
        console.log('No puedes pasar');
    } else if (edad >= 18 && edad <= 40){
        console.log("Eres mayor de edad")
    } else if (edad >= 16 && edad < 18 && !credencial) {
        console.log('Eres casi mayor de edad pero ya la aguantas');
    }
}

mayoriaDeEdad(edad)

    */

/* switch (Expresion) {
    case valor1:
        //  código
        break
    case valor2:
        // código
        break
    default:
        // código
        break
}
    */
/* 
while (condicion){
    //código
} */

// Ejercicio: Imprimir los segundos que faltan para que la bomba explote, debe detenerse en el 1
/* function bombaActiva() {
    let cuentaAtras = 10
    while (cuentaAtras >= 1) {
        console.log(cuentaAtras);
        cuentaAtras --
    }
}

bombaActiva()
    */


// Do While

/* Lo vamos a utilizar siempre que estemos pidiendo algo al usuario. */
/* let nombreUsuario

do {
    nombreUsuario = prompt('Dime cuál es tu nombre')
} while (!nombreUsuario);

function saludar() {
    console.log(`Hola ${nombreUsuario}`);
    
}

saludar() */


/* for (inicialización; consición; actualización de variable ) {
    // Código
} */

/* for (let number = 10; number >= 1; number--){
    console.log(number)
}

 */

