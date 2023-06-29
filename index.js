//Ejercicio 1
function determinarParidad(numero) {
    if (numero % 2 == 0) {
      console.log(numero + ' es un número par');
    } else { console.log(numero + ' es un número impar');
    }
  }
  determinarParidad(3);  
  determinarParidad(6); 

// ejercicio 2
function determinarNumeroMayor(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + ' es mayor que ' + num2 );
    } else if (num2 > num1) {
      console.log(num2 + ' es mayor que ' + num1 );
    } else {
      console.log('Los números ' + num1 + ' y ' + num2 + ' son iguales');
    }
  }
  determinarNumeroMayor(9, 2);  
  determinarNumeroMayor(1, 5);   
  determinarNumeroMayor(6, 6);   

// ejercicio 3
function determinarMultiploDeCinco(numero) {
    if (numero % 5 == 0) {
      console.log(numero + ' es múltiplo de 5');
    } else {
      console.log(numero + ' no es múltiplo de 5');
    }
  }
  determinarMultiploDeCinco(20); 
  determinarMultiploDeCinco(9);   
  determinarMultiploDeCinco(15);  

// ejercicio 4
function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }
  imprimirNumerosHasta(5);
  imprimirNumerosHasta(10);

// ejercicio 5
function imprimirPalabraNVeces(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
    }
  }
  imprimirPalabraNVeces('Domingo', 6);
  imprimirPalabraNVeces('Feriado', 2);

// ejercicio 6
function imprimirValoresArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  const miArray = [1, 2, 3, 4, 5];
  imprimirValoresArray(miArray);
  
  const otroArray = ['Lunes', 'Martes', 'Miercoles'];
  imprimirValoresArray(otroArray);
 

// ejercicio 7
function imprimirValoresExceptoQuinto(array) {
    for (let i = 0; i < array.length; i++) {
      if (i != 4) {
        console.log(array[i]);
      }
    }
  }
  const miArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  imprimirValoresExceptoQuinto(miArray2); 

// ejercicio 8
function imprimirMultiplicacionArray(array, numero) {
    for (let i = 0; i < array.length; i++) {
      const resultado = array[i] * numero;
      console.log(resultado);
    }
  }
  const miArray3 = [1, 2, 3, 4, 5];
  imprimirMultiplicacionArray(miArray3, 2);
  
  const otroArray3 = [0, 10, 20, 30];
  imprimirMultiplicacionArray(otroArray3, 5);