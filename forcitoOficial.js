var edades=[10,18,60,27];
var suma=0, promedio=0;
var mayor=0, menor=0;
var opciones;


opciones=parseInt(prompt("Eliga la opción que desea imprimir: \n 1-Imprimir arreglo  \n 2-Imprimir la edad promedio \n 3-Visualizar el conteo"));
while(opciones<1 || opciones>3)
 {
     opciones=parseInt(prompt("Eliga la opción que desea imprimir: \n 1-Imprimir arreglo  \n 2-Imprimir la edad promedio \n 3-Visualizar el conteo"));
 }

 
if(opciones==1){

for (let index = 0; index < edades.length; index++) {
 if(edades[index]>=18)
 {
     mayor++;
 }

 else
 {
     menor++;
 }
 
}//fin for


document.write("La cantidad de edades menores a 18 son:   ",menor,"<br>")
document.write("La cantidad de edades mayores a 18 son:   ",mayor,"<br>")
}

else if(opciones==2){

promedio=suma/edades.length;
document.write("La edad promedio es:    ",promedio,"<br>");
document.write("Imprimiendo el contenido de edades <br>");
for (let index = 0; index < edades.length; index++) {
 document.writeln(edades[index],"-","<br>");
 
}
}

else (opciones==3)

suma=suma+edades[index]; 
document.write("Utilizando conteos");
for (let index = 0; index < edades.length; index++) {
 
 
}
