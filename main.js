//Calculador de numeros primos, factoriales y sumas

const Calculadora = {
    // Método para verificar si un número es primo
    esPrimo: function(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    },

    // Método para calcular los números primos hasta un límite
    numerosPrimos: function(limite) {
        let numeros = Array.from({length: limite - 1}, (_, i) => i + 2);
        let primos = numeros.filter(this.esPrimo);
        return primos;
    },

    // Método para calcular el factorial de un número
    factorial: function(num) {
        let numeros = Array.from({length: num}, (_, i) => i + 1);
        let resultado = numeros.reduce((acc, val) => acc * val, 1);
        return resultado;
    },

    // Método para calcular la suma de una serie de números
    suma: function(numeros) {
        let resultado = numeros.reduce((acc, val) => acc + val, 0);
        return resultado;
    }
}

//Uso del objeto Calculadora
let opcion = prompt("Ingrese la opción que desea calcular: \n1. Números primos\n2. Factorial\n3. Suma");
switch(opcion) {
    case "1":
        let limite = prompt("Ingrese el límite para calcular los números primos: ");
        let primos = Calculadora.numerosPrimos(limite);
        console.log("Números primos hasta " + limite + ": " + primos);
        break;
    case "2":
        let numFactorial = prompt("Ingrese el número para calcular su factorial: ");
        let resultadoFactorial = Calculadora.factorial(numFactorial);
        console.log("Factorial de " + numFactorial + ": " + resultadoFactorial);
        break;
    case "3":
        let numerosStr = prompt("Ingrese los números separados por comas para calcular su suma: ");
        let numeros = numerosStr.split(",").map(Number);
        let resultadoSuma = Calculadora.suma(numeros);
        console.log("Suma de los números [" + numeros + "]: " + resultadoSuma);
        break;
    default:
        alert("Opción no válida");
}
