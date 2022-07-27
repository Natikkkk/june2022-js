// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let mass = [ true, 'cat', 'car', 123, 'flood', 3.14, false, 2.2, 'flora', 'sky'];
console.log(mass);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'The Sherlock Holmes',
    pageCount: 352,
    genre: 'detective'
}
console.log(book1);
 let book2 = {
     title: 'Mary Poppins',
     pageCount: 208,
     genre: 'fantasy'
 }
console.log(book2);
 let book3 = {
     title: 'Breakfast at Tiffany',
     pageCount: 179,
     genre: 'romantic comedy'
 }
console.log(book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let books1 = {
    title: 'The Sherlock Holmes',
    pageCount: 352,
    genre: 'detective',
    authors: [{
        name: 'Arthur',
        age: 71
    }]
}
console.log(books1);
let books2 = {
    title: 'Mary Poppins',
    pageCount: 208,
    genre: 'fantasy',
    authors: [{
        name:'Pamela',
        age: 25
    }]
}
console.log(books2);
let books3 = {
    title: 'Breakfast at Tiffany',
    pageCount: 179,
    genre: 'romantic comedy',
    authors: [{
        name: 'Truman',
        age: 30
    }]
}
console.log(books3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Adam', username: 'adamik', password: 'adam123'},
    {name: 'Alan', username: 'aaaalan', password: 'blackswon'},
    {name: 'Mary', username: 'PoppiMer', password: 'MarryPoppins'},
    {name: 'Arnika', username: 'ararika', password: 'arni-barni'},
    {name: 'Monika', username: 'moni_kaa', password: 'mo234ni1ka'},
    {name: 'Dilan', username: 'braynD', password: 'DilaBray'},
    {name: 'Sem', username: 'semik', password: 'Makott0Se'},
    {name: 'Lili', username: 'lili4', password: 'Beautylil'},
    {name: 'Roxa', username: 'ro_xxxa', password: 'roxi-k12'},
    {name: 'Gray', username: 'silvik', password: 'HottikG45'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);