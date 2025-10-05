// validadorEmail.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function esEmailValido(email) {
  // Regex simple, admite la mayoría de emails comunes
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

rl.question('Introduce un email para validar: ', (input) => {
  if (esEmailValido(input.trim())) {
    console.log('✅ El email parece válido.');
  } else {
    console.log('❌ Email inválido.');
  }
  rl.close();
});
