console.log("Sistema iniciado");

let carrito = [];

let botones =
document.querySelectorAll(".agregar");

let contenedorCarrito =
document.querySelector("#carrito");

let totalHTML =
document.querySelector("#total");

//Agregado de rutina whatsapp

let botonEnviar =
document.querySelector("#enviar");

//Agregado de rutina whatsapp

botones.forEach(function(boton){

    boton.addEventListener("click", function(){

        let tarjeta =
        boton.closest(".card");

        let nombre =
        tarjeta
        .querySelector(".card-title")
        .textContent;

        let precioHTML =
        tarjeta.querySelector(".precio");

        let precio =
        Number(
            precioHTML.dataset.precio
        );

        let cantidad =
        Number(
            tarjeta
            .querySelector(".cantidad")
            .value
        );

        if(isNaN(cantidad)){

            alert("Seleccione una cantidad");

            return;

        }

        let subtotal =
        precio * cantidad;

        console.log(
            nombre,
            precio,
            cantidad,
            "Subtotal:",
            subtotal
        );

        let productoExistente =
        carrito.find(function(producto){

            return producto.nombre == nombre;

        });

        if(productoExistente){

            productoExistente.cantidad =
            cantidad;

            productoExistente.subtotal =
            precio * cantidad;

        } else {

            let producto = {

                nombre: nombre,
                precio: precio,
                cantidad: cantidad,
                subtotal: subtotal

            };

            carrito.push(producto);

        }

        renderizarCarrito();

    });

});

function eliminarProducto(nombre){

    carrito =
    carrito.filter(function(producto){

        return producto.nombre != nombre;

    });

    renderizarCarrito();

}

//Agregado de rutina whatsapp
function enviarWhatsApp(){

    if(carrito.length == 0){

        alert("El carrito está vacío");

        return;

    }

    let mensaje =
    "Hola, quiero realizar el siguiente pedido:%0A%0A";

    carrito.forEach(function(producto){

        mensaje +=
        producto.nombre +
        " - Cantidad: " +
        producto.cantidad +
        " - Subtotal: $" +
        producto.subtotal.toFixed(2) +
        "%0A";

    });

    mensaje +=
    "%0ATotal: $" +
    totalHTML.textContent;

    mensaje +=
    "MIS DATOS:"%0A%0A
    "Nombre y Apellido:"%0A
    "Dirección:"%0A%0A
    "GRACIAS POR SU COMPRA!";

    let telefono =
    "5492984675179";

    let url =
    "https://wa.me/" +
    telefono +
    "?text=" +
    mensaje;

    window.open(url, "_blank");

}

//Agregado de rutina whatsapp


function renderizarCarrito(){

    contenedorCarrito.innerHTML = "";

    let totalGeneral = 0;

    if(carrito.length == 0){

        contenedorCarrito.innerHTML = `

        <p>
        No hay productos agregados.
        </p>

        `;

    }

    carrito.forEach(function(producto){

        totalGeneral =
        totalGeneral + producto.subtotal;

        contenedorCarrito.innerHTML += `

        <div class="border-bottom mb-2 pb-2">

            <h5>${producto.nombre}</h5>

            <p>
            Cantidad:
            ${producto.cantidad}
            </p>

            <p>
            Subtotal:
            $${producto.subtotal.toFixed(2)}
            </p>

            <button
            class="btn btn-danger btn-sm"
            onclick="eliminarProducto('${producto.nombre}')">

            Eliminar

            </button>

        </div>

        `;

    });

    totalHTML.textContent =
    totalGeneral.toFixed(2);

}

//Agregado de rutina whatsapp
botonEnviar.addEventListener("click", enviarWhatsApp);

//Agregado de rutina whatsapp
