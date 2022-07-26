const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $tittle = d.querySelector(".crud-tittle"),
  $template = d.querySelector(".crud-template").content,
  $fragment = d.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await fetch("http://localhost:3000/santos");
    json = await res.json();
    if (!res.ok) {
      throw { status: res.status, statusText: res.statusText };
    }
    console.log(json);
    json.forEach((element) => {
      $template.querySelector(".name").textContent = element.nombre;
      $template.querySelector(".constelation").textContent =
        element.constelacion;
      $template.querySelector(".edit").dataset.id = element.id;
      $template.querySelector(".edit").dataset.name = element.nombre;
      $template.querySelector(".edit").dataset.constelation =
        element.constelacion;
      $template.querySelector(".delete").dataset.id = element.id;
      $template.querySelector(".delete").dataset.name = element.nombre;
      $template.querySelector(".delete").dataset.constelation =
        element.constelacion;
      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!e.target.id.value) {
      //CREATE - POST
      try {
        let options = {
          method: "POST",
          headers: { "Content-type": "application/json; charset=utf-8" },
          body: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          }),
        };
        let res = await fetch("http://localhost:3000/santos", options);
        let json = await res.json();
        if (!res.ok) {
          throw { status: res.status, statusText: res.statusText };
        } else {
          location.reload();
        }
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    } else {
      //UPDATE - PUT
      try {
        let options = {
          method: "PUT",
          headers: { "Content-type": "application/json; charset=utf-8" },
          body: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          }),
        };
        let res = await fetch(
            `http://localhost:3000/santos/${e.target.id.value}`,
            options
          ),
          json = await res.json();
        if (!res.ok) {
          throw { status: res.status, statusText: res.statusText };
        } else {
          location.reload();
        }
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
});

d.addEventListener("click", async (e) => {
  if (e.target.matches(".edit")) {
    $tittle.textContent = "Editar Santo";
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constelation;
    $form.id.value = e.target.dataset.id;
  }
  //DELETE
  if (e.target.matches(".delete")) {
    let isDelete = confirm(
      `Estás seguro de eliminar el id ${e.target.dataset.id}`
    );

    if (isDelete) {
      try {
        let options = {
          method: "DELETE",
          headers: { "Content-type": "application/json; charset=utf-8" },
        };
        let res = await fetch(
            `http://localhost:3000/santos/${e.target.dataset.id}`,
            options
          ),
          json = await res.json();

        if (!res.ok) {
          throw { status: res.status, statusText: res.statusText };
        } else {
          location.reload();
        }
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        alert(`Error ${err.status}: ${message}`);
      }
    }
  }
});
