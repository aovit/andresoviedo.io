const $element = document.querySelector(".cards"); // assuming ul exists
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();
const browsers = [
    {
        titulo: "perro riendo",
        imagen: "../img/perro1.jpg",
        descripcion: "este es el perro 0",
        precio: "$" + 20000,
    },
    {
        titulo: "gato durmiendo",
        imagen: "../img/gato1.jpg",
        descripcion: "este es el gato 1",
        precio: 2000,
    },
    {
        titulo: "gato rascando",
        imagen: "../img/gato2.jpg",
        descripcion: "este es el gato 2",
        precio: 5000,
    },{
        titulo: "gato durmiendo",
        imagen: "../img/gato1.jpg",
        descripcion: "este es el gato 1",
        precio: 2000,
    },{
        titulo: "gato durmiendo",
        imagen: "../img/gato1.jpg",
        descripcion: "este es el gato 1",
        precio: 2000,
    },{
        titulo: "gato durmiendo",
        imagen: "../img/gato1.jpg",
        descripcion: "este es el gato 1",
        precio: 2000,
    },{
        titulo: "gato durmiendo",
        imagen: "../img/gato1.jpg",
        descripcion: "este es el gato 1",
        precio: 2000,
    },{
        titulo: "gato durmiendo",
        imagen: "../img/gato1.jpg",
        descripcion: "este es el gato 1",
        precio: 2000,
    },
];

browsers.forEach((el) => {
  $template.querySelector(".titulo-producto").textContent = el.titulo;
  $template.querySelector("img").setAttribute("src", el.imagen);
  $template.querySelector("img").setAttribute("alt", el.titulo);
  $template.querySelector(".titulo-producto").textContent = el.titulo;
  $template.querySelector(".price").textContent = "$" + el.precio;
  $template.querySelector(".descripcion-producto").textContent = el.descripcion;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$element.appendChild($fragment);

