const $element1 = document.querySelector(".cards"); // assuming ul exists
const $template1 = document.getElementById("template-card").content;
const $fragment1 = document.createDocumentFragment();


/* fecha de hoy */

const hoy = new Date()
const hoy1 = hoy.getDay()
const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
]
//const nombreDia = dias[hoy1]
const diaHoy = dias[hoy1]

/* fin fecha hoy */


const data = async () => {
    try {
        let res = await fetch("../b-datos/articulos.json"),
        json = await res.json()

        json.forEach((el) => {

            $template1.querySelector(".imagen-principal").setAttribute("src", el.imagen1);
            $template1.querySelector(".imagen-principal").setAttribute("alt", el.titulo);
            $template1.querySelector(".titulo-producto").textContent = el.titulo;
            $template1.querySelector(".titulo-producto").setAttribute("data-id", el.id)
            $template1.querySelector(".price").textContent = "$" + el.precio;
            $template1.querySelector(".descripcion-producto").textContent = el.descripcion;
            $template1.querySelector(".zoom-text").setAttribute("data-id", el.id)
            $template1.querySelector("#overflow-auto").removeAttribute("class");
            $template1.querySelector("#overflow-auto").classList.add("overflow-auto");
            $template1.querySelector("#overflow-auto").classList.add(el.tipo);
            $template1.querySelector("#overflow-auto").classList.add(el.no_promocion);
            $template1.querySelector("#overflow-auto").classList.add(el.no_nuevo);
            
            
            


            

            


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
        

const imageView = document.querySelector(".image-view")
const imageBox = document.querySelector(".image-box")
const infoTarjeta = document.querySelector(".info-tarjeta")
const nextBtn = document.getElementById("next-btn")
const prevBtn = document.getElementById("prev-btn")
const sliderColores = document.querySelector(".slider-colores");





document.addEventListener("click", function (e) {
    e.stopPropagation()

    let numImage = 1;
    
    const id = e.target.parentElement.children[0].dataset.id;
    localStorage.setItem("id", id)

    


    if(e.target.matches(".titulo-producto")) {
        e.stopImmediatePropagation()

        let id = e.target.parentElement.children[1].dataset.id;
        localStorage.setItem("idTarjeta", id)
        const $element = document.querySelector(".info-tarjeta"); // assuming ul exists
        const $template = document.getElementById("template-infoTarjeta").content;
        const $fragment = document.createDocumentFragment();
        const data = async () => {
            try {
                let res = await fetch("../b-datos/articulos.json"),
                json = await res.json()
                console.log(id)
                json.forEach((el) => {
                    
                    if(el.id == id) {
                        $template.getElementById("titulo-tarjeta").textContent = el.titulo;
                        $template.querySelector(".categoria-tarjeta").textContent = el.tipo;
                        $template.querySelector(".imagen-tarjeta").setAttribute("src", el.imagen1);
                        $template.querySelector(".imagen-tarjeta").setAttribute("alt", el.titulo);
                        $template.getElementById("color-escoger").textContent = el.imagenes_colores[0].color;
                        $template.getElementById("imagen-escoger").setAttribute("src", el.imagenes_colores[0].imagen);
                        $template.getElementById("imagen-escoger").setAttribute("alt", el.imagenes_colores[0].color);
                        $template.getElementById("precio-anterior").textContent = `$ ${el.precio_anterior.toLocaleString("en")}.`;
                        $template.getElementById("price-now").textContent = `$ ${el.precio.toLocaleString("en")}.`;



                        console.log(el.titulo)
                        let $clone = document.importNode($template, true);
                        $fragment.appendChild($clone);
                    }
                    
                    
                })
                $element.appendChild($fragment);
            } catch (err) {
                
            }
        }
        data()
        infoTarjeta.style.display = "block"
    }
    
    

    document.addEventListener("click", function(e){
        e.stopPropagation()
        if(e.target.matches(".color-tarjeta img") || e.target.matches(".color-tarjeta p") || e.target.matches(".color-tarjeta path")) {
            e.stopImmediatePropagation()
            console.log(localStorage.getItem("idTarjeta"))
            let id = localStorage.getItem("idTarjeta")
            
            const data = async () => {
                try {
                    let res = await fetch("../b-datos/articulos.json"),
                    json = await res.json()
                    json.forEach((el) => {
                        if(el.id == id) {
                            document.getElementById("li-1").style.backgroundImage = `url(${el.imagenes_colores[0].imagen})`
                            document.getElementById("li-2").style.backgroundImage = `url(${el.imagenes_colores[1].imagen})`
                            document.getElementById("li-3").style.backgroundImage = `url(${el.imagenes_colores[2].imagen})`
                            document.getElementById("btn-1").setAttribute("data-url-imagen", el.imagenes_colores[0].imagen)
                            document.getElementById("btn-2").setAttribute("data-url-imagen", el.imagenes_colores[1].imagen)
                            document.getElementById("btn-3").setAttribute("data-url-imagen", el.imagenes_colores[2].imagen)
                            document.getElementById("btn-1").setAttribute("data-url-color", el.imagenes_colores[0].color)
                            document.getElementById("btn-2").setAttribute("data-url-color", el.imagenes_colores[1].color)
                            document.getElementById("btn-3").setAttribute("data-url-color", el.imagenes_colores[2].color)
                            /* $template.getElementById("titulo-tarjeta").textContent = el.titulo;
                            $template.querySelector(".categoria-tarjeta").textContent = el.tipo;
                            $template.querySelector(".imagen-tarjeta").setAttribute("src", el.imagen1);
                            $template.querySelector(".imagen-tarjeta").setAttribute("alt", el.titulo);
                            $template.getElementById("color-escoger").textContent = el.imagenes_colores[0].color;
                            $template.getElementById("imagen-escoger").setAttribute("src", el.imagenes_colores[0].imagen);
                            $template.getElementById("imagen-escoger").setAttribute("alt", el.imagenes_colores[0].color); */
                            /* console.log(el.titulo)
                            let $clone = document.importNode($template, true);
                            $fragment.appendChild($clone); */
                        }
                    })
                    sliderColores.style.display = "block"
                } catch (err) {
                }
            }
            data()
        }

        document.addEventListener("click", function(e) {
            e.stopImmediatePropagation()
            if(e.target.matches(".btnSlider")) {
                console.log(e.target.parentElement.children[0].dataset)
                let urlImagen = e.target.parentElement.children[0].dataset.urlImagen;
                let urlColor = e.target.parentElement.children[0].dataset.urlColor;
                
                document.querySelector(".imagen-tarjeta").setAttribute("src", urlImagen);
                document.querySelector(".imagen-tarjeta").setAttribute("alt", urlColor);
                document.getElementById("imagen-escoger").setAttribute("src", urlImagen);
                document.getElementById("imagen-escoger").setAttribute("alt", urlColor);
                document.getElementById("color-escoger").textContent = urlColor;

                console.log(urlImagen)

                sliderColores.style.display = "none"
            }
        })
    })

    currentImagedisplay(id, numImage)
    function currentImagedisplay(id, numImage) {
        
        imageBox.style.background = `url("../img/perro${id}${numImage}.jpg")
        center/cover no-repeat`;
        //console.log(id, numImage)
    }

   

    
    if(e.target.matches(".zoom-text")) {
        e.stopImmediatePropagation()
        //let numImage = 1;
        //console.log(id)
        imageView.style.display = "block";
        imageBox.style.display = "block";
        
        
        prevBtn.addEventListener("click", (e) => {
            e.stopImmediatePropagation()
            let id = localStorage.getItem("id")
            numImage--;
            if(numImage < 1) {
                numImage = 3;
            }
            currentImagedisplay(id, numImage)
            console.log(id, numImage)

        })
        
        nextBtn.addEventListener("click", function(e) {
            e.stopImmediatePropagation()
            let id = localStorage.getItem("id")

            numImage++;
            if(numImage > 3) {
                numImage = 1;
            }
            currentImagedisplay(id, numImage)
            console.log(id, numImage)
        })
    }
    //console.log(id)
    if(e.target.matches(".image-view") || e.target.matches(".image-box")) {
        e.stopImmediatePropagation()
        imageView.style.display = "none";
        imageBox.style.display = "none";
        //document.location.reload()
        //console.log(id)
    }
    
}, {
    capture: false,
    once: false,
    passive: false
})


/* SLIDER DE ESCOGER COLORES */

if(document.querySelector('#container-slider')){
    setInterval('fntExecuteSlide("next")',5000);
  }
  //------------------------------ LIST SLIDER -------------------------
  if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
       link.addEventListener('click', function(e){
          e.preventDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split("_");
          fntExecuteSlide(arrItem[1]);
          return false;
       });
     });
  }
  
  function fntExecuteSlide(side){
     let parentTarget = document.getElementById('slider');
     let elements = parentTarget.getElementsByTagName('li');
     let curElement, nextElement;
  
     for(var i=0; i<elements.length;i++){
  
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(side == 'prev' || side == 'next'){
  
         if(side=="prev"){
             nextElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             nextElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         nextElement = side;
         side = (curElement > nextElement)?'prev':'next';
  
     }
     //RESALTA LOS PUNTOS
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[nextElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[nextElement].style.opacity=1;
     elements[nextElement].style.zIndex =1;
  }
  

/* FIN SLIDER DE ESCOGER COLORES */

