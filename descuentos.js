/*const precioOriginal = 120;

const descuento = 18;

const porcentajeConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajeConDescuento) / 100;
*/

/*console.log({
    precioOriginal,
    descuento,
    porcentajeConDescuento,
    precioConDescuento
});*/


function descuentoF(precioOr, descuento){
    const porcentajeConDescuento = 100 - descuento;

    const precioConDescuento = (precioOr * porcentajeConDescuento) / 100;
    return precioConDescuento;
}


/*const cupones = [
    "desc-uno-ftda",
    "desc-dos-ftda",
    "desc-tres-ftda"
];*/

function calcularPrecio(){
    const input = document.getElementById("InputPrecio");
    const value = input.value;

    const input2 = document.getElementById("InputCuponDesc");
    const value2 = input2.value;

    var descuento;

   // var cupon1 = "desc-uno-ftda";
    //var cupon2 = "desc-dos-ftda";
    //var cupon3 = "desc-tres-ftda";
    /*switch (value2) {
        case value2 === "desc-uno-ftda": 
            descuento = 15;
            break;
        case value2 === "desc-dos-ftda": 
            descuento = 25;
            break
        case value2 === "desc-tres-ftda":
            descuento = 35
            break;
            default:
                alert("Cupon invalido");
                break;
    }*/


    if (value2 == "desc-uno-ftda") {
        descuento = 15;
    } else if (value2 == "desc-dos-ftda") {
        descuento = 25;
    } else if (value2 == "desc-tres-ftda") {
        descuento = 35;
    }

    const precioNeto = descuentoF(value, descuento);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioNeto;
};


/*function calcularPrecio(){
    const input = document.getElementById("InputPrecio");
    const value = input.value;

    const input2 = document.getElementById("InputDesc");
    const value2 = input2.value;

    const precioNeto = descuento(value, value2);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioNeto;

}*/