import hamburgerMenu from "./1_menu_hamburgesa.js";

const $d = document;
$d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
});
