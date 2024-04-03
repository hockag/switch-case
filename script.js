const form = document.querySelector('#myForm');
const select = document.querySelector('#mySelect');
const message = document.querySelector('#message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    message.textContent = "Ви вибрали: " + select.value;
});
// 2

const calendar = document.querySelector('#calendar');
const checkButton = document.querySelector('#checkButton');
const message2 = document.querySelector('#message2');

checkButton.addEventListener('click', function () {
    let day = calendar.value.toLowerCase();
    switch (day) {
        case 'понеділок':
        case 'вівторок':
        case 'середа':
        case 'четвер':
        case 'пятниця':
            message2.textContent = "Це робочі дні";
            break;
        case 'субота':
        case 'неділя':
            message2.textContent = "Це вихідні дні";
            break;
        default:
            message2.textContent = "Введено не коректні дні";
    }
})
// 3


function getSeason() {
    let month = document.querySelector('#month').value;
    let season;

    switch (month) {
        case '12':
        case '1':
        case '2':
            season = "Зима";
            break;
        case '3':
        case '4':
        case '5':
            season = "Весна";
            break;
        case '6':
        case '7':
        case '8':
            season = "Літо";
            break;
        case '9':
        case '10':
        case '11':
            season = "Осінь";
            break;
        default:
            season = "Будь ласка введіть вірний номер місяця";
    }
    document.getElementById("result").innerHTML = season;
}
// 4
function getDays() {
    let month = document.getElementById("month-2").value;
    let year = new Date().getFullYear(); // поточний рік
    let days = new Date(year, month, 0).getDate();

    document.getElementById("result-2").innerHTML = `У місяці ${month} - ${days} днів.`;
}
// 5

function getColorAction() {
    let color = document.querySelector('#color').value;
    let action;

    switch (color) {
        case 'червоний':
            action = "Стоп";
            break;
        case 'зелений':
            action = 'йти';
            break;
        case 'жовтий':
            action = 'чекати';
            break;
        default:
            action = 'Колір не розпізнано.';
    }
    document.querySelector('#result-3').innerHTML = action;
}
// 6

function calculate() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let operation = document.querySelector('#operation').value;
    let result4;

    switch (operation) {
        case '+':
            result4 = Number(num1) + Number(num2);
            break;
        case '-':
            result4 = Number(num1) - Number(num2);
            break;
        case '*':
            result4 = Number(num1) * Number(num2);
            break;
        case '/':
            if (num2 === 0 ) {
                alert("Ділення на нуль неможливе");
                return;
            }
            result4 = Number(num1) / Number(num2);
            break;
    }
    document.getElementById("result-4").innerHTML = `Результат: ${result4}`;
}

