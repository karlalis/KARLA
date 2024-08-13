var estudiante=new Array(5);
let seccion;
//var tarjetas=new Array(5);
let tarjetas;
var fecha=new Array(5);
let costo=3;
var x=" ";
var j=0;

alert("Secciones");
estudiante=prompt("Ingrese sus Apellidos");
document.write("Alumno: "+estudiante+"<br>")

fecha=prompt("Ingrese la fecha de su compra");
document.write("fecha: "+fecha+"<br>")

seccion=parseInt(prompt("Elija su Seccion \n 1- DS3A \n 2- AC3C \n 3-APS3D"));
while(seccion<1 || seccion>3)
{
    seccion=parseInt(prompt("Elija su Seccion \n 1- DS3A \n AC3C \nAPS3D"));
    document.write("Su seccion es:"+seccion+"<br>")
}
while(j<=tarjetas.length)
{
tarjetas[j]=parseFloat(prompt("Ingrese la cantidad de tarjetas a comprar: "));
while(tarjetas[j]<=20){
    tarjetas[j]
    document.write("La cantidad de tarjetas compradas es: "+tarjetas+"<br>")

j++;
}
}
if (seccion==1) 
{
    document.write("Alumno: "+estudiante+"<br>")
    document.write("fecha: "+fecha+"<br>")
    document.write("Su seccion es: DS3A"+"<br>")
    document.write("Costo"+(costo)+"<br>")


}

else if (seccion==2) 
{
    document.write("Alumno: "+estudiante+"<br>")
    document.write("fecha: "+fecha+"<br>")
    document.write("Su seccion es: AC3C"+"<br>")
    document.write("Costo"+(costo)+"<br>")

}

else if (seccion==3) 
{
    document.write("Alumno: "+estudiante+"<br>")
    document.write("fecha: "+fecha+"<br>")
    document.write("Su seccion es: APS3D"+"<br>")
    document.write("Costo"+(costo)+"<br>")

}






/*while (x==estudiante.length)
{
    estudiante[x]=parseFloat(prompt("Ingrese su apellido"))
}*/