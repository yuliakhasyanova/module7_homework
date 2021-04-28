/* Задание 5
Переписать консольное приложение из предыдущего юнита на классы. */

class ElectricDevise {
    constructor(name, power) {
        this.name = name;
    }
    plugInOut() {
        if (this.plug == true) {
            console.log(`Прибор ${this.name} подключен к сети. В количестве ${this.number} единицы.`);
        } else {
            console.log(`Прибор ${this.name} не подключен к сети`);
        }
    }
}

class Light extends ElectricDevise {
    constructor(name, power, number, plug) {
        super(name);
        this.name = name;
        this.power = power;
        this.number = number;
        this.plug = plug;
        this.amount = power * number;
    }
}

class Computer extends ElectricDevise {
    constructor(name, power, number, plug) {
        super(name);
        this.name = name;
        this.power = power;
        this.number = number;
        this.plug = plug;
        this.amount = power * number;
    }
}

let roomLamp = new Light('Лампочка 75W', 75, 3, true);
let kitchenLamp = new Light('Лампочка 55W', 55, 1, true);
let pc = new Computer('desktop', 250, 1, true);
let laptop = new Computer('laptop', 150, 1, false);

roomLamp.plugInOut();
kitchenLamp.plugInOut();
pc.plugInOut();
laptop.plugInOut();