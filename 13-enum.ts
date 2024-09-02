
enum Color {
    Rojo="Red",
    Verde="Green",
    Azul="Blue"
}

function colores(color: Color): string {
    return 'El color es ' + color
}

let myColor = Color.Verde
console.log(colores(myColor))