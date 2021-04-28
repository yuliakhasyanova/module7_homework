/* ЗАДАЧА 4.
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, \
какими свойствами он обладает. */

function ElectricDevise(wattHour) {
    this.wattHour = wattHour * 0.001;
}

ElectricDevise.prototype.consumptionDay = function (hour) {
    console.log(`${this.name} потребляет за ${hour} ч. - ${hour * this.voltHour} киловатт`);
};

ElectricDevise.prototype.plugInOut = function () {
    if (this.plug == true) {
        console.log(`Прибор ${this.name} подключен к сети. В количестве ${this.number} единицы.`);
    } else {
        console.log(`Прибор ${this.name} не подключен к сети`);
    }
}

function Light(name, power, number, plug) {
    this.name = name;
    this.power = power;
    this.number = number;
    this.plug = plug;
    this.amount = power * number;
}
Light.prototype = new ElectricDevise(75);

function Computer(name, power, number, plug) {
    this.name = name;
    this.power = power;
    this.number = number;
    this.plug = plug;
    this.amount = power * number;
}
Computer.prototype = new ElectricDevise(250);

const roomLamp = new Light('Лампочка 75W', 75, 3, true);
const kitchenLamp = new Light('Лампочка 55W', 55, 1, true);
const pc = new Computer('desktop', 250, 1, true);
const laptopLenovo = new Computer('laptop', 150, 1, false);

roomLamp.plugInOut();
kitchenLamp.plugInOut();
kitchenLamp.consumptionDay(24);
pc.plugInOut();
pc.consumptionDay(8);
laptopLenovo.plugInOut();