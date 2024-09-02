class Car {
    private make: string;

    constructor (make: string) {
        this.make = make;
    }

    drive(): void {
        console.log(`driving a ${this.make}`);
        
    }

    getMake(): string {
        return this.make;
    }
}

// const micoche = new Car('Fiat');
// micoche.drive();
// console.log(micoche.getMake());

class ElectricCar extends Car {
    batteryLife: number;
    constructor(make: string, batteryLife: number) {
        super(make);
        this.batteryLife = batteryLife;
    }
    charge(): void {
        console.log(`El coche ${this.getMake()} se esta cargando: ${this.batteryLife}%`);
        
    }
}

const miCarroElec = new ElectricCar('Nissan', 90);
miCarroElec.charge();