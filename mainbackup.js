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

let unidadesTotal=0
let stockNuevo
let unidadesCompradas=0
let precioCompra
let precioTotal=0




// let cantidadElegidaVegana
// let cantidadElegidaPollo
// let cantidadElegidaVacuna
// let burgerElegida

//Funciones

function pedirCantidad(stock) {
    console.log ('El stock actual es ' + stock)
    unidadesCompradas = parseInt(prompt('Cuantas unidades desea comprar?'))
    console.log('quiere comprar ' + unidadesCompradas)
        return unidadesCompradas
}

function actualizarstock(stocktipo) {
    console.log('usuario compró : ' + unidadesCompradas + ' unidades')
    stockNuevo = stocktipo-unidadesCompradas
    stocktipo = stockNuevo
        return stockNuevo
}

function actualizarUnidades() {
    unidadesTotal = unidadesTotal + unidadesCompradas
        return unidadesTotal
}
function sumarPrecio (precio) {
    precioCompra = unidadesCompradas * precio
    precioTotal = precioCompra + precioTotal
        return precioTotal
}
function stockInsuficiente(stock) {
    alert('No contamos con la cantidad que indica.\nSolo contamos con ' + stock + ' unidades.')
    console.log('El usuario eligió mas que el stock actual')
    
}
function resumenCompra(unidadestotales, preciototal) {
    console.log('Resumen compra total : \n - - - - - - - - - \n'+
    'Burgers Vacuna - ' + unidadestotales + ' unidades: $' + preciototal)
}



let cliente = prompt('Ingrese nombre:')
let consultaCompra = prompt('Quiere realizar una compra?\nsi \nno')

while ( consultaCompra === 'si') {

    seleccionBurger = prompt('Seleccione el tipo de hamburguesa:\n1- Vacuna \n2- Pollo \n3- Vegana')
    
    

    switch (seleccionBurger) {
        case 'Vacuna':
            pedirCantidad(stockVacuna)
            if(unidadesCompradas<=stockVacuna) {
                actualizarstock(stockVacuna)
                // stockVacuna = stockNuevo
                actualizarUnidades()
                sumarPrecio(precioBurgerVacuna)
            }else{
                stockInsuficiente(stockVacuna)
            }

            break
        
        case 'Pollo':
            
            break
        
        case 'Vegana': 

            break
        
        default: alert('seleccionó un tipo de hamburgesa invalido')
        

    }

    // console.log('unidades compradas total ' + unidadesTotal)

    let pedirResumen = prompt('Desea ver el resumen de su compra?')
    if (pedirResumen === 'si') {
        resumenCompra(unidadesTotal, precioTotal)
        
    }else { 
        console.log('usuario no quiere ver el resumen')
    }

    consultaCompra = prompt('Desea seguir comprando?')
    

}

















