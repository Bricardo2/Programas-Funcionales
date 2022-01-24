console.log("Primer Programa Funcional...");
const num = [10,20,30,40,50,60,70,1,9,11,15];
//programacion imperactiva 
for (var i=0; i<num.length;i++)
{
    console.log(num[i]);
}
//programacin funcional
num.forEach(data => {
    console.log("Elemento",data);
});
num.forEach(function(data) {
    console.log("Elemento =>",data)
});
//enlistar loos elementos pares de los numeros
const pares = num.filter(data => {
 return data%2==0;
});
//elementos pares del vector sin necesidad de retornar
console.log ("Elementos pares del vector",pares)
const paresv2 = num.filter(data => data%2==0);
   console.log ("Elementos pares del vector",paresv2)

const arreglo =[1,2,3,4,5,6,7,8,9];
const impares=function getimpares (array){
 return array.filter(data => {
     return (data%2!=0);
 });
}
console.log("Impares del vector numeros:", impares(num));
console.log("Impares del vector numeros:", impares(arreglo));
//split
// se tiene un vector de cuidado. se pide imprimir cada cuidad
const cuidades = ["Esmeraldas","Quito","Guayaquil","Portoviejo","Manabi"];
cuidades.forEach(data => console.log(data));
//se tiene un parrafo, cada palabra esta separada por un espacio
//en blanco. Se pide, Utilizando la funcion split, imprimir cada
// palabra del parrafo
const parrafo = "Bienvenido a la Pucese sede Esmeraldas";
function palabras(str) {
    str.split(" ").forEach (data => console.log(data));
}
palabras(parrafo);