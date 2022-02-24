
function Producto(nombreValor, stockValor, precioValor, descuentoValor, totalCompradas) {
    this.nombre = nombreValor;
    this.stock = stockValor;
    this.precio = precioValor;
    this.descuento = descuentoValor;
    this.totalCompradas = totalCompradas;
    this.unidadesCompradas = unidadesCompradas;

    this.venta = function (unidadesCompradas) {
        this.pedirCantidad = function (unidadesCompradas) {
        this.unidadesCompradas = parseInt(prompt('Cuantas unidades desea comprar?'))
        console.log('quiere comprar ' + unidadesCompradas)
    }

    this.stock -= unidadesCompradas
        alert('se vendieron: ' + unidadesCompradas + 'unidades')
        console.log('El stock actual es' + this.stock)
    }
    this.ventaTotal = function(unidadesCompradas) {
        this.totalCompradas += unidadesCompradas
        alert('En total se vendieron: ' + unidadesCompradas + ' unidades de ' + this.nombre)
    }
}