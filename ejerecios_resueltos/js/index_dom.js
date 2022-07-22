import hamburgerMenu from "./1_menu_hamburgesa.js";
import { digitalClock, alarm } from "./2_reloj.js";
import { shortcuts } from "./3_teclado.js";

const $d = document;
$d.addEventListener("DOMContentLoaded", (e) => {
  /**Ejercicio 1 */
  hamburgerMenu(".panel-btn", ".panel", ".menu a");

  /**Ejercicio 2 */
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("#activar-alarma", "#desactivar-alarma");
});

$d.addEventListener("keydown", (e) => {
  shortcuts(e);
});
