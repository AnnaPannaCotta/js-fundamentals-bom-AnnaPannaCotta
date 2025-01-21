// Допишіть скрипт у функцію applyStyles(), який за допомогою засобів DOM створить таку структуру з тегів і їх атрибутів.
//
//   <main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
//
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

function applyStyles() {
  const createElement = document.querySelector(".create_elements");
  
  const mainClass = document.createElement("p");
  mainClass.className = "mainClass check item";
  createElement.appendChild(mainClass);

  const divCreate = document.createElement("div");
  divCreate.id = "myDiv";
  mainClass.appendChild(divCreate);

  const pCreate = document.createElement("p");
  pCreate.innerHTML = "First paragraph";
  divCreate.appendChild(pCreate);
}

//Не видаляй наступні рядки, вони потрібні для запуску тестів
applyStyles();
module.exports = applyStyles;
