const MARCA = "CASA DE CAMBIO JS"
const BIENVENIDA = ("¡Bienvenido a la " + MARCA + "!");

console.log(MARCA);

alert(MARCA);
let nombre = prompt("Ingrese su Nombre").toUpperCase();
let apellido = prompt("Ingrese su Apellido").toUpperCase();
let correo = prompt("Ingrese su Dirección de Correo Electrónico").toUpperCase();

let dolarCompra = 385;
let euroCompra = 384;
let realCompra = 40;

let dolarVenta = 389;
let euroVenta = 383;
let realVenta = 50;

let cantidadDivisaCompra = 0;

const IMPUESTO_PAIS = 0.30;
const IMPUESTO_GANANCIA = 0.45;

let inicio = 0;

function elegirOperacion() {

    let operacion = parseInt(prompt("¿Qué deseas hacer? (Ingresa el número de la opción que deseas realizar):" + "\n\n" + "1.- Consultar Precios" + "\n" + "2.- Comprar" + "\n" + "3.- Vender" + "\n" + "4.- Salir" + "\n"));

    switch (operacion) {
        case 1:

            console.log("¡Quieres Consultar el Precio de una divisa!");
            alert("¡Quieres Consultar el Precio de una divisa!");
            consultaGeneral();
            volver();

            break;
        case 2:

            consulta("Compra");
            compra();
            volver();

            break;
        case 3:

            consulta("Venta");
            venta();
            volver();

            break;
        case 4:

            volver();

            break;
        default:
            console.log("Solo puedes elegir un número entre 1 y 4");
            alert("Solo puedes elegir un número entre 1 y 4");
            elegirOperacion();
            break;
    }
}
function consultaGeneral() {
    console.log("El precio de las Divisas para la Compra es: " + "\n" + ("Dólar = " + dolarCompra.toString() + " AR $ por dólar.") + "\n" + ("Euro = " + euroCompra.toString() + " AR $ por euro.") + "\n" + ("Real = " + realCompra.toString() + " AR $ por real.") + "\n\n" + "El precio de las Divisas para la Venta es: " + "\n" + ("Dólar = " + dolarVenta.toString() + " AR $ por dólar.") + "\n" + ("Euro = " + euroVenta.toString() + " AR $ por euro.") + "\n" + ("Real = " + realVenta.toString() + " AR $ por real.") + "\n");
    alert("El precio de las Divisas para la Compra es: " + "\n" + ("Dólar = " + dolarCompra.toString() + " AR $ por dólar.") + "\n" + ("Euro = " + euroCompra.toString() + " AR $ por euro.") + "\n" + ("Real = " + realCompra.toString() + " AR $ por real.") + "\n\n" + "El precio de las Divisas para la Venta es: " + "\n" + ("Dólar = " + dolarVenta.toString() + " AR $ por dólar.") + "\n" + ("Euro = " + euroVenta.toString() + " AR $ por euro.") + "\n" + ("Real = " + realVenta.toString() + " AR $ por real.") + "\n");
}
function consulta(nombreConsulta) {

    let dolarTasa = "";
    let euroTasa = "";
    let realTasa = "";
    if (nombreConsulta === "Compra") {

        dolarTasa = dolarCompra;
        euroTasa = euroCompra;
        realTasa = realCompra;
    } else {
        dolarTasa = dolarVenta;
        euroTasa = euroVenta;
        realTasa = realVenta;
    }

    console.log("El precio de las Divisas para la " + nombreConsulta + " es: " + "\n" + ("Dólar = " + dolarTasa.toString() + " AR $ por dólar.") + "\n" + ("Euro = " + euroTasa.toString() + " AR $ por euro.") + "\n" + ("Real = " + realTasa.toString() + " AR $ por real.") + "\n");
    alert("El precio de las Divisas para la " + nombreConsulta + " es: " + "\n" + ("Dólar = " + dolarTasa.toString() + " AR $ por dólar.") + "\n" + ("Euro = " + euroTasa.toString() + " AR $ por euro.") + "\n" + ("Real = " + realTasa.toString() + " AR $ por real.") + "\n");
}
function compra() {
    let seleccionDivisaCompra = parseInt(prompt("¿Qué tipo de Divisa deseas comprar? (Ingresa el número de la opción correspondiente):" + "\n\n" + "1.- Dólar" + "\n" + "2.- Euro" + "\n" + "3.- Real" + "\n" + "4.- Volver al Inicio" + "\n"));
    switch (seleccionDivisaCompra) {
        case 1:
            calcularCambioCompra("Dólares", dolarCompra);
            break;
        case 2:
            calcularCambioCompra("Euros", euroCompra);
            break;
        case 3:
            calcularCambioCompra("Reales", realCompra);
            break;
        case 4:
            break;
        default:
            console.log("Solo puedes elegir un número entre 1 y 4");
            alert("Solo puedes elegir un número entre 1 y 4");
            compra();
            break;
    }
}
function venta() {
    let seleccionDivisaVenta = parseInt(prompt("¿Qué tipo de Divisa deseas vender? (Ingresa el número de la opción correspondiente):" + "\n\n" + "1.- Dólar" + "\n" + "2.- Euro" + "\n" + "3.- Real" + "\n" + "4.- Volver al Inicio" + "\n"));
    switch (seleccionDivisaVenta) {
        case 1:
            calcularCambioVenta("Dólares", dolarVenta);
            break;
        case 2:
            calcularCambioVenta("Euros", euroVenta);
            break;
        case 3:
            calcularCambioVenta("Reales", realVenta);
            break;
        case 4:
            break;
        default:
            console.log("Solo puedes elegir un número entre 1 y 4");
            alert("Solo puedes elegir un número entre 1 y 4");
            compra();
            break;
    }
}
function calcularCambioCompra(nombreDivisa, tasaCambio) {
    do {
        cantidadDivisaCompra = prompt("Ingrese la cantidad expresada en números de la Divisa que deseas comprar (Puedes usar decimales):");
        if (isNaN(cantidadDivisaCompra)) {
            console.log("Solo puedes Ingresar un número");
            alert("Solo puedes Ingresar un número");
        }
    } while (isNaN(cantidadDivisaCompra));
    console.log("Quieres Comprar " + cantidadDivisaCompra + " " + nombreDivisa);
    alert("Quieres Comprar " + cantidadDivisaCompra + " " + nombreDivisa);
    let subTotalCompra = cantidadDivisaCompra * tasaCambio;
    console.log("El detalle de la operación es: \n" + "AR $ " + subTotalCompra.toString() + " + 30% de Impuesto País + 45% de Impuesto la Ganancia");
    alert("El detalle de la operación es: \n" + "AR $ " + subTotalCompra.toString() + " + 30% de Impuesto País + 45% de Impuesto la Ganancia");
    let subTotalPaisCompra = subTotalCompra * IMPUESTO_PAIS;
    let subTotalGananciaCompra = subTotalCompra * IMPUESTO_GANANCIA;
    let totalCompra = subTotalCompra + subTotalPaisCompra + subTotalGananciaCompra;
    console.log("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEl total de la operación es de AR $" + totalCompra.toString());
    alert("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEl total de la operación es de AR $" + totalCompra.toString());
    console.log("Gracias por preferir a " + MARCA);
    alert("Gracias por preferir a " + MARCA);
}
function calcularCambioVenta(nombreDivisa, tasaCambio) {
    do {
        cantidadDivisaVenta = parseFloat(prompt("Ingrese la cantidad expresada en números de la Divisa que deseas vender (Puedes usar decimales):"));
        if (isNaN(cantidadDivisaVenta)) {
            console.log("Solo puedes Ingresar un número");
            alert("Solo puedes Ingresar un número");
        }
    } while (isNaN(cantidadDivisaVenta));
    console.log("Quieres Vender " + cantidadDivisaVenta + " " + nombreDivisa);
    alert("Quieres Vender " + cantidadDivisaVenta + " " + nombreDivisa);
    let subTotalVenta = cantidadDivisaVenta * tasaCambio;
    console.log("El detalle de la operación es: \n" + "AR $ " + subTotalVenta.toString());
    alert("El detalle de la operación es: \n" + "AR $ " + subTotalVenta.toString());
    console.log("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEn total recibirás AR $" + subTotalVenta.toString());
    alert("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEn total recibirás AR $" + subTotalVenta.toString());
    console.log("Gracias por preferir a " + MARCA);
    alert("Gracias por preferir a " + MARCA);
}
function volver() {
    inicio = parseInt(prompt("¿Seguro quieres Salir? (Ingresa el número de la opción correspondiente): " + "\n\n" + (("1.- Volver al Inicio").toString()) + "\n" + (("2.- Salir\n".toString()))));
}
function salida() {
    console.log("Gracias por preferir a " + MARCA + ". Será para una próxima ocasión. ¡Hasta Luego!");
    alert("Gracias por preferir a " + MARCA + ". Será para una próxima ocasión. ¡Hasta Luego!");
}
if ((nombre !== "") && (apellido !== "") && (correo !== "")) {
    console.log(BIENVENIDA + ", " + nombre + " " + apellido);
    alert(BIENVENIDA + ", " + nombre + " " + apellido);
    console.log("En nuestra " + MARCA + ", " + "podrás realizar diferentes operaciones: " + "\n\n" + "1.- Consultar Precios" + "\n" + "2.- Comprar" + "\n" + "3.- Vender");
    alert("En nuestra " + MARCA + ", " + "podrás realizar diferentes operaciones: " + "\n\n" + "1.- Consultar Precios" + "\n" + "2.- Comprar" + "\n" + "3.- Vender");
    elegirOperacion();
    while (inicio !== 2) {
        elegirOperacion();
    }
    salida();
}
else {
    salida();
}