// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// const calc = (a,b,c) => {
//    if(a<b && a<c){
//        console.log(a);
//        return a;
//    } else if(b<a && b<c) {
//        console.log(b);
//        return b;
//    } else if(c<a && c<b){
//        console.log(c);
//        return c;
//    }
// }
// calc(2, 5, -3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const findMax = (a,b,c) => {
//     if(a>b && a>c){
//         console.log(a);
//         return a;
//     } else if(b>a && b>c){
//         console.log(b);
//         return b;
//     } else if(c>a && c>b){
//         console.log(c);
//         return c;
//     }
// }
// findMax(4,64,-64)

// - створити функцію яка повертає найбільше число з масиву
// const arr = [9, 9090, 4, 75, 22];
// const findMax = (array) => {
//     let max = array[0];
//     for (const item of arr) {
//         if (item > max)
//             max = item;
//     }
//     return max;
// }
// console.log(findMax(arr));

// - створити функцію яка повертає найменьше число з масиву
// const arr = [4,65,654,-64,42,-557];
// const findMin = (array) => {
//     let min = array[0];
//     for (const item of arr) {
//         if (item < min)
//             min = item;
//     }
//     return min;
// }
// console.log(findMin(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const arr = [43,6,12,0,7];
// function arraySum(array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     console.log(sum);
// }
// arraySum(arr);


// - Дано натуральное число n. Выведите все числа от 1 до n.
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:

//   foo([9,8,0,4], 0) ==> [ 8, 9, 0, 4 ]
//   const arr = [9,8,0,4];
// const foo = (array, index) => {
//     let tmp = array[index];
//     array[index] = array[index + 1];
//     array[index + 1] = tmp;
//     return arr;
// }
// console.log(foo(arr, 0));

//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// const  arr = [9,8,0,4];
// const foo = (array, index) =>{
//     let tmp = array[index];
//     array[index] = array[index + 1];
//     array[index + 1] = tmp;
//     return arr;
// }
// console.log(foo(arr, 1));

//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// const arr = [9,8,0,4];
// const foo=(array, index) =>{
//     let tmp = array[index];
//     array[index] = array[index + 1];
//     array[index+1] = tmp;
//     return arr;
// }
// console.log(foo(arr, 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:

// [1,0,6,0,3] => [1,6,3,0,0]
// const arr = [1,0,6,0,3];
// const res = [];
// let index = 0;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0){
//         count++
//     }else {
//         res[index++] = arr[i];
//     }
// }
// let zeroCount = res.length;
// for (let i = 0; i < count; i++) {
//     res[zeroCount++] = 0;
// }
// console.log(res);
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
