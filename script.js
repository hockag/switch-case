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