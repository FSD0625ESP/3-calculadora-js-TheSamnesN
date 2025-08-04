const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');

let operacion = '';

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
    return a / b;
}


botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const valor = boton.textContent;

    if (valor === 'C') {
      operacion = '';
      pantalla.value = '';
    } else if (valor === '=') {
      let resultado;
      if (operacion.includes('+')) {
        const [a, b] = operacion.split('+');
        resultado = add(Number(a), Number(b));
      } else if (operacion.includes('-')) {
        const [a, b] = operacion.split('-');
        resultado = substract(Number(a), Number(b));
      } else if (operacion.includes('*')) {
        const [a, b] = operacion.split('*');
        resultado = multiply(Number(a), Number(b));
      } else if (operacion.includes('/')) {
        const [a, b] = operacion.split('/');
        resultado = divide(Number(a), Number(b));
      }
      pantalla.value = resultado;
      operacion = '';
    } else {
      operacion += valor;
      pantalla.value = operacion;
    }
  });
});
