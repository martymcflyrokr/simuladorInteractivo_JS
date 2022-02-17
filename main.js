let burgerVegana = 'Vegana'
let stockInicialVegana = parseInt(10)
let precioBurgerVegana = parseInt(450)

let burgerPollo = 'Pollo'
let stockInicialPollo = parseInt(20)
let precioBurgerPollo = parseInt(350)

let burgerVacuna = 'Vacuna'
let stockInicialVacuna = parseInt(8)
let precioBurgerVacuna = parseInt(800)

let cantidadElegidaVegana
let cantidadElegidaPollo
let cantidadElegidaVacuna

function excedeStock() {
    alert('La cantidad seleccionada supera el stock actual. Vuelva a intentarlo')
    console.log('La cantidad elegida es mayor al stock actual')
}

function seleccionInvalida() {
    alert('Seleccionó un tipo de hamburgesa que no tenemos. Vuelva a intentar.')
    console.log('Seleccion de hamburgesa invalido')
}

function consultaCantidad(cantEleg, stockini, tipoBurger) {
    cantEleg = (prompt('Indique la cantidad que desea comprar.\nContamos con un stock de ' + stockini + ' unidades'))
    console.log('El usuario ' + cliente + ' quiere comprar ' + cantEleg + ' de burgers tipo ' + tipoBurger)
}

function confirmaCompra(cantEleg, tipoBurger, precioBur) {
    alert('Compraste ' + cantEleg + ' de hamburgesas tipo ' + tipoBurger + '\npor un total de ' + precioBur * cantEleg + ' ARS')
    console.log('El user gastó ' + precioBur * cantEleg + ' ARS ')

}
let cliente = prompt('Ingrese su nombre')
let consultaCompra = prompt('Quiere realizar una compra?\nSi \nNo')

while (consultaCompra == 'Si') {

    let burgerElegida = (
        prompt('ingrese el tipo de hamburgesa que quiere llevar: \n Vegana \n Pollo \n Vacuna'))

    if ((burgerElegida == 'Vegana') || (burgerElegida == 'Pollo') || (burgerElegida == 'Vacuna')) {
        console.log('El usuario eligió hamburgesa tipo ' + burgerElegida)



        if ((burgerElegida == 'Vegana') && (stockInicialVegana >= 1)) {

            cantidadElegidaVegana = (prompt('Indique la cantidad que desea comprar.\nContamos con un stock de ' + stockInicialVegana + ' unidades'))
            console.log('El usuario ' + cliente + ' quiere comprar ' + cantidadElegidaVegana + ' de burgers tipo ' + burgerVegana)

            if ((cantidadElegidaVegana <= stockInicialVegana) && (stockInicialVegana >= 1)) {
                confirmaCompra(cantidadElegidaVegana, burgerVegana, precioBurgerVegana)
                stockInicialVegana -= cantidadElegidaVegana
                console.log('el stock actual es de ' + stockInicialVegana)
            } else {
                excedeStock()
            }
        }

        else if ((burgerElegida == 'Vacuna') && (stockInicialVacuna >= 1)) {

            cantidadElegidaVacuna = (prompt('Indique la cantidad que desea comprar.\nContamos con un stock de ' + stockInicialVacuna + ' unidades'))
            console.log('El usuario ' + cliente + ' quiere comprar ' + cantidadElegidaVacuna + ' de burgers tipo ' + burgerVacuna)

            if ((cantidadElegidaVacuna <= stockInicialVacuna) && (stockInicialVacuna >= 1)) {
                confirmaCompra(cantidadElegidaVacuna, burgerVacuna, precioBurgerVacuna)
                stockInicialVacuna -= cantidadElegidaVacuna
                console.log('el stock actual es de ' + stockInicialVacuna)
            } else {
                excedeStock()
            }
        }

        else if ((burgerElegida == 'Pollo') && (stockInicialPollo >= 1)) {

            cantidadElegidaPollo = (prompt('Indique la cantidad que desea comprar.\nContamos con un stock de ' + stockInicialPollo + ' unidades'))
            console.log('El usuario ' + cliente + ' quiere comprar ' + cantidadElegidaPollo + ' de burgers tipo ' + burgerPollo)

            if ((cantidadElegidaPollo <= stockInicialPollo) && (stockInicialPollo >= 1)) {
                confirmaCompra(cantidadElegidaPollo, burgerPollo, precioBurgerPollo)
                stockInicialPollo -= cantidadElegidaPollo
                console.log('el stock actual es de ' + stockInicialPollo)
            } else {
                excedeStock()
            }
        }

        else {
            console.log('El usuario quiere comprar un producto sin Stock')
            alert('No hay mas stock del producto seleccionado. \nSeleccione otro producto.')
        }

    } else {
        seleccionInvalida()
    }

    consultaCompra = prompt('Desea continuar comprando? \nSi \nNo')

}