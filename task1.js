// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку та отримати текст в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінна secondEl
// четвертний елемент - змінна fourthEl
// третій елемент - змінна thirdEl

const list = document.getElementById("list");
const listItems = list.children;

  const firstEl = listItems[0].textContent;
  const lastEl = listItems[4].textContent;
  const secondtEl =listItems[1].textContent;
  const thirdtEl = listItems[2].textContent;
  const fourthEl = listItems[3].textContent;

  // const firstEl = document.querySelector("#list li:first-child").textContent.trim();
  // const lastEl = document.querySelector("#list li:last-child").textContent.trim();
  // const secondEl = document.querySelector("#list li:nth-child(2)").textContent.trim();
  // const thirdEl = document.querySelector("#list li:nth-child(3)").textContent.trim();
  // const fourthEl = document.querySelector("#list li:nth-child(4)").textContent.trim();

//Не видаляй наступні рядки, вони потрібні для запуску тестів
module.exports = {
  firstEl,
  lastEl,
  secondtEl,
  fourthEl,
  thirdtEl,
};
