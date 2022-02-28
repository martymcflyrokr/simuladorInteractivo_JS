//VARIABLES GLOBALES
let seleccionBur
let totaltodalacompra = 0
let verResumen

//CLASE CONSTRUCTORA
class Producto {
    constructor(elnombre, elstock, elprecio, lasunidades, lasunidadestotales, elpreciodelaventa, elpreciodelaventatotal) {
        this.elnombre = elnombre.toUpperCase();
        this.elstock = elstock
        this.elprecio = elprecio
        this.lasunidades = lasunidades
        this.lasunidadestotales = lasunidadestotales
        this.elpreciodelaventa = elpreciodelaventa
        this.elpreciodelaventatotal = elpreciodelaventatotal
    }

    pedirUnidades() {
        this.lasunidades = parseInt(prompt('Ingrese la cantidad que desea comprar \nEl stock actual es de ' + this.elstock))
        if (this.lasunidades <= this.elstock) {
            console.log('Usuario eligió ' + this.lasunidades + ' unidades tipo ' + this.elnombre + ': $' + this.valorVenta())
        }
        else {
            console.log('Usuario eligio mayor cantidad de la que disponemos. reintentar compra')
        }
        
    }

    stockActual() {
        if (this.lasunidades <= this.elstock) {
            this.elstock -= this.lasunidades
            console.log('El stock actual es: ' + this.elstock)
        }
        else {
            alert('La cantidad supera al stock. elija menos unidades.')
            console.log('Supera el stock')
        }
    }

    valorVenta() {
        if(this.lasunidades <= this.elstock) {
            this.elpreciodelaventa = this.elprecio * this.lasunidades
        }
        else{
            alert('Está superando la cantidad que disponemos. Ingrese menor cantidad.')
            this.pedirUnidades()
        }
        
        return this.elpreciodelaventa
    }

    ventaTotalPesos() {
        if(this.lasunidades <= this.elstock) {
            this.elpreciodelaventatotal += this.elpreciodelaventa 
        }
        else {
            console.log('no se suma el precio elegido por que supera el stock.')
        }
    }


    ventaTotalunidades() {
        if(this.lasunidades <= this.elstock) {
            this.lasunidadestotales += this.lasunidades
        }
        else {
            console.log ('no se suma el valo total por que supera el stock.')
        }
        
    }

    elStockEsInsuficiente() {
        if ((this.elstock < this.lasunidades) || (this.elstock < this.ventaTotalunidades)) {
            console.log('No hay stock suficiente. contamos con ' + this.elstock + ' unidades disponibles')
        } else {
            console.log('El stock es suficiente.')
        }
    }

    mostrarCompraTotal() {
        if(this.lasunidades <= this.elstock) {
            console.log('---------- \nCompra: \nBurgers ' + this.elnombre + ' - ' + this.lasunidadestotales + ' unidades - $' + this.elpreciodelaventatotal + '\n-------------')
        }
        else{
            console.log('Usuario eligió mas de lo que podia comprar.')
        }
        
    }
}

//FUNCIONES
function totalizarPesos() {
    totaltodalacompra = totaltodalacompra + producto1.ventaTotalPesos + producto2.ventaTotalPesos + producto3.ventaTotalPesos
}
function sumarTotalesCompras() {
    totaltodalacompra = producto1.elpreciodelaventatotal + producto2.elpreciodelaventatotal + producto3.elpreciodelaventatotal
    alert('Resumen compra total : \n - - - - - - - - - \n' +
        '\nCliente - ' + nombreUser.toUpperCase() +
        '\nBurgers Carne - ' + producto1.lasunidadestotales + ' unidades: $' + producto1.elpreciodelaventatotal +
        '\nBurgers Pollo - ' + producto2.lasunidadestotales + ' unidades: $' + producto2.elpreciodelaventatotal +
        '\nBurgers Vegan - ' + producto3.lasunidadestotales + ' unidades: $' + producto3.elpreciodelaventatotal +
        '\nPrecio Total: $' + totaltodalacompra)

    console.log('Resumen compra total : \n - - - - - - - - - \n' +
        '\nCliente - ' + nombreUser +
        '\nBurgers Carne - ' + producto1.lasunidadestotales + ' unidades: $' + producto1.elpreciodelaventatotal +
        '\nBurgers Pollo - ' + producto2.lasunidadestotales + ' unidades: $' + producto2.elpreciodelaventatotal +
        '\nBurgers Vegan - ' + producto3.lasunidadestotales + ' unidades: $' + producto3.elpreciodelaventatotal +
        '\nPrecio Total: $' + totaltodalacompra)
}

//OBJETOS
const producto1 = new Producto('CARNE', 10, 500, 0, 0, 0, 0)
const producto2 = new Producto('POLLO', 20, 400, 0, 0, 0, 0)
const producto3 = new Producto('VEGAN', 15, 450, 0, 0, 0, 0)


//ARRAY CON OBJETOS
const listaProdu = []
listaProdu.push(producto1)
listaProdu.push(producto2)
listaProdu.push(producto3)

//Ejecución
let nombreUser = prompt('Ingrese su nombre')
let quiereComprar = prompt('Hola ' + nombreUser.toUpperCase() + '\n¿Quiere realizar una compra?\nSi \nNo ')

while (quiereComprar.toUpperCase() === 'SI') {
    
    seleccionBur = prompt('Seleccione el tipo de hamburguesa por numero:\n1- Carne \n2- Pollo \n3- Vegan')
    switch (seleccionBur) {
        case "1":
            producto1.pedirUnidades(producto1.lasunidades)
            producto1.stockActual()
            producto1.ventaTotalPesos()
            producto1.ventaTotalunidades()
            producto1.mostrarCompraTotal()
            break
        case "2":
            producto2.pedirUnidades(producto2.lasunidades)
            producto2.stockActual()
            producto2.ventaTotalPesos()
            producto2.ventaTotalunidades()
            producto2.mostrarCompraTotal()
            break
        case "3":
            producto3.pedirUnidades(producto3.lasunidades)
            producto3.stockActual()
            producto3.ventaTotalPesos()
            producto3.ventaTotalunidades()
            producto3.mostrarCompraTotal()

        default: alert('seleccionó un tipo de hamburgesa invalido')
    }

    verResumen = prompt('¿Quiere ver el resumen de su carrito?')
    if (verResumen.toUpperCase() === 'SI') {
        sumarTotalesCompras()
    } else {
        console.log('User no quiere ver el resumen')
    }
    
    quiereComprar = prompt('¿Quiere agregar mas productos al carrito?')
}