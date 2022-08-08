// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area1(a, b){
    let res = a * b;
    return res;
}
console.log(area1(10, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle(radius){
    let resCirc = Math.PI * (radius*radius);
    return resCirc;
}

console.log(circle(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом

function square(a, b){
    let resCyl = 2 * Math.PI * a * b;
    return resCyl;
}

console.log(square(2, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент

function arrayLoop(array){
    for (const item of array) {
         console.log(item);
    }
}
arrayLoop([2,4,6, true, 654, 'lokshyna', null, 3,14]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function create(text){
    document.write(`<p>${text}</p>`)
}
create('helloooooo');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
function create(text){
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}
create('hi');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)

function create(text){
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
`);
    }
    document.write`</ul>`
}
create('lol');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrayLoop(array){
    document.write(`<ul>`)
        for (const item of array) {
            document.write(`<li>${item}</li>`);
        }
        document.write(`</ul>`)
}
arrayLoop([2654.65,6, 'lolita',643.6, 'hiii', null, 314]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
function arrayLoop(array){
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>
        <p>id: ${array[i].id}, name: ${array[i].name}, age: ${array[i].age}</p>
        </div>`);

    }
}
let users
    users= [
    {id: 1, name: 'vasya', age: 23},
    {id: 2, name: 'katia', age: 17},
    {id: 3, name: 'lola', age: 30},
    {id: 4, name: 'ivan', age: 19},
    {id: 5, name: 'oleg', age: 22},
    {id: 6, name: 'ira', age: 20},
];
arrayLoop(users);
// - створити функцію яка повертає найменьше число з масиву

const findMin = (array)=> {
    let min = array[0];
    for (const findMinElement of array) {
        if (findMinElement < min) min = findMinElement;
    }
    return min;
};
const findMinReturn = findMin([-54,55,66,2,0,-643,6]);
console.log(findMinReturn);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arr = [3,2,4];
function arraySum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum);
}
arraySum(arr);
