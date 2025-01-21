// Задано сторінку з 3 кнопками . Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при наведенні колір фону міняється на коричневий
//         
// Запустіть виконане завдання за допомогою Live Server 
// Перевірте виконання за допомогою команди node tests/task2.test.js

const firstBtn = document.querySelector("#button1");
const secondBtn = document.querySelector("#button2");
const thirdBtn = document.querySelector("#button3");

function changeFirstBtn () {
    document.body.style.backgroundColor = "rgb(0, 0, 255)";
}
firstBtn.onclick = changeFirstBtn;

let clickCount = 0;
secondBtn.addEventListener ("click", function () {
    clickCount++;

    if (clickCount === 2) {
        document.body.style.backgroundColor = "rgb(255, 192, 203)";
        clickCount = 0;
    }
})
thirdBtn.addEventListener ("mouseover", function () {
    document.body.style.backgroundColor = "rgb(165, 42, 42)";
});
