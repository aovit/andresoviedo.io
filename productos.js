const $element1 = document.querySelector(".cards"); // assuming ul exists
const $template1 = document.getElementById("template-card").content;
const $fragment1 = document.createDocumentFragment();



const data = async () => {
    try {
        let res = await fetch("../b-datos/articulos.json"),
        json = await res.json()

        json.forEach((el) => {

            $template1.querySelector(".imagen-principal").setAttribute("src", el.imagen1);
            $template1.querySelector(".imagen-principal").setAttribute("alt", el.titulo);
            $template1.querySelector(".titulo-producto").textContent = el.titulo;
            $template1.querySelector(".price").textContent = "$" + el.precio;
            $template1.querySelector(".descripcion-producto").textContent = el.descripcion;
            $template1.querySelector(".zoom-text").setAttribute("data-id", el.id)
            

            
            


            

            


          //$template1.querySelector(".titulo-producto").textContent = el.titulo;
          //$template1.querySelector("#bg1").setAttribute("src", el.imagen1);
          //$template1.querySelector("#bg1").setAttribute("alt", el.titulo);
          //$template1.querySelector(".slideshow-container").setAttribute("id", el.id);
          //$template1.querySelector("#bg2").setAttribute("src", el.imagen1);
          //$template1.querySelector("#bg2").setAttribute("alt", el.titulo);
          //$template1.querySelector("#bg3").setAttribute("src", el.imagen3);
          //$template1.querySelector("#bg3").setAttribute("alt", el.titulo);
          //$template1.querySelector("#imagen1").setAttribute("src", el.imagen1);
          //$template1.querySelector("#imagen1").setAttribute("alt", el.titulo);
          //$template1.querySelector("#imagen2").setAttribute("src", el.imagen2);
          //$template1.querySelector("#imagen2").setAttribute("alt", el.titulo);
          //$template1.querySelector("#imagen3").setAttribute("src", el.imagen3);
          //$template1.querySelector("#imagen3").setAttribute("alt", el.titulo);
          //$template1.querySelector("#overflow-auto").removeAttribute("class");
          //$template1.querySelector("#overflow-auto").classList.add("overflow-auto");
          //$template1.querySelector("#overflow-auto").classList.add(el.tipo);
          //$template1.querySelector(".card").setAttribute("id", el.id);
          //$template1.querySelector(".card").setAttribute("data-id", el.id)
          //$template1.querySelector("a").setAttribute("href", el.supagina);
          //$template1.querySelector("a").setAttribute("target", "_blank");
          //$template1.querySelector(".titulo-producto").textContent = el.titulo;
          //$template1.querySelector(".price").textContent = "$" + el.precio;
          //$template1.querySelector(".descripcion-producto").textContent = el.descripcion;
          //$template1.querySelector("#texto-modal").textContent = el.descripcion;

          //$template1.querySelector("#bg1").setAttribute("src", el.imagen1);
          //$template1.querySelector("#bg1").setAttribute("alt", el.titulo);
          //$template1.querySelector("#bg2").setAttribute("src", el.imagen2);
          //$template1.querySelector("#bg3").setAttribute("src", el.imagen3);
          
          let $clone = document.importNode($template1, true);
          $fragment1.appendChild($clone);
        });
        
        $element1.appendChild($fragment1);
    } catch (err) {
        let message = err.statusText || "Ocurrió un error al solicitar los datos, revise url"
        $element1.innerHTML = message
    } finally {

    }
}

document.addEventListener("DOMContentLoaded", data)

/* 
const imageView = document.querySelector(".image-view")
const nextBtn = document.getElementById("next-btn")
const prevBtn = document.getElementById("prev-btn")
const imageBox = document.querySelector(".image-box")
const zoomBtn = document.querySelectorAll(".zoom-text")
const allImages = document.querySelectorAll(".img-container")
const lista = document.querySelectorAll(".donn")

console.log(lista)
let ss = document.querySelectorAll("zoom-text");
console.log(ss) */
        

