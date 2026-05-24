console.log("JavaScript conectado");

let botones = document.querySelectorAll(".agregar");

console.log(botones);

botones.forEach(function(boton){

    boton.addEventListener("click", function(){

        let tarjeta = boton.closest(".card");

        let titulo =
        tarjeta.querySelector(".card-title").textContent;

        let precio =
        tarjeta.querySelector(".precio").textContent;

        let cantidad =
        tarjeta.querySelector(".cantidad").value;

        if(cantidad == "Cantidad"){  
    alert("Seleccione una cantidad");
    return;
}

        console.log("Producto:");
        console.log(titulo);

        console.log("Precio:");
        console.log(precio);

        console.log("Cantidad:");
        console.log(cantidad);
    });
});