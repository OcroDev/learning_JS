/*console.log(window);
let texto = "hola mundo jajajajajajajaja jaja jaja jajaja";
const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);*/

/***Dom  61

console.log("***************** Elementos del Documento **************");

console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.doctype);
console.log(document.title);
console.log(document.links);

setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
*/

/*******************************************DOM 62************************************
 * etiquetas html no son nodos
 */

/** metodos antiguos 
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

/**
 * Metodos modificados y utilizados en la actualidad 
 console.log(document.getElementById("menu"));
 console.log(document.getElementsByName("nombre"));
 
 query selector necesita identificar el tipo de selector css

console.log(document.getElementById("menu"));

console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((elemento) => {
  console.log(elemento);
});
console.log(document.querySelector(".card")[1]);
console.log(document.querySelectorAll(".card")[1]);
console.log(document.querySelectorAll("#menu li"));
*/

/*******************************************DOM 64********************************** */
/*
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
document.documentElement.setAttribute("lang", "es-MX");

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com");
console.log($linkDOM.hasAttribute("rel"));

//data-attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "modelo de objeto del documento");

$linkDOM.dataset.description = "cambio por notacion de punto";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("tex-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "0.5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM)); */

/*******************************************DOM 65**********************************

const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("sepia");
console.log($card.classList.contains("sepia"));

*/

/*******************************************DOM 66 **********************************
 * 

const $whatisDOM = document.getElementById("que-es");

let text = ` 
    <p>
    El modelo de objetos del documento (<b> <i> DOM - Document Object Model</i> </b>) es un API para documentos HTML Y XML
    </p>
    <p>
    Este provee una representacion estrucutral del documento, permitiendo modificar su contenido y presentación visual mediante código JS
    </p>
    <p>
    <mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

//se usaba en internet explorer
$whatisDOM.innerText = text;

//estandar
$whatisDOM.textContent = text;
$whatisDOM.innerHTML = text;
$whatisDOM.outerHTML = text;
*/

/*******************************************DOM 67 **********************************/
/*
$cards = document.querySelector(".cards");

console.log($cards);

console.log($cards.children);
console.log($cards.children[2]);

console.log($cards.parentElement);

console.log($cards.firstElementChild);

console.log($cards.lastElementChild);

console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));

*/

/*******************************************DOM 68 **********************************/
/*
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

{
  //forma 1
  $img.setAttribute("src", "https://placeimg.com/200/200/animals");
  $img.setAttribute("alt", "Animals");
  $figure.classList.add("card");

  $figcaption.appendChild($figcaptionText);
  $figure.appendChild($img);
  $figure.appendChild($figcaption);
  $cards.appendChild($figure);
}

{
  //forma 2
  $figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>

`;

  $figure2.classList.add("card");
  $cards.appendChild($figure2);
}

{
  // forma 1
  const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

  document.write("<h3>Estaciones dle Año</h3>");

  document.body.appendChild($ul);

  estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
  });
}

{
  // forma 2
  const continentes = ["Africa", "America", "Asia", "Oceanía"],
    $ul2 = document.createElement("ul");

  document.write("<h3>Continenetes del Mundo</h3>");
  document.body.appendChild($ul2);

  $ul2.innerHTML = "";

  continentes.forEach((element) => {
    $ul2.innerHTML += `<li>${element}</li>`;
  });
}

//fragmentos forma optima de crear elementos dinamicos desde un array
{
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  $ul3 = document.createElement("ul");
  $fragment = document.createDocumentFragment();

  meses.forEach((element) => {
    const $li = document.createElement("li");
    $li.textContent = element;
    $fragment.appendChild($li);
  });

  document.write("<h3>Meses del año</h3>");
  $ul3.appendChild($fragment);
  document.body.appendChild($ul3);
}
*/

/*******************************************DOM 69 **********************************/
/*
const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  $cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Persona",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

$cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);

  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);

*/

/*******************************************DOM 70 **********************************/
/*
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);
$newCard.innerHTML = `

<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption> Any </figcaption>
`;

$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);
//$cards.insertBefore($newCard, $cards.firstElementChild);
//$cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards);
*/

/*******************************************DOM 71 **********************************/
/*
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `

<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin", $contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
$cards.insertAdjacentElement("afterbegin", $newCard);

//$cards.prepend($newCard);
//$cards.before($newCard);
//$cards.append($newCard)
//$cards.after($newCard);
*/

/****************************************** DOM 72 **********************************/
/*
function holaMundo() {
  alert("hola Mundo");
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");
const $eventoSemanticoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holaMundo;

$eventoSemantico.onclick = function (e) {
  alert("hola mundo manejador de eventos semanticos");
  console.log(e);
  console.log(event);
};

$eventoSemanticoMultiple.addEventListener("click", holaMundo);

$eventoSemanticoMultiple.addEventListener("click", (e) => {
  alert("hola mundo manejador de eventos semanticos");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});
*/
