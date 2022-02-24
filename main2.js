let seleccionBurger
let unidadesCompradas = 0

let unidVentaCarne = 0
let unidVentaPollo = 0

let precioVentaCarne = 0
let precioVentaPollo = 0

let precioVentaCarneTotal = 0
let precioVentaPolloTotal = 0
let precioVentaTotal = 0

//clase constructora
function Producto(nombreValor, stockValor, precioValor) {
    this.nombre = nombreValor;
    this.stock = stockValor;
    this.precio = precioValor;
}

const producto1 = new Producto('Carne', '8', 800)
const producto2 = new Producto('Pollo', '20', 350)

/* CLASE

class Produs  {
    constructor (elnombre, elstock, elprecio, lacantidad, lasunidvendidas, elpreciototal){
        this.elnombre = elnombre.toUpperCase();
        this.elstock = parseInt(elstock)
        this.elprecio = parseInt(elprecio)
        this.lacantidad = parseInt(lacantidad)
        this.lasunidvendidas = parseint(lasunidvendidas)
        this.elpreciototal = parseint(this.elpreciototal)

    }
    valorVenta() {
        this.elprecio * this.lacantidad;
    }
    stockActual() {
        if (this.elstock > this.lacantidad) {
            this.elstock - this.lacantidad
            console.log('El stock actual es: ' + this.elstock)
        }
        else {
            console.log ('La cantidad supera al stock. vuelva a comprar.')
        }
    }
    ventaTotalunidades() {
        this.lasunidvendidas + lacantidad
        console.log ( 'se Vendieron ' + this.lasunidvendidas)
    }
    ventaTotalPesos() {
        this.elpreciototal = this.ventaTotalunidades() * this.precio
        console.log ( 'el total es: $ ' + this.elpreciototal )
    }
    

}


//Arrays


*/

//Funciones
function pedirCantidad(stock) {
    console.log('El stock actual es ' + stock)
    unidadesCompradas = parseInt(prompt('Cuantas unidades desea comprar?'))
    console.log('quiere comprar ' + unidadesCompradas)
}

function actualizarStock(cantidad) {
    console.log('usuario compró : ' + cantidad + ' unidades')
    if (seleccionBurger === producto1.nombre) {
        producto1.stock -= cantidad
    } else if (seleccionBurger === producto2.nombre) {
        producto2.stock -= cantidad
    }
}

function actualizarUnidades(seleccionBurger) {
    if (seleccionBurger === producto1.nombre) {
        unidVentaCarne += unidadesCompradas
    } else if (seleccionBurger === producto2.nombre) {
        unidVentaPollo += unidadesCompradas
    }
}

function sumarPrecio(seleccionBurger) {
    if (seleccionBurger === producto1.nombre) {
        precioVentaCarne = unidadesCompradas * producto1.precio
        precioVentaCarneTotal += precioVentaCarne

    } else if (seleccionBurger === producto2.nombre) {
        precioVentaPollo = unidadesCompradas * producto2.precio
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
    precioVentaTotal = precioVentaPolloTotal + precioVentaCarneTotal

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
            pedirCantidad(producto1.stock)
            if (unidadesCompradas <= producto1.stock) {
                actualizarStock(unidadesCompradas)
                actualizarUnidades(producto1.nombre)
                sumarPrecio(producto1.nombre)
                resumenCompraActual(producto1.nombre)
            } else {
                stockInsuficiente(producto1.stock)
            }
            break

        case 'Pollo':
            pedirCantidad(producto2.stock)
            if (unidadesCompradas <= producto2.stock) {
                actualizarStock(unidadesCompradas)
                actualizarUnidades(producto2.nombre)
                sumarPrecio(producto2.nombre)
                resumenCompraActual(producto2.nombre)
            } else {
                stockInsuficiente(producto2.stock)
            }
            break

        default: alert('seleccionó un tipo de hamburgesa invalido')
    }
    sumarTotales()
    consultaCompra = prompt('Desea seguir comprando?')
}