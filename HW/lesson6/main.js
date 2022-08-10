// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str = 'hello word';
console.log(str.length);
let str1 = 'lorem ipsum';
console.log(str1.length);
let str2 = 'javascript is cool';
console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str = 'hello word';
console.log(str.toUpperCase());
let str1 = 'lorem ipsum';
console.log(str1.toUpperCase());
let str2 = 'javascript is cool';
console.log(str2.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str = 'hello word';
console.log(str.toLowerCase());
let str1 = 'lorem ipsum';
console.log(str1.toLowerCase());
let str2 = 'javascript is cool';
console.log(str2.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// ?????
let str = 'Ревуть воли як ясла повні';
 let arr = str.split(' ');
console.log(arr);
// ?????

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arr = [10,8,-7,55,987,-1011,0,1050,0];
let map = arr.map(arr => arr.toString());
console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
function sortNums(numbs, direction){
    if (direction === 'ascending'){
        numbs.sort((num1,num2) => num1-num2)
    }
    if (direction === 'descending'){
        numbs.sort((num1,num2) => num2-num1)
    }
}
sortNums(nums, 'ascending');
console.log(nums);
sortNums(nums, 'descending');
console.log(nums);

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
coursesAndDurationArray.sort((coursesAndDurationArray1, coursesAndDurationArray2) => coursesAndDurationArray2.monthDuration - coursesAndDurationArray1.monthDuration);
console.log(coursesAndDurationArray);

let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);

// { cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black' }
// описати колоду карт
let cards;
    cards = [
    { cardSuit: 'diamond', value: 'queen', color: 'red'},
    { cardSuit: 'spade', value: 10, color: 'red'},
    { cardSuit: 'clubs', value: 'jack', color: 'black'},
    { cardSuit: 'diamond', value: 'king', color: 'black'},
    { cardSuit: 'spade', value: 'ace', color: 'black'},
    { cardSuit: 'heart', value: 6 , color: 'red'},
    { cardSuit: 'clubs', value: 'joker', color: 'red'},
];
// // - знайти піковий туз
let filterCards = cards.filter(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(filterCards);

// // - всі шістки
let filterCards1 = cards.filter(value => value.value === 6);
console.log(filterCards1);

// // - всі червоні карти
let filterCards2 = cards.filter(value => value.color === 'red');
console.log(filterCards2);

// // - всі буби
let filterCards3 = cards.filter(value => value.cardSuit ==='diamond');
console.log(filterCards3);

// // - всі трефи від 9 та більше
let filterCards4 = cards.filter (value => value.value > 9 );
console.log(filterCards4);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = cards.reduce(function(accumulator, card){
        if (cards.cardSuit === 'clubs'){
            accumulator.clubs.push(card);
        }
    if (cards.cardSuit === 'diamond'){
        accumulator.diamonds.push(card);
    }
    if (cards.cardSuit === 'heart'){
        accumulator.hearts.push(card);
    }
    if (cards.cardSuit === 'spade'){
        accumulator.spades.push(card);
    }
    return accumulator;

    }, {clubs:[], diamonds:[], hearts:[], spades:[]});
console.log(reduce);