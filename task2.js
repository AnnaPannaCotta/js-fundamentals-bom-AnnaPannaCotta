// Допишіть функцію applyStyles, щоб простилізувати елементи як показано на картинці task2.png

function applyStyles() {

     const bigHeader = document.querySelector("#title");
     bigHeader.style.backgroundColor = "lightgreen";

     const boldFont = document.querySelector("#myDiv p:first-child");
     boldFont.style.fontWeight = "700";

     const redFont = boldFont.nextElementSibling;
     redFont.style.color = "red";

     const underText = redFont.nextElementSibling;
     underText.style.textDecoration = "underline";

     const italicOld = underText.nextElementSibling;
     italicOld.style.fontStyle = "italic";
     
     const myListNew = document.getElementById("myList");
     myListNew.style.listStyle = "none";
     myListNew.style.display = "flex";

     const invisSpan = myListNew.nextElementSibling;
     invisSpan.style.display = "none";
}


//Не видаляй наступні рядки, вони потрібні для запуску тестів
applyStyles()
module.exports = applyStyles;
