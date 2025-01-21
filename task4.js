// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js


function updateWindowSize() {
    const width = document.querySelector("#widthValue");
    const height = document.querySelector("#heightValue");

    width.textContent = window.innerWidth;
    height.textContent = window.innerHeight;
}

window.addEventListener("resize", updateWindowSize);
updateWindowSize();

