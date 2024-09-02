interface Shape {
    area(): number
}

class Circle {
    radio: number;

    constructor (radio: number) {
        this.radio = radio;
    }

    area(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }

}

const circulo = new Circle(7);
console.log(circulo.area());
