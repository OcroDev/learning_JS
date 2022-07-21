const $hamburger = document.querySelector(".hamburger");

document.addEventListener("click", (e) => {
  //cambiar de forma el boton
  console.log(e.target);
  if (e.target.matches(".hamburger-box")) {
    $hamburger.classList.toggle("is-active");
  }
  if (e.target.matches(".hamburger-inner")) {
    $hamburger.classList.toggle("is-active");
  }
});
