const firstCard = document.querySelector(".first-display-card");
const secondCard = document.querySelector(".second-display-card");
const buttons = document.querySelectorAll(".button-section__btn");
const submitButton = document.getElementById("submit");
const chosenButton = document.getElementById("chosen-number");

submitButton.addEventListener("click", () => {
  secondCard.classList.remove("hidden");
  firstCard.style.display = "none";
});

buttons.forEach(button => button.addEventListener('click', ()=>
chosenButton.innerHTML = button.innerHTML));