//Ejecución
/*
let cliente = prompt('Ingrese su nombre')
let consultaCompra = prompt('Quiere realizar una compra?\nSi \nNo')

while (consultaCompra === 'Si') {

    burgerElegida = 
        prompt ('ingrese el tipo de hamburgesa que quiere llevar: \n Vegana \n Pollo \n Vacuna')

    if ((burgerElegida === 'Vegana') || (burgerElegida === 'Pollo') || (burgerElegida === 'Vacuna')) {
        console.log('El usuario eligió hamburgesa tipo ' + burgerElegida)

        if ((burgerElegida === 'Vegana') && (stockInicialVegana >= 1)) {
            cantidadElegidaVegana = prompt('Indique la cantidad que desea comprar.')
            console.log('El usuario ' + cliente + ' compró ' + cantidadElegidaVegana + ' burgers tipo ' + burgerVegana)

            if ((cantidadElegidaVegana <= stockInicialVegana) && (stockInicialVegana >= 1)) {
                confirmaCompra(cantidadElegidaVegana, burgerVegana, precioBurgerVegana)
                stockInicialVegana -= cantidadElegidaVegana
                console.log('el stock actual es de ' + stockInicialVegana)
            } else {
                excedeStock(stockInicialVegana)
            }
        }

        else if ((burgerElegida === 'Vacuna') && (stockInicialVacuna >= 1)) {

            cantidadElegidaVacuna = prompt('Indique la cantidad que desea comprar.')
            console.log('El usuario ' + cliente + ' compró ' + cantidadElegidaVacuna + ' burgers tipo ' + burgerVacuna)

            if ((cantidadElegidaVacuna <= stockInicialVacuna) && (stockInicialVacuna >= 1)) {
                confirmaCompra(cantidadElegidaVacuna, burgerVacuna, precioBurgerVacuna)
                stockInicialVacuna -= cantidadElegidaVacuna
                console.log('el stock actual es de ' + stockInicialVacuna)
            } else {
                excedeStock(stockInicialVacuna)
            }
        }

        else if ((burgerElegida === 'Pollo') && (stockInicialPollo >= 1)) {

            cantidadElegidaPollo = prompt('Indique la cantidad que desea comprar.')
            console.log('El usuario ' + cliente + ' quiere compró ' + cantidadElegidaPollo + ' burgers tipo ' + burgerPollo)

            if ((cantidadElegidaPollo <= stockInicialPollo) && (stockInicialPollo >= 1)) {
                confirmaCompra(cantidadElegidaPollo, burgerPollo, precioBurgerPollo)
                stockInicialPollo -= cantidadElegidaPollo
                console.log('el stock actual es de ' + stockInicialPollo)
            } else {
                excedeStock(stockInicialPollo)
            }
        }

        else {
            excedeStock()
        }

    } else {
        seleccionInvalida()
    }

    consultaCompra = prompt('Desea continuar comprando? \nSi \nNo')


}



BACKUP
case 'Vacuna':
            // console.log ('El stock actual es ' + stockVacuna)
            // unidadesCompradas = parseInt(prompt('Cuantas unidades desea comprar?'))
            // console.log('quiere comprar ' + unidadesCompradas)
            pedirCantidad(stockVacuna)

            if(unidadesCompradas<=stockVacuna) {
                //stockVacuna-=unidadesCompradas
                actualizarstock(stockVacuna,unidadesCompradas)
                stockVacuna = stockNuevo
                // stockVacuna = stockNuevo
                // unidadesTotal = unidadesTotal + unidadesCompradas
                actualizarUnidades(unidadesCompradas)
                sumarPrecio(unidadesCompradas,precioBurgerVacuna)
            }else{
                // alert('No contamos con la cantidad que indica.\nSolo contamos con ' + stockVacuna + ' unidades.')
                // console.log('El usuario eligió mas que el stock actual')
                stockInsuficiente(stockVacuna)
            }

            break
















            BACKUP FUNCIONANDO


            
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

let unidadesTotal=0
let stockNuevo
let unidadesCompradas
let precioCompra
let precioTotal=0
let unidadesCompradasPollo
let unidadesCompradasVegana
let unidadesCompradasVacuna



// let cantidadElegidaVegana
// let cantidadElegidaPollo
// let cantidadElegidaVacuna
// let burgerElegida

//Funciones

function pedirCantidad(stock) {
    console.log ('El stock actual es ' + stock)
    unidadesCompradas = parseInt(prompt('Cuantas unidades desea comprar?'))
    console.log('quiere comprar ' + unidadesCompradas)
        return unidadesCompradas
}

function actualizarstock(stocktipo, unidades) {
    console.log('usuario compró : ' + unidades + ' unidades')
    stockNuevo = stocktipo-unidades
    // stockVacuna = stockNuevo
        return stockNuevo
}

function actualizarUnidades(unicompradas) {
    unidadesTotal = unidadesTotal + unicompradas
        return unidadesTotal
}
function sumarPrecio (unidades, precio) {
    precioCompra = unidades * precio
    precioTotal = precioCompra + precioTotal
        return precioTotal
}
function stockInsuficiente(stock) {
    alert('No contamos con la cantidad que indica.\nSolo contamos con ' + stock + ' unidades.')
    console.log('El usuario eligió mas que el stock actual')
    
}
function resumenCompra(unidades, preciototal) {
    console.log('Resumen compra total : \n - - - - - - - - - \n'+
    'Burgers Vacuna - ' + unidades + ' unidades: $' + preciototal)
}



let cliente = prompt('Ingrese nombre:')
let consultaCompra = prompt('Quiere realizar una compra?\nsi \nno')

while ( consultaCompra === 'si') {

    seleccionBurger = prompt('Seleccione el tipo de hamburguesa:\n1- Vacuna \n2- Pollo \n3- Vegana')
    
    

    switch (seleccionBurger) {
        case 'Vacuna':
            pedirCantidad(stockVacuna)
            if(unidadesCompradas<=stockVacuna) {
                actualizarstock(stockVacuna,unidadesCompradas)
                stockVacuna = stockNuevo
                actualizarUnidades(unidadesCompradas)
                sumarPrecio(unidadesCompradas,precioBurgerVacuna)
            }else{
                stockInsuficiente(stockVacuna)
            }

            break
        
        case 'Pollo':
            
            break
        
        case 'Vegana': 

            break
        
        default: alert('seleccionó un tipo de hamburgesa invalido')
        

    }

    // console.log('unidades compradas total ' + unidadesTotal)

    let pedirResumen = prompt('Desea ver el resumen de su compra?')
    if (pedirResumen === 'si') {
        resumenCompra(unidadesTotal, precioTotal)
        
    }else { 
        console.log('usuario no quiere ver el resumen')
    }

    consultaCompra = prompt('Desea seguir comprando?')
    

}



BACKUP DOMINGO
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
    // return unidadesCompradas
}

function actualizarstock(stocktipo) {
    console.log('usuario compró : ' + unidadesCompradas + ' unidades')
    stockNuevo = stocktipo - unidadesCompradas
    // stocktipo = stockNuevo
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
function resumenCompra(tipoburger,unidadestotales, preciototal) {
    console.log('Resumen compra total : \n - - - - - - - - - \n' +
        'Burgers ' + tipoburger + ' - ' + unidadestotales + ' unidades: $' + preciototal)
}
function mostrarResumen(params) {
    if(seleccionBurger==='Pollo'){
        resumenCompra(burgerPollo,unidadesTotal, precioTotal)
    }else if (seleccionBurger==='Vegana'){
        resumenCompra(burgerVegana,unidadesTotal, precioTotal)
    }else if (seleccionBurger==='Vacuna') {
        resumenCompra(burgerVacuna,unidadesTotal, precioTotal)
    }
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
                stockVacuna = stockNuevo
                actualizarUnidades()
                sumarPrecio(precioBurgerVacuna)
            } else {
                stockInsuficiente(stockVacuna)
            }

            break

        case 'Pollo':
            pedirCantidad(stockPollo)
            if (unidadesCompradas <= stockPollo) {
                actualizarstock(stockPollo)
                stockPollo = stockNuevo
                actualizarUnidades()
                sumarPrecio(precioBurgerPollo)
            } else {
                stockInsuficiente(stockPollo)
            }

            break

        case 'Vegana':

            break

        default: alert('seleccionó un tipo de hamburgesa invalido')
    }

    let pedirResumen = prompt('Desea ver el resumen de su compra?')
    if (pedirResumen === 'si') {
        mostrarResumen()
    } else {
        console.log('usuario no quiere ver el resumen')
    }

    consultaCompra = prompt('Desea seguir comprando?')
}

*/






