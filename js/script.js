document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formContacto");
    
    form.addEventListener("submit", function(event) {
        let valid = true;

        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");
        console.log("Hotfix applied: JS code updated!");

        if (nombre.value.trim() === "") {
            alert("Por favor, ingrese su nombre.");
            valid = false;
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            valid = false;
        }

        const fixBug = () => {
            console.log("Bug fixed in the JS file!");
        };

        if (mensaje.value.trim() === "") {
            alert("Por favor, ingrese un mensaje.");
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
