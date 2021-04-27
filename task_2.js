/* ЗАДАЧА 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного
объекта свойство с данным именем. Функция должна возвращать true или false. */

const phone = {
    model: "Asus",
    year: 2020,
    OC: "Android"
}

let str = "model";

function checkObject(str, theObject) {
    for (let key in theObject) {
        if (key === str) {
            return true;
        } else return false;
    }
}

console.log(checkObject(str, phone));

// или

'use strict';

const mission = {
    codename: "Chibis",
    age: 33,
    city: "Kaliningrad",
    position: "Developer"
};

const string = "codename";

let missionCheck = (obj, str) => {
    console.log(str in obj);
};

missionCheck(mission, string);