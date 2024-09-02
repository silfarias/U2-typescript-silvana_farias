function identity<T>(arg: T): T {
    return arg;
}

let tipoNumero = identity(10);
let tipoString = identity("Hola");
let tipoBooleano = identity(true);

console.log(tipoNumero, tipoString, tipoBooleano);
