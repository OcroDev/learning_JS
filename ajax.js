/************************** 106 AJAX *******************************/

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
      // console.log("exito");
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

/************************** 107 AJAX Fetch *******************************/

(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      // console.log(json);
      json.forEach((element) => {
        const $li = document.createElement("li");
        $li.innerHTML = `nombre: ${element.name} -- ID: ${element.id} -- Phone: ${element.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally
    //console.log("Codigo ejecutado independiente de la respuesta fetch normal")
    ();
})();

/********************* 108 AJAX: API Fetch + Async+Await ***********************/

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();
      if (!res.ok) {
        throw { status: res.status, statusText: res.statusText };
      }

      json.forEach((element) => {
        const $li = document.createElement("li");
        $li.innerHTML = `nombre: ${element.name} -- ID: ${element.id} -- Phone: ${element.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      let message = err.statusText || "Ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      //   console.log("finally await");
    }
  }
  getData();
})();

/********************* 109 AJAX: API Axios ***********************/
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //console.log(res);
      let json = res.data;
      json.forEach((element) => {
        const $li = document.createElement("li");
        $li.innerHTML = `nombre: ${element.name} -- ID: ${element.id} -- Phone: ${element.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((err) => {
      console.log("estamos en el catch de axios", err.response);
      let message = err.response.statusText || "Ocurrio un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => console.log(""));
})();

/********************* 110 AJAX: API Axios + Async+Await ***********************/

(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;

      json.forEach((element) => {
        const $li = document.createElement("li");
        $li.innerHTML = `nombre: ${element.name} -- ID: ${element.id} -- Phone: ${element.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      // console.log("estamos en el catch de axios", err.response);
      let message = err.response.statusText || "Ocurrio un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      //  console.log("esto se ejecuta independiente del axios async ");
    }
  }
  getData();
})();
