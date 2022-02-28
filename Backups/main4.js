//Con el element id traes lo que hay en html
let titulo = document.getElementById("titulo")
//entre parentesis lo que queres que traiga de ese id. el inner muestra lo que tiene dentro por consola o donde diga.
console.log(titulo.innerText)

//C
titulo.innerText = "bienvenidos!"

let subtitulo = document.createElement("h3")

subtitulo.innerText = "bienvenidos!"

document.body.append(subtitulo)

// console.log(titulo.innerText)


// element by class
let paises = document.getElementsByClassName("paises")

console.log(paises)
console.log(paises[0].innerText)

//se puede traer todo con un for of.

for (const pais of paises) {
    console.log(pais.innerHTML)
}

let paisNuevo = document.createElement("li")
//creo el nuevo item y pongo nombre
paisNuevo.innerText = "CO"
//traigo la lista de paises y la guardo
let listaPaises = document.getElementById("listapaises")
//Agrego el nuevo li
listaPaises.append(paisNuevo)

//para agregarlo en una cierta posición segun el indice sobre todos los hijos. 
listaPaises.insertBefore(paisNuevo, listaPaises.children[1])



/*
//by tag name
//siempre guardar lo que traiga de html en una variable. usar el let
let contenedores = document.getElementsByClassName("div")

//vamos a ver que tiene el bodi como inner html
console.log(document.body.innerHTML)

//podria modificar el html entero
document.body.innerHTML = '<h1>Buenas noches</h1><p>producto1</p><button>Comprame!</button>'

let cards;

for(let i = 0; i<5; i++) {
    cards += '<h1>Buenas noches</h1><p>producto1</p><button>Comprame!</button>'
}

document.body.innerHTML = cards
*/