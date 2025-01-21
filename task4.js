// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress

const myForm = document.querySelector(".array fieldset");
const formItems = myForm.children;

const name = formItems[1].value;
const phoneNumber = formItems[2].value;
const dateOfBirth = formItems[3].value;
const emailAddress = formItems[4].value;

//Не видаляй наступні рядки, вони потрібні для запуску тестів
module.exports = {
  name,
  phoneNumber,
  dateOfBirth,
  emailAddress,
};
