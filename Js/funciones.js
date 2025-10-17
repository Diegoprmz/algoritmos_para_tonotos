// Expression Functions: Funciones que se asignan a variables
/* // NO es hoisteable
console.log(sum(9,11));

const sum = function (a, b) {
    return a + b
} */

// Arrow functions: Son funciones que no son tan importantes y solamente se utilizan una vez para hacer cosas específicas 

const miFuncionFlecha = () => {
    // Código
}

/* const acumulador = (x) => {
    while (x<=100) {
        console.log(`${x}`);
        x++;
    }
}
acumulador(8) */

const sumaFlecha = (a, b) => a + b

console.log(sumaFlecha(5,6));
