function generarContrasena(longitud = 8) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
                       "abcdefghijklmnopqrstuvwxyz" +
                       "0123456789" +
                       "!@#$%^&*()-_=+[]{};:,.<>?/";

    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres.charAt(indice);
    }

    return contraseña;
}

console.log("Contraseña generada:", generarContrasena(12));
