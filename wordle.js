const palabras = [
    "perro", "gato", "coche", "luzco", "silla", "tabla", "canto", 
    "flaco", "verde", "dardo", "plaza", "lugar", "banco", "fuego", "reloj"
];


const palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
const intentosMax = 6;

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let intentos = 0;

function pedirIntento() {
    if (intentos >= intentosMax) {
        console.log(`Se acabaron los intentos. La palabra era: ${palabraSecreta}`);
        readline.close();
        return;
    }

    readline.question("Ingresa tu palabra de 5 letras: ", (input) => {
        if (input.length !== 5) {
            console.log("La palabra debe tener exactamente 5 letras.");
            pedirIntento();
            return;
        }

        let resultado = "";
        for (let i = 0; i < 5; i++) {
            if (input[i] === palabraSecreta[i]) {
                resultado += "✅"; 
            } else if (palabraSecreta.includes(input[i])) {
                resultado += "⚠"; 
            } else {
                resultado += "❌"; 
            }
        }

        console.log(resultado);

        if (input === palabraSecreta) {
            console.log(`¡Ganaste! 🎉`);
            readline.close();
        } else {
            intentos++;
            pedirIntento();
        }
    });
} 

console.log(`¡Bienvenido a Wordle! Tienes ${intentosMax} intentos para adivinar la palabra de 5 letras.`);
pedirIntento();
