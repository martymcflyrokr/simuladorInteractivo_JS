let burgerVegana = 'Vegana'
let stockInicialVegana = parseInt(10)
let precioBurgerVegana = parseInt(450)

let burgerPollo = 'Pollo'
let stockInicialPollo = parseInt(20)
let precioBurgerPollo = parseInt(350)

let burgerVacuna = 'Vacuna'
let stockInicialVacuna = parseInt(8)
let precioBurgerVacuna = parseInt(800)

let stockActualVegana
let cantidadElegidaVegana
let stockActualPollo
let cantidadElegidaPollo
let stockActualVacuna
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

function confirmaCompra(stockActual, stockini, cantEleg, tipoBurger, precio) {
    stockActual = stockini - cantEleg
    alert('Compraste ' + cantEleg + ' de hamburgesas tipo ' + tipoBurger + '\npor un total de ' + cantEleg * precio + ' ARS')
    console.log('El user gastó ' + cantEleg * precio + ' ARS ')
    console.log('El stock actual es de ' + stockActual + ' hamburgesas tipo ' + tipoBurger)
}

function actualizaStock(cantEleg, stockini, stockActualt, tipoBurger, precio) {
    cantEleg = (prompt('Indique la cantidad que desea comprar.\nContamos con un stock de ' + stockini + ' unidades'))
    console.log('El usuario ' + cliente + ' quiere comprar ' + cantEleg + ' de burgers tipo ' + burgerVegana)
        if ((cantEleg <= stockini)&&(stockini>=1)) {
        confirmaCompra(stockActualt, stockini, cantEleg, tipoBurger, precio)
        stockini -= cantEleg
        } else {
        excedeStock()
        } 
    
}

let cliente = prompt('Ingrese su nombre')
let consultaCompra = prompt('Quiere realizar una compra?\nSi \nNo')

while (consultaCompra=='Si') {

    let burgerElegida = (
        prompt('ingrese el tipo de hamburgesa que quiere llevar: \n Vegana \n Pollo \n Vacuna'))

    if ((burgerElegida == 'Vegana') || (burgerElegida == 'Pollo') || (burgerElegida == 'Vacuna')) {
        console.log('El usuario eligió hamburgesa tipo ' + burgerElegida)

        if ((burgerElegida == 'Vegana')&&(stockInicialVegana>=1)){
        
            actualizaStock(cantidadElegidaVegana, stockInicialVegana, stockActualVegana, burgerVegana, precioBurgerVegana)
/*
            cantidadElegidaVegana = (prompt('Indique la cantidad que desea comprar.\nContamos con un stock de ' + stockInicialVegana + ' unidades'))
            console.log('El usuario ' + cliente + ' quiere comprar ' + cantidadElegidaVegana + ' de burgers tipo ' + burgerVegana)

            if ((cantidadElegidaVegana <= stockInicialVegana)&&(stockInicialVegana>=1)) {
                confirmaCompra(stockActualVegana, stockInicialVegana, cantidadElegidaVegana, burgerVegana, precioBurgerVegana)
                stockInicialVegana -= cantidadElegidaVegana
            } else {
                excedeStock()
            }      
*/
        }
    
        else if ((burgerElegida == 'Vacuna')&&(stockInicialVacuna>=1)){
            cantidadElegidaVacuna = (prompt('Indique la cantidad que desea comprar.\nContamos con un stock de ' + stockInicialVacuna + ' unidades'))
            console.log('El usuario ' + cliente + ' quiere comprar ' + cantidadElegidaVacuna + ' de burgers tipo ' + burgerVacuna)

            if ((burgerElegida == 'Vacuna')&&(stockInicialVacuna>=1)){
                confirmaCompra(stockActualVacuna, stockInicialVacuna, cantidadElegidaVacuna, burgerVacuna, precioBurgerVacuna)
                stockInicialVacuna -= cantidadElegidaVacuna

            } else {
                excedeStock()
            }
        }

        else if ((burgerElegida == 'Pollo')&&(stockInicialPollo>=1)){
            cantidadElegidaPollo = (prompt('Indique la cantidad que desea comprar.\nContamos con un stock de ' + stockInicialPollo + ' unidades'))
            console.log('El usuario ' + cliente + ' quiere comprar ' + cantidadElegidaPollo + ' de burgers tipo ' + burgerPollo)

            if ((burgerElegida == 'Pollo')&&(stockInicialPollo>=1)){
                confirmaCompra(stockActualPollo, stockInicialPollo, cantidadElegidaPollo, burgerPollo, precioBurgerPollo)
                stockInicialPollo -= cantidadElegidaPollo   
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