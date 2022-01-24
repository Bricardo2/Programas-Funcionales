//every Verifica que todos los elementos del array con la misma condicion
//si todos los elementos cumplen con la condicion, devuelve verdaderi si uno de ellos nola cumple devuelve falso

const numeros = [10,20,30,40,50];
//determinar todos los elementos del array de numeros son positivos
const soloPositivos = numeros.every(data => {
    return data >0;
});
const soloPositivosv2 = numeros.every (data => data>0);
console.log(soloPositivos);

//forEach- Every- Every
//Verficar si todos los elementos de una matriz son positivo
const matriz = [[1,2,3],[4,5,6],[7,8,9]];
matriz.forEach(function(data) {
    salida=(data.every(data => data>0))
})
console.log("Los numeros son: ", salida);