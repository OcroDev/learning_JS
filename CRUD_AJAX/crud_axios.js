const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $tittle = d.querySelector(".crud-tittle"),
  $template = d.querySelector(".crud-template").content,
  $fragment = d.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await axios.get("http://localhost:3000/santos"),
      json = await res.data;

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
    let message = err.statusText || "Ocurrio un error en getAll";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>${err.status}: ${err.message}</b></p>`
    );
  }
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!e.target.id.value) {
      //CREATE  - POST
      try {
        let options = {
          method: "POST",
          headers: { "Content-type": "application/json; charset=utf-8" },
          data: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          }),
        };
        let res = await axios("http://localhost:3000/santos", options);
        let json = await res.data;
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML(
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    } else {
      try {
        //UPDATE - PUT
        let options = {
          method: "PUT",
          headers: { "Content-type": "application/json; charset=utf-8" },
          data: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value,
          }),
        };
        let res = await axios(
            `http://localhost:3000/santos/${e.target.id.value}`,
            options
          ),
          json = res.data;
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML(
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

  if (e.target.matches(".delete")) {
    let isDelete = confirm(
      `Estás seguro de eliminar el Santo ${e.target.dataset.name}`
    );

    if (isDelete) {
      try {
        let options = {
          method: "DELETE",
          headers: { "Content-type": "application/json; charset=utf-8" },
        };
        let res = await axios(
            `http://localhost:3000/santos/${e.target.dataset.id}`,
            options
          ),
          json = res.data;
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML(
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
});
