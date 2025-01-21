// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.
// Список з елементами знаходиться у файлі index.html
// Для запуску використовувати Live Server
// Для перевірки виконання виконати команду node tests/task3.test.js

const dropDown = document.querySelector("#dropdown");
const delBtn = document.querySelector("#deleteButton");

delBtn.addEventListener ("click", function() {
    const selectedOption = dropDown.options[dropDown.selectedIndex];

    if (selectedOption) {
        selectedOption.remove();
    }

})