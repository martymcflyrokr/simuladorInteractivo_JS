//Variables Globales
let burgerVegana = 'Vegana'
let stockVegana = 10
let precioBurgerVegana = 450

let burgerPollo = 'Pollo'
let stockPollo = 20
let precioBurgerPollo = 350

let burgerVacuna = 'Vacuna'
let stockVacuna = 8
let precioBurgerVacuna = 800

let unidadesTotal = 0
let stockNuevo
let unidadesCompradas = 0
let precioCompra
let precioTotal = 0

//Funciones
function pedirCantidad(stock) {
    console.log('El stock actual es ' + stock)
    unidadesCompradas = parseInt(prompt('Cuantas unidades desea comprar?'))
    console.log('quiere comprar ' + unidadesCompradas)
    return unidadesCompradas
}

function actualizarstock(stocktipo) {
    console.log('usuario compró : ' + unidadesCompradas + ' unidades')
    stockNuevo = stocktipo - unidadesCompradas
    stocktipo = stockNuevo
    return stockNuevo
}

function actualizarUnidades() {
    unidadesTotal = unidadesTotal + unidadesCompradas
    return unidadesTotal
}
function sumarPrecio(precio) {
    precioCompra = unidadesCompradas * precio
    precioTotal = precioCompra + precioTotal
    return precioTotal
}
function stockInsuficiente(stock) {
    alert('No contamos con la cantidad que indica.\nSolo contamos con ' + stock + ' unidades.')
    console.log('El usuario eligió mas que el stock actual')
}
function resumenCompra(unidadestotales, preciototal) {
    console.log('Resumen compra total : \n - - - - - - - - - \n' +
        'Burgers Vacuna - ' + unidadestotales + ' unidades: $' + preciototal)
}

let cliente = prompt('Ingrese nombre:')
let consultaCompra = prompt('Quiere realizar una compra?\nsi \nno')

while (consultaCompra === 'si') {

    seleccionBurger = prompt('Seleccione el tipo de hamburguesa:\n1- Vacuna \n2- Pollo \n3- Vegana')



    switch (seleccionBurger) {
        case 'Vacuna':
            pedirCantidad(stockVacuna)
            if (unidadesCompradas <= stockVacuna) {
                actualizarstock(stockVacuna)
                // stockVacuna = stockNuevo
                actualizarUnidades()
                sumarPrecio(precioBurgerVacuna)
            } else {
                stockInsuficiente(stockVacuna)
            }

            break

        case 'Pollo':

            break

        case 'Vegana':

            break

        default: alert('seleccionó un tipo de hamburgesa invalido')
    }

    let pedirResumen = prompt('Desea ver el resumen de su compra?')
    if (pedirResumen === 'si') {
        resumenCompra(unidadesTotal, precioTotal)

    } else {
        console.log('usuario no quiere ver el resumen')
    }

    consultaCompra = prompt('Desea seguir comprando?')
}