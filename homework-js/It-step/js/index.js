// 1
const box1 = document.getElementById('box1');
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const inp3 = document.getElementById('inp3');
const btn = document.getElementById('btn1');
const res = document.createElement('h3');

btn.addEventListener('click', () => {
    const n1 = Number(inp1.value);
    const op = inp2.value;
    const n3 = Number(inp3.value);

    let result;

    if (op === '/' && n3 === 0) {
        alert('На нуль ділити не можна!');
    }
    switch (op) {
        case '+':
            result = n1 + n3;
            break;
        case '-':
            result = n1 - n3;
            break;
        case '*':
            result = n1 * n3;
            break;
        case '/':
            result = n1 / n3;
            break;
        default:
            alert('Дані введено не правильно!');
    }


    res.textContent = `Результат: ${result}`;

    box1.appendChild(res);
});

// 2
const box2 = document.getElementById('box2');
const inp4 = document.getElementById('inp4');
const inp5 = document.getElementById('inp5');
const btn2 = document.getElementById('btn2');
const res2 = document.createElement('h3');

btn2.addEventListener('click', () => {
    const n4 = Number(inp4.value);
    const n5 = Number(inp5.value);

    let result2;
    if (n4 > n5) {
        result2 = `${n4} більше за ${n5}`;
    } else if (n4 < n5) {
        result2 = `${n5} більше за ${n4}`;
    }

    res2.textContent = result2;

    box2.append(res2);
});
// 3
const box3 = document.getElementById('box3');
const inp6 = document.getElementById('inp6');
const inp7 = document.getElementById('inp7');
const inp8 = document.getElementById('inp8');
const btn3 = document.getElementById('btn3');
const res3 = document.createElement('h3');

btn3.addEventListener('click', () => {
    const a = Number(inp6.value);
    const b = Number(inp7.value);
    const c = Number(inp8.value);

    let result3;

    const D = b ** 2 - 4 * a * c;
    if (D < 0) {
        result3 = D + ' ' + 'Коренів не існує!';
    } else if (D === 0) {
        const x = -b / (2 * a);
        result3 = 'Корінь: ' + x;
    } else {
        const x1 = (-b - D ** 0.5) / (2 * a);
        const x2 = (-b + D ** 0.5) / (2 * a);

        result3 = 'Корені: ' + x1 + ' та ' + x2;
    }


    res3.textContent = result3;

    box3.append(res3);
});

// 4
const box4 = document.getElementById('box4');
const inp9 = document.getElementById('inp9');
const btn4 = document.getElementById('btn4');
const res4 = document.createElement('h3');
const rand_n = Math.floor(Math.random() * 100);

btn4.addEventListener('click', () => {
    const n6 = Number(inp9.value);

    let result4;

    if (n6 === rand_n) {
        result4 = 'Вітаю! Ви вгадали число!';
    } else if (n6 < rand_n) {
        result4 = 'Загадане число більше!';
    } else {
        result4 = 'Загадане число менше!';
    }

    res4.textContent = result4;

    box4.append(res4);
});

// 5
const box5 = document.getElementById('box5');

const bt1 = document.getElementById('b1');
const bt2 = document.getElementById('b2');
const bt3 = document.getElementById('b3');
const bt4 = document.getElementById('b4');
const bt5 = document.getElementById('b5');
const bt6 = document.getElementById('b6');

const res5 = document.createElement('h3');
let wons = 0;
let defeats = 0;
let eaquals = 0;

const wons_p = document.createElement('h3');
const defeats_p = document.createElement('h3');
const eaquals_p = document.createElement('h3');

wons_p.textContent = `Виграші: ${wons}`;
defeats_p.textContent = `Програші: ${defeats}`;
eaquals_p.textContent = `Нічия: ${eaquals}`;

box5.append(wons_p, defeats_p, eaquals_p);

bt1.addEventListener('click', () => {
    const choice = 'rock';
    bt4.style.backgroundColor = 'grey';
    bt5.style.backgroundColor = 'grey';
    bt6.style.backgroundColor = 'grey';
    const rand_b = Math.floor(Math.random() * 3);
    let result5;
    if (rand_b === 0) {
        bt4.style.backgroundColor = 'green';
        result5 = 'rock';
    } else if (rand_b === 1) {
        bt5.style.backgroundColor = 'green';
        result5 = 'scissors';
    } else if (rand_b === 2) {
        bt6.style.backgroundColor = 'green';
        result5 = 'paper';
    }

    if (result5 === 'scissors') {
        res5.textContent = 'Ви виграли!';
        wons++;
    } else if (result5 === 'paper') {
        res5.textContent = 'Ви програли!';
        defeats++;
    } else {
        res5.textContent = 'Нічия!';
        eaquals++;
    }

    box5.append(res5);
    wons_p.textContent = `Виграші: ${wons}`;
    defeats_p.textContent = `Програші: ${defeats}`;
    eaquals_p.textContent = `Нічия: ${eaquals}`;

    box5.append(wons_p, defeats_p, eaquals_p);

});
bt2.addEventListener('click', () => {
    const choice = 'scissors';
    bt4.style.backgroundColor = 'grey';
    bt5.style.backgroundColor = 'grey';
    bt6.style.backgroundColor = 'grey';
    const rand_b = Math.floor(Math.random() * 3);
    let result5;
    if (rand_b === 0) {
        bt4.style.backgroundColor = 'green';
        result5 = 'rock';
    } else if (rand_b === 1) {
        bt5.style.backgroundColor = 'green';
        result5 = 'scissors';
    } else if (rand_b === 2) {
        bt6.style.backgroundColor = 'green';
        result5 = 'paper';
    }

    if (result5 === 'paper') {
        res5.textContent = 'Ви виграли!';
        wons++;
    } else if (result5 === 'rock') {
        res5.textContent = 'Ви програли!';
        defeats++;
    } else {
        res5.textContent = 'Нічия!';
        eaquals++;
    }
    box5.append(res5);

    wons_p.textContent = `Виграші: ${wons}`;
    defeats_p.textContent = `Програші: ${defeats}`;
    eaquals_p.textContent = `Нічия: ${eaquals}`;

    box5.append(wons_p, defeats_p, eaquals_p);
});
bt3.addEventListener('click', () => {
    const choice = 'paper';

    bt4.style.backgroundColor = 'grey';
    bt5.style.backgroundColor = 'grey';
    bt6.style.backgroundColor = 'grey';
    const rand_b = Math.floor(Math.random() * 3);
    let result5;
    if (rand_b === 0) {
        bt4.style.backgroundColor = 'green';
        result5 = 'rock';
    } else if (rand_b === 1) {
        bt5.style.backgroundColor = 'green';
        result5 = 'scissors';
    } else if (rand_b === 2) {
        bt6.style.backgroundColor = 'green';
        result5 = 'paper';
    }

    if (result5 === 'rock') {
        res5.textContent = 'Ви виграли!';
        wons++;
    } else if (result5 === 'scissors') {
        res5.textContent = 'Ви програли!';
        defeats++;
    } else {
        res5.textContent = 'Нічия!';
        eaquals++;
    }

    box5.append(res5);
    wons_p.textContent = `Виграші: ${wons}`;
    defeats_p.textContent = `Програші: ${defeats}`;
    eaquals_p.textContent = `Нічия: ${eaquals}`;
    box5.append(wons_p, defeats_p, eaquals_p);
});
