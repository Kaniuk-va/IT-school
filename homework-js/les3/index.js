// 1
// let min = parseInt(prompt("Введіть мінімальне число: "));
// let max = parseInt(prompt("Введіть максимальне число: "));
// let sum = 0;
// if(min > max){
//     console.log("Дані введено некоректно!")
// }
// for(let i = min ; i <= max ; i++){
//     sum += i;
// }
// console.log(sum);

// 2
// let num1 = parseInt(prompt("Введіть перше число: "));
// let num2 = parseInt(prompt("Введіть друге число: "));
// let smallest = 0;
// let biggest = 0;
// let biggest_division = 0;
// if(num1 < num2){
//     smallest = num1;
//     biggest = num2;
// }else{
//     smallest = num2;
//     biggest = num1;
// }
// for(let i = 1; i <= smallest; i++){
//     if(num1 % i == 0 && num2 % i == 0){
//         biggest_division = i;
//     }
// }
// console.log(biggest_division);

// 3
// let num = parseInt(prompt("Введіть число: "));
// for(let i = 1; i <= num ; i++){
//     if(num % i == 0){
//         console.log(i);
//     }
// }

// 4
// let num = parseInt(prompt("Введіть число: "));
// let count = 0;
// if(num == 0){
//     count = 1;
// }
// while (num > 0){
//     num = Math.floor(num / 10);
//     count += 1;
// }
// console.log(count);

// 5
// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;

// for (let i = 1 ; i <= 10; i++){
//     let num = parseFloat(prompt("Введіть число: "));

//     if (num == 0){
//         zero++;
//     }if(num > 0){
//         positive++;
//     }if(num < 0){
//         negative++;
//     }if(num % 2 == 0){
//         even++;
//     }if(num % 2 != 0){
//         odd++;
//     }else{
//         console.log("дані введено некоректно!");
//     }
// }
// console.log(positive);
// console.log(negative);
// console.log(zero);
// console.log(even);
// console.log(odd);

// 6
// let num1 = parseFloat(prompt("Введи перше число: "));
// let num2 = parseFloat(prompt("Введи друге число: "));
// let op = prompt("Введіть оператор: ");

// while (true) {
//     switch (op) {
//         case '+':
//             console.log(`${num1} + ${num2} = ${num1 + num2}`)
//             break;
//         case '-':
//             console.log(`${num1} - ${num2} = ${num1 - num2}`)
//             break;
//         case '*':
//             console.log(`${num1} * ${num2} = ${num1 * num2}`)
//             break;
//         case '/':
//             console.log(`${num1} / ${num2} = ${num1 / num2}`)
//             break;
//     }
//     let qu = prompt("Ви хочете продовжити?");
//     if (qu == "так") {
//         let num1 = parseFloat(prompt("Введи перше число: "));
//         let num2 = parseFloat(prompt("Введи друге число: "));
//         let op = prompt("Введіть оператор: ");
//     } else {
//         break;
//     }
// }