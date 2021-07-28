
function obtenerValores () {

    const idInputPrecio = document.getElementById("inputPrice");
    let precio = idInputPrecio.value;
    
    const idInputDescuento = document.getElementById("inputDiscount");
    let descuento = idInputDescuento.value;

    const priceOld = document.getElementById("priceOld");
    priceOld.innerHTML = precio;

    const couponsValue = document.getElementById("inputCupon");
    const valorCupon = coupons(couponsValue.value);

    const precioConDescuento = calcularPrecioConDescuento (precio, descuento, valorCupon)

    const newPrice = document.getElementById("newPrice");
    newPrice.innerHTML = precioConDescuento;

    const porcentajeDescuento = document.getElementById("PorcentajeDescuento");
    porcentajeDescuento.innerHTML = descuento;
}

function calcularPrecioConDescuento (precio, descuento, valorCupon) {

    if(valorCupon == "") {
        const porcentajeDelPrecioConDescuento = 100 - descuento;
        const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/100;
        return precioConDescuento;
    } else {
        const porcentajeDelPrecioConDescuento = 100 - valorCupon;
        const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/100;
        return precioConDescuento; 
    }
}

function coupons(cupon) {

    const coupons = [
        "batman",
        "superman",
        "acuaman"
    ];

    if(cupon === "batman") {
        descuentoCupon = 15;
    } else if (cupon === "superman") {
        descuentoCupon = 30;
    } else  if (cupon === "acuaman") {
        descuentoCupon = 30
    }

    return descuentoCupon;

}
