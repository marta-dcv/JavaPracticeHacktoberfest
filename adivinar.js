const numeroSecreto = Math.floor(Math.random() * 100) + 1;

function adivinarNumero(intento) {
    if (intento === numeroSecreto) {
        return "¡Correcto! 🎉";
    } else if (intento < numeroSecreto) {
        return "Demasiado bajo ⬇️ ";
    } else {
        return "Demasiado alto ⬆️ ";  
    } 
}
   

console.log(adivinarNumero(50));