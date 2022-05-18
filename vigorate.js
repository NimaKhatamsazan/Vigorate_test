let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectBtn = document.querySelectorAll(".btn");
let modalNegativeBtn = document.querySelector(".modal_action_negative");

for (let i = 0; i < selectBtn.length; i++) {
  selectBtn[i].addEventListener("click", () => {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}

backdrop.addEventListener("click", modalCancel);
modalNegativeBtn.addEventListener("click", modalCancel);

function modalCancel() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}
