let burgerVegana = "Vegana"
let stockInicialVegana = parseInt(10)
let precioBurgerVegana = parseInt(450)

let burgerPollo = "Pollo"
let stockInicialPollo = parseInt(20)
let precioBurgerPollo = parseInt(350)

let burgerVacuna = "Vacuna"
let stockInicialVacuna = parseInt(8)
let precioBurgerVacuna = parseInt(800)

function excedeStock() {
    alert('La cantidad seleccionada supera el stock actual. Vuelva a intentarlo')
    console.log('La cantidad elegida es mayor al stock actual')
}

function seleccionInvalida() {
    alert('Seleccionó un tipo de hamburgesa que no tenemos. Vuelva a intentar.')
    console.log('Seleccion de hamburgesa invalido')
}

function compra(caneleg, stockini, tipobur, stockac) {
    if (caneleg < stockini) {
        stockac = parseInt(stockini - caneleg)
        console.log('El stock actual es de ' + stockac + ' hamburgesas tipo ' + tipobur)
        alert('Compraste ' + caneleg + ' de hamburgesas tipo ' + tipobur)
    }
}

let cliente = prompt("Ingrese su nombre")

for (i = 1; i < 4; i++) {

    let stockActualVegana
    let cantidadElegidaVegana
    let stockActualPollo
    let cantidadElegidaPollo
    let stockActualVacuna
    let cantidadElegidaVacuna

    let burgerElegida = (
        prompt("ingrese el tipo de hamburgesa que quiere llevar: \n Vegana \n Pollo \n Vacuna"))

    if ((burgerElegida == "Vegana") || (burgerElegida == "Pollo") || (burgerElegida == "Vacuna")) {

        console.log('El usuario eligió hamburgesa tipo ' + burgerElegida)

        if (burgerElegida == "Vegana") {
            cantidadElegidaVegana = parseInt(prompt('Indique la cantidad que desea comprar.\nContamos con un stock de ' + stockInicialVegana + ' unidades'))
            console.log('El usuario ' + cliente + ' quiere comprar ' + cantidadElegidaVegana + ' de burgers tipo ' + burgerVegana)

            if (cantidadElegidaVegana < stockInicialVegana) {
                stockActualVegana = stockInicialVegana - cantidadElegidaVegana
                console.log('El stock actual es de ' + stockActualVegana + ' hamburgesas tipo ' + burgerVegana)
                alert('Compraste ' + cantidadElegidaVegana + ' de hamburgesas tipo ' + burgerVegana)

            } else {
                excedeStock()
            }

            stockInicialVegana = stockActualVegana
        }
        else if (burgerElegida == "Vacuna") {
            cantidadElegidaVacuna = parseInt(prompt('Indique la cantidad que desea comprar.\nContamos con un stock de ' + stockInicialVacuna + ' unidades'))
            console.log('El usuario ' + cliente + ' quiere comprar ' + cantidadElegidaVacuna + ' de burgers tipo ' + burgerVacuna)

            if (cantidadElegidaVacuna <= stockInicialVacuna) {
                stockActualVacuna = stockInicialVacuna - cantidadElegidaVacuna
                console.log('El stock actual es de ' + stockActualVacuna + ' hamburgesas tipo ' + burgerVacuna)
                alert('Compraste ' + cantidadElegidaVacuna + ' de hamburgesas tipo ' + burgerVacuna)
            } else {
                excedeStock()
            }
            stockInicialVacuna = parseInt(stockActualVacuna)
        }
        else if (burgerElegida == "Pollo") {
            cantidadElegidaPollo = parseInt(prompt('Indique la cantidad que desea comprar.\nContamos con un stock de ' + stockInicialPollo + ' unidades'))
            console.log('El usuario ' + cliente + ' quiere comprar ' + cantidadElegidaPollo + ' de burgers tipo ' + burgerPollo)

            if (cantidadElegidaPollo <= stockInicialPollo) {
                stockActualPollo = stockInicialPollo - cantidadElegidaPollo
                console.log('El stock actual es de ' + stockActualPollo + ' hamburgesas tipo ' + burgerPollo)
                alert('Compraste ' + cantidadElegidaPollo + ' de hamburgesas tipo ' + burgerPollo)
            } else {
                excedeStock()
            }
            stockInicialPollo = parseInt(stockActualPollo)
        }
        else {
            console.log('El usuario enloqueció')
        }
    } else {
        seleccionInvalida()
    }
}