const $element = document.querySelector(".cards"); // assuming ul exists
const $template = document.getElementById("template-categorias").content;
const $fragment = document.createDocumentFragment();


const data = async () => {
    try {
        let res = await fetch("./categorias.json"),
        json = await res.json()

        json.forEach((el) => {
          $template.querySelector(".titulo-producto").textContent = el.titulo;
          $template.querySelector("img").setAttribute("src", el.imagen);
          $template.querySelector("img").setAttribute("alt", el.titulo);
          $template.querySelector("#seleccionar").setAttribute("href", el.supagina);
          $template.querySelector("#seleccionar").setAttribute("Target", "_blank");
          $template.querySelector("a").setAttribute("href", el.supagina);
          //$template.querySelector("a").setAttribute("Target", "_blank");
          let $clone = document.importNode($template, true);
          $fragment.appendChild($clone);
        });
        
        $element.appendChild($fragment);
    } catch (err) {
        let message = err.statusText || "Ocurrió un error al solicitar los datos, revise url"
        $element.innerHTML = message
    } finally {

    }
}

document.addEventListener("DOMContentLoaded", data)
