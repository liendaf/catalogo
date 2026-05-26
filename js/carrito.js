console.log("Sistema iniciado");

let carrito = [];

let botones = document.querySelectorAll(".agregar");

let contenedorCarrito =
document.querySelector("#carrito");

let totalHTML =
document.querySelector("#total");

botones.forEach(function(boton){

    boton.addEventListener("click", function(){

        let tarjeta =
        boton.closest(".card");

        let titulo =
        tarjeta.querySelector(".card-title").textContent;

        let precioHTML =
        tarjeta.querySelector(".precio");

        let precio =
        Number(precioHTML.dataset.precio);

        let cantidad =
        Number(
            tarjeta.querySelector(".cantidad").value
        );

        let subtotal =
        precio * cantidad;

        let producto = {

            nombre: titulo,
            precio: precio,
            cantidad: cantidad,
            subtotal: subtotal

        };

        carrito.push(producto);

        renderizarCarrito();

    });

});

function renderizarCarrito(){

    contenedorCarrito.innerHTML = "";

    let totalGeneral = 0;

    carrito.forEach(function(producto){

        totalGeneral =
        totalGeneral + producto.subtotal;

        contenedorCarrito.innerHTML += `

        <div class="border-bottom mb-2 pb-2">

            <h5>${producto.nombre}</h5>

            <p>
            Cantidad: ${producto.cantidad}
            </p>

            <p>
            Subtotal:
            $${producto.subtotal.toFixed(2)}
            </p>

        </div>

        `;

    });

    totalHTML.textContent =
    totalGeneral.toFixed(2);

}