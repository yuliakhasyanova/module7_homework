/* ЗАДАЧА 1.
Написать функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
только собственных свойств. Данная функция не должна возвращать значение. */

const user = {
  name: 'Yuliya',
  sirname: 'Khasianova',
  age: 33
}

const userCity = Object.create(user);
userCity.city = 'Kaliningrad';
userCity.country = 'Russia';

function getPropObj (obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop + ': ' + obj[prop]);
    }
  }
}

getPropObj(userCity);


















































