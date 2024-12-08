//Unfold Error Messages
const unfoldButton = document.querySelector(".heatSourceCard__unfoldButton");
const heatSourceCard = document.querySelector(".heatSourceCard");

unfoldButton.addEventListener ("click", () =>{
    heatSourceCard.classList.toggle("active");
    unfoldButton.classList.toggle("active");
})

//Switch active source

const heatSourceButtons = document.querySelectorAll(".heatSourceButtons__button");
const parent = document.querySelector(".heatSourceButtons");

heatSourceButtons.forEach((button) =>
  button.addEventListener("click", () => {
    console.log("it works");

    // Remove the active class from all buttons
    heatSourceButtons.forEach((btn) => btn.classList.remove("active"));

    // Add the active class to the clicked button
    button.classList.add("active");

    //insert the button in front of the others
    parent.insertBefore(button, parent.firstChild);
  })
);