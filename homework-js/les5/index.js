// 1
function compare(a, b) {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}

compare(2,4)

// 2
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

factorial(4)

// 3
function digitsToNumber(a, b, c) {
    return (`${a}${b}${c}`);
}

digitsToNumber(2,4,6)
// 4
function rectangleArea(a, b = a) {
    return a * b;
}

rectangleArea(2,5)
// 5
function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0)
            sum += i;
    }
    return sum === num && num !== 0;
}

isPerfect(20)

// 6
function perfectInRange(min, max) {
    for (let i = min; i <= max; i++) {
        if (isPerfect(i)) {
            console.log(i);
        }
    }
}

perfectInRange(20 , 34)

// 8
function timeToSeconds(h, m, s) {
    return h * 3600 + m * 60 + s;
}

timeToSeconds(18,38,23)
