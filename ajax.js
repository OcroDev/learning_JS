/************************** 106 AJAX *******************************/
/*
(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    //validacion importante
    if (xhr.readyState !== 4) {
        return;
    }
    //validacion para verificar la respuesta del servidor
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("exito");
      //console.log(xhr.responseText);
      let json = JSON.parse(xhr.responseText);
      json.forEach((element) => {
          const $li = document.createElement("li");
        $li.innerHTML = `nombre: ${element.name} -- ID: ${element.id} -- Phone: ${element.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      //console.log("error");
      let message = xhr.statusText || "Ocurrio un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }

    //console.log(xhr);
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  
  xhr.send();
})();

*/
/************************** 106 AJAX Fetch *******************************/
const $fetch = document.getElementById("fetch"),
  $fragment = document.createDocumentFragment();

console.log($fetch);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res);
    return res.text();
  })
  .then((json) => {
    console.log(json);
    $fetch.innerHTML = json;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(console.log("finally"));
