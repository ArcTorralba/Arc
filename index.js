let profileIcon = document.getElementById("one");
let musicIcon = document.getElementById("two");
let message = document.getElementById("three");
let header = document.getElementById("main");
let navBoard = document.querySelector(".navigation__board");
let span = document.querySelector(".textBoard-span");


musicIcon.addEventListener("click", function () {
  header.textContent = "I vibe to cool songs especially 1990s songs. ";
  navBoard.classList.remove("purple");
  navBoard.classList.remove("white");
  navBoard.classList.toggle("blue");
  span.classList.remove("white");
  span.classList.remove("purple");
  span.classList.add("blue");
});

