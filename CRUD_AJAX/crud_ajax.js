const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $tittle = d.querySelector(".crud-tittle"),
  $template = d.querySelector("#crud-template").content,
  $fragment = d.createDocumentFragment();

const ajax = (options) => {
  let { url, method, success, error, data } = options;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) {
      return;
    }
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      let message = xhr.statusText || "Ocurrió un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });

  xhr.open(method || "GET", url);
  xhr.setRequestHeader("Content-type", "aplication/json; charset=utf-8");
  console.log(data);
  xhr.send(JSON.stringify(data));
};
const getAll = () => {
  ajax({
    method: "GET",
    url: "http://localhost:3000/santos",
    success: (res) => {
      console.log(res);

      res.forEach((element) => {
        $template.querySelector(".name").textContent = element.nombre;
        $template.querySelector(".constelation").textContent =
          element.constelacion;
        $template.querySelector(".edit").dataset.id = element.id;
        $template.querySelector(".edit").dataset.name = element.nombre;
        $template.querySelector(".edit").dataset.constelation =
          element.constelacion;
        $template.querySelector(".delete").dataset.id = element.id;
        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $table.querySelector("tbody").appendChild($fragment);
    },
    error: (err) => {
      console.error(err);
      $table.insertAdjacentHTML(
        "afterend",
        `<p style="color:red"><b>${err}</b></p>`
      );
    },
    data: null,
  });
};
d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      //create - post
      ajax({
        url: "http://localhost:3000/santos",
        method: "POST",
        success: (res) => {
          //location.reload();
        },
        error: (err) => {
          $form.insertAdjacentHTML(
            "afterend",
            `<p style="color:red"><b>${err}</b></p>`
          );
        },
        data: {
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        },
      });
    } else {
      //update - put
    }
  }
});

const createSaint = () => {};

const updateSaint = () => {};

const deleteSaint = () => {};
