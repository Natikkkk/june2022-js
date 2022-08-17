// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user1 = new User(1, 'Vova', 'Koval', 'kvl12@gmail.com', 97264473);
let user2 = new User(2, 'Katia', 'Adanib', 'geoed@gmial.com', 59583825);
let user3= new User(3, 'Ola', 'Habit', 'ollall@gmial.com', 5367825);
let user4 = new User(4, 'Ann', 'Lador', 'annoed@gmial.com', 5483625);
let user5 = new User(5, 'Max', 'Las', 'maxxx@gmial.com', 63537945);
let user6 = new User(6, 'Vasia', 'Lukan', 'luuk@gmial.com', 87652345);
let user7 = new User(7, 'Rita', 'Adanib', 'lddem@gmial.com', 87653457);
let user8 = new User(8, 'Oleg', 'Dokt', 'uytrw@gmial.com', 23456876);
let user9 = new User(9, 'Viktor', 'Donst', 'uytry@gmial.com', 9876556);
let user10 = new User(10, 'Lola', 'Koka', 'kokl@gmial.com', 65457634);

let users=[];
users.push(user1, user2,user3, user4,user5,user6,user7, user8, user9, user10);
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUser = users.filter(function (value) {
return value.id%2 == 0;
})
console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsers = users.sort((user1,user2) =>{
    return user1.id - user2.id;
})
console.log(sortUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }}
let client1 =  new Client(1,'Petya','Pupkin','fgdgdf@gmail.com','06653325978',['order','gdfgdfg','fdgdfvdf','losdfsd']);
let client2 = new Client(2,'Viktoria','Koloskin','gdfdg@gmail.com','06657778963',['order2','sfgdgdfg','dfgdgf']);
let client3 = new Client(3,'Vitia','fdgdfgdgdfdf','fgfdgdgd@gmail.com','0556332878',['order3','dgdfgd','dfgodsv','erfe']);
let client4 = new Client(4,'Serhij','Jurawlew','jurawlew@gmail.com','055632478',['order4','fdgdgdf']);
let client5 = new Client(5,'Oleksandr','Petrov','oleksanrPetrow@gmail.com','6445332879',['order5']);
let client6 = new Client(6,'Sviatoslav','Neznaju','Svatik@gmail.com','522364780',['order6','dfgdgdf','fdgdgdf','dfgfdgddfv','scscs','rrgeg']);
let client7 = new Client(7,'Volodya','Voloshin','voloshunns1@gmail.com','066332487',['order7','gfdfgd','chgf']);
let client8 = new Client(8,'Vasya','dsfsdf','vasiaDSF@gmail.com','0554112368',['order8','sdfsdfdrt']);
let client9 = new Client(9,'Kokos','koks','kokosUserik3@gmail.com','0445887213',['order9','ghjfghfgh','hgjuyyju','dbff','sfdfg','dfg','ghffh','gfhfghfgfgh']);
let client10 = new Client(10,'Anya','dfdkss','anyaKsS@gmail.com','077896452',['order10','fdgdfg','dfgdf','tgrt','ufgb','ufhh']);

let client=[];
client.push(client1, client2, client3, client4,client5, client6, client7, client8, client9,client10);
console.log(client);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClient = client.sort((a,b)=> {
    return a.order.length - b.order.length;
    })
console.log(sortClient);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
function Car(model, producer, year, maxSpeed, engineVolume) {
          this.model = model;
          this.producer = producer;
          this.year = year;
          this.maxSpeed = maxSpeed;
          this.engineVolume = engineVolume;
          this.drive = function (){
              console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
          };
          this.info = function (){
              console.log(
                  `model - ${this.model}
                   producer - ${this.producer}
                   year - ${this.year}
                   maxSpeed - ${this.maxSpeed}
                   engineVolume - ${this.engineVolume}`);
          }
          this.increaseMaxSpeed = function (newSpeed){
              this.maxSpeed = newSpeed;
          }
                this.changeYear = function (newYear){
                    this.year = newYear;
                }
          this.addDriver = function (driver){
              this.addDriver = driver;
          }
}
let car = new Car('Toyota Hybrid CH-R','Toyota' ,2018, 142, 1.8 );
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(250);
car.info();
car.changeYear(2020);
car.addDriver('Lola');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car{
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
          this.producer = producer;
          this.year = year;
          this.maxSpeed = maxSpeed;
          this.engineVolume = engineVolume;
          this.drive = function (){
              console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
          };
          this.info = function (){
              console.log(
                  `model - ${this.model}
                   producer - ${this.producer}
                   year - ${this.year}
                   maxSpeed - ${this.maxSpeed}
                   engineVolume - ${this.engineVolume}`);
          }
          this.increaseMaxSpeed = function (newSpeed){
              this.maxSpeed = newSpeed;
          }
          this.changeYear = function (newYear){
              this.year = newYear;
          }
          this.addDriver = function (driver){
              this.addDriver = driver;
          }
    }
}
let car = new Car('Toyota Hybrid CH-R','Toyota' ,2018, 142, 1.8 );
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(250);
car.info();
car.changeYear(2020);
car.addDriver('Lola');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Popelushka(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize  = footSize;
}
let arr;
arr = [
    new Popelushka('Vika',21,38),
    new Popelushka('Tanya',20,40),
    new Popelushka('Ira',21,37),
    new Popelushka('Katya',19,38),
    new Popelushka('Zosia',22,35),
    new Popelushka('Nastya',23,41),
    new Popelushka('Oksana',21,39),
    new Popelushka('Olya',24,37),
    new Popelushka('Anya',22,36),
    new Popelushka('Masha',21,36)
]
console.log(arr);

class Prince {
    constructor(name, age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let prince = new Prince('Adam', 26, 35);
console.log(prince);
for (let i = 0; i < arr.length; i++) {
    if(prince.footSize===arr[i].footSize){
        console.log(arr[i]);
    }
}
let popelFind = arr.find(value => {
    if(prince.footSize===value.footSize) {
        return value;
    }
});
console.log(popelFind);