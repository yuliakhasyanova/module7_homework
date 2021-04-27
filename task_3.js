/* ЗАДАЧА 3.
Написать функцию, которая создает пустой объект, но без прототипа. */

function emptyObject(){
    return Object.create(null);
}

console.log(emptyObject());

// или

const emptyObj = () => Object.create(null);
console.log(emptyObj(emptyObj))