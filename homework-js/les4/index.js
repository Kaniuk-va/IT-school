// 1 Порахуй кількість пробілів у рядку
let str1 = "Hello world";
let count = 0;

for (let el of str1) {
    if (el === " ") {
        count++;
    }
}
console.log(count);


// 2 Знайди середнє арифметичне чисел у масиві
let arr1 = [2, 4, 6, 8];
let sum = 0;

for (let el of arr1) {
    sum += el;
}
console.log(sum / arr1.length);


// 3 Знайди друге найбільше число в масиві
let arr2 = [5, 1, 9, 7, 3];
let newArr = [];
let maximum = Math.max(...arr2);

for(let i = 0; i <= arr2.length-1;i++){
    if (arr2[i] === maximum){
        continue;
    }
    else{
        newArr.push(arr2[i]);
    }
}

console.log(Math.max(...newArr));


// 4 Створи масив з 15 випадкових чисел від 1 до 20 та виведи всі парні
let arr3 = [];

for (let i = 0; i < 15; i++) {
    arr3.push(Math.floor(Math.random() * 20));
}

for (let el of arr3) {
    if (el % 2 === 0) {
        console.log(el);
    }
}


// 5 Переверни рядок без використання reverse()
let str2 = "Hello";
let rev = "";

for (let i = str2.length - 1; i >= 0; i--) {
    rev += str2[i];
}
console.log(rev);


// 6 Перевір, чи масив відсортований за зростанням
let arr4 = [1, 2, 3, 4, 5];
let ok = true;
for(let i = 0; i <= arr4.length ; i++){
    if(arr4[i] === i){
        ok = true;
    }
    else{
        ok = false;
    }
}

console.log(ok);


// 7 Знайди найдовше слово в рядку

let str3 = "Hello world!";
let word = "";
let max = "";

for (let el of str3 + " ") {
    if (el === " ") {
        if (word.length > max.length) {
            max = word;
        }
        word = "";

    } else {
        word += el;
    }
}



console.log(max);


