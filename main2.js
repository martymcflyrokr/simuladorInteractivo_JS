//Variables Globales
let burgerPollo = 'Pollo'
let stockPollo = 20
let precioBurgerPollo = 350

let burgerCarne = 'Carne'
let stockCarne = 8
let precioBurgerCarne = 800

let unidadesCompradas = 0

let unidVentaCarne = 0
let unidVentaPollo = 0

let precioVentaCarne = 0
let precioVentaPollo = 0

let precioVentaCarneTotal = 0
let precioVentaPolloTotal = 0
let precioVentaTotal=0


//Funciones
function pedirCantidad(stock) {
    console.log('El stock actual es ' + stock)
    unidadesCompradas = parseInt(prompt('Cuantas unidades desea comprar?'))
    console.log('quiere comprar ' + unidadesCompradas)
    return unidadesCompradas
}
function actualizarstock(stocktipo, cantidad) {
    console.log('usuario compró : ' + cantidad + ' unidades')
    if (stocktipo === 'stockCarne') {
        stockCarne -= cantidad
    } else if (stocktipo === 'stockPollo') {
        stockPollo -= cantidad
    }
}
function actualizarUnidades(seleccionBurger) {
    if (seleccionBurger === 'Carne') {
        unidVentaCarne += unidadesCompradas
    } else if (seleccionBurger === 'Pollo') {
        unidVentaPollo += unidadesCompradas
    }
}
function sumarPrecio(seleccionBurger) {
    if (seleccionBurger === 'Carne') {
        precioVentaCarne = unidadesCompradas * precioBurgerCarne
        precioVentaCarneTotal += precioVentaCarne

    } else if (seleccionBurger === 'Pollo') {
        precioVentaPollo = unidadesCompradas * precioBurgerPollo
        precioVentaPolloTotal += precioVentaPollo
    }
}
function stockInsuficiente(stock) {
    alert('No contamos con la cantidad que indica.\nSolo contamos con ' + stock + ' unidades.')
    console.log('El usuario eligió mas que el stock actual')
}
function resumenCompraActual(seleccionBurger) {

    let pedirResumen = prompt('Desea ver el resumen de su compra?')
    if (pedirResumen === 'si') {
        
        if (seleccionBurger === 'Carne') {
            console.log('Compra actual : \n' +
                'Burgers Carne - ' + unidVentaCarne + ' unidades: $' + precioVentaCarneTotal)
        } else if (seleccionBurger === 'Pollo') {
            console.log('Compra actual : \n' +
                'Burgers Pollo - ' + unidVentaPollo + ' unidades: $' + precioVentaPolloTotal)
        }
    } else {
        console.log('usuario no quiere ver el resumen')
    }
}

function sumarTotales() {
    precioVentaTotal = precioVentaPolloTotal+precioVentaCarneTotal

    alert('Resumen compra total : \n - - - - - - - - - \n' +
        '\nCliente - ' + cliente +
        '\nBurgers Carne - ' + unidVentaCarne + ' unidades: $' + precioVentaCarneTotal +
        '\nBurgers Pollo - ' + unidVentaPollo + ' unidades: $' + precioVentaPolloTotal +
        '\nPrecio Total: $' + precioVentaTotal)

    console.log('Resumen compra total : \n - - - - - - - - - \n' +
       '\nCliente - ' + cliente +
       '\nBurgers Carne - ' + unidVentaCarne + ' unidades: $' + precioVentaCarneTotal +
       '\nBurgers Pollo - ' + unidVentaPollo + ' unidades: $' + precioVentaPolloTotal +
       '\nPrecio Total: $' + precioVentaTotal)

}
    

//EJECUCION

let cliente = prompt('Ingrese nombre:')
let consultaCompra = prompt('Quiere realizar una compra?\nsi \nno')

while (consultaCompra === 'si') {
    seleccionBurger = prompt('Seleccione el tipo de hamburguesa:\n1- Carne \n2- Pollo')
    switch (seleccionBurger) {
        case 'Carne':
            pedirCantidad(stockCarne)
            if (unidadesCompradas <= stockCarne) {
                actualizarstock('stockCarne', unidadesCompradas)
                actualizarUnidades('Carne')
                sumarPrecio('Carne')
                resumenCompraActual('Carne')
            } else {
                stockInsuficiente(stockCarne)
            }
            break

        case 'Pollo':
            pedirCantidad(stockPollo)
            if (unidadesCompradas <= stockPollo) {
                actualizarstock('stockPollo', unidadesCompradas)
                actualizarUnidades('Pollo')
                sumarPrecio('Pollo')
                resumenCompraActual('Pollo')
            } else {
                stockInsuficiente(stockPollo)
            }
            break

        default: alert('seleccionó un tipo de hamburgesa invalido')
    }
    sumarTotales()
    consultaCompra = prompt('Desea seguir comprando?')
}