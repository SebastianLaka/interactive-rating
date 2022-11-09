const firstCard = document.querySelector(".first-display-card");
const secondCard = document.querySelector(".second-display-card");
const buttons = document.querySelectorAll(".button-section__btn");
const submitButton = document.getElementById("submit");
const choosenButton = document.getElementById("selected-button");

submitButton.addEventListener("click", () => {
  secondCard.classList.remove("hidden");
  firstCard.style.display = "none";
});


