//declarando variable
let servicio, forma, prefe, costo;
//captura de datos
alert ("los servicios disponibles");
servicio=parseInt(prompt("ingrese \n 1-para alisado\n 2-uñas\n 3-tinte \n 4-corte de cabello \n 5-pestañas pelo a pelo"));
while(servicio<1 || servicio>5)
{
servicio=parseInt(prompt("ingrese \n 1-para alisado\n 2-uñas\n 3-tinte \n 4-corte de cabello \n 5-pestañas pelo a pelo"));
}

forma=parseInt(prompt("ingrese \n 1-credito\n 2-efectivo"));
while(forma<1 || forma>2 )
{
forma=parseInt(prompt("ingrese \n 1-credito\n 2-efectivo"));
}


prefe=parseInt(prompt("¿Es cliente frecuente? \n 1-si\n 2-no"));
while(prefe<1 || prefe>2)
{
prefe=parseInt(prompt("¿Es cliente frecuente? \n 3-si\n 4-no"));
}
//procesos
switch(servicio)
{
case 1:
{
costo=50;
break;
}
case 2:
{
costo=35;
break;
}

case 3:
{
    costo=25;
    break;
}
case 4:costo
{
    coto=5;
    break;
}
case 5:
{
costo=20;
break;
}  default:
//fin swich
}
if(forma==1 && servicio==1)
{
document.write(" Usted se hizo un alisado <br>")
document.write(" Usted ha cancelado con tarjeta de credito <br>")
document.write(" el costo inicial del servicio es de "+costo+" <br>")
document.write(" se le hara un recargo del 10%"+ "<br>")
document.write(" el pago total sera de " +(costo*1.10.toFixed(2)))
}
else if (forma==2 && servicio==1)

{

document.write(" Adquirio el servicio de un alisado <br>")
document.write(" Usted ha cancelado con efectivo <br>")
document.write(" el costo inicial del servicio es de "+(costo.toFixed(2)))+("<br>")

document.write(" el pago total sera de " +costo)
}

if(prefe==1 && servicio==1)
{

document.write("<br>"+"por ser cliente precuente recibes un descuento del 25% "+"<br>")

document.write(" el pago final sera de " + (costo-1.25).toFixed(2) + "<br>")
}
else if (prefe==2 && servicio==1)

{

document.write("<br>","Gracias por visitarnos "+"<br>")

document.write("Te esperamos muy pronto nuevamente, recuerda que por ser cliente precuente obtienes descuentos en todos nuestros servicios"+"<br>")

}





if(forma==1 && servicio==2)
{
document.write(" Usted se hizo las uñas <br>")
document.write(" Usted ha cancelado con tarjeta de credito <br>")
document.write(" el costo inicial del servicio es de "+costo+" <br>")
document.write(" se le hara un recargo del 10%"+ "<br>")
document.write(" el pago total sera de " +(costo*1.10))
}
else if (forma==2 && servicio==2)

{

document.write(" Usted se hizo las uñas <br>")
document.write(" Usted ha cancelado con efectivo <br>")
document.write(" el costo inicial del servicio es de "+costo+" <br>")
document.write(" el pago total sera de " +costo)
}


if(prefe==1 && servicio==2)
{

document.write("<br>"+"por ser cliente precuente recibes un descuento del 25% "+"<br>")

document.write(" el pago final sera de " + (costo-1.25).toFixed(2) + "<br>")
}
else if (prefe==2 && servicio==2)

{

document.write("<br>","Gracias por visitarnos "+"<br>")

document.write("Te esperamos muy pronto nuevamente, recuerda que por ser cliente precuente obtienes descuentos en todos nuestros servicios"+"<br>")

}










if(forma==1 && servicio==3)
{
document.write(" Usted se realizo un tinte en el cabello <br>")
document.write(" Usted ha cancelado con tarjeta de credito <br>")
document.write(" el costo inicial del servicio es de "+costo+" <br>")
document.write(" se le hara un recargo del 10%"+ "<br>")
document.write(" el pago total sera de " +(costo*1.10))
}
else if (forma==2 && servicio==3)

{

document.write(" Usted se realizo un tinte en el cabello <br>")
document.write(" Usted ha cancelado con efectivo <br>")
document.write(" el costo inicial del servicio es de "+costo+" <br>")
document.write(" el pago total sera de " +costo)
}

if(prefe==1 && servicio==3)
{

document.write("<br>"+"por ser cliente precuente recibes un descuento del 25% " + "<br>")

document.write(" el pago final sera de " + (costo-1.25).toFixed(2) + "<br>")
}
else if (prefe==2 && servicio==3)

{

document.write("<br>","Gracias por visitarnos "+"<br>")

document.write("Te esperamos muy pronto nuevamente, recuerda que por ser cliente precuente obtienes descuentos en todos nuestros servicios"+"<br>")

}






if(forma==1 && servicio==4)
{
document.write(" Usted se realizo un corte de cabello <br>")
document.write(" Usted ha cancelado con tarjeta de credito <br>")
document.write(" el costo inicial del servicio es de "+costo+" <br>")
document.write(" se le hara un recargo del 10%" + "<br>")
document.write(" el pago total sera de " +(costo*1.10))
}
else if (forma==2 && servicio==4)

{

document.write(" Usted se realizo un corte de cabello <br>")
document.write(" Usted ha cancelado con efectivo <br>")
document.write(" el costo inicial del servicio es de "+costo+" <br>")
document.write(" el pago total sera de " +costo)
}


if(prefe==1 && servicio==4)
{

document.write("<br>"+"por ser cliente precuente recibes un descuento del 25% "+"<br>")

document.write(" el pago final sera de " + (costo-1.25).toFixed(2) + "<br>")
}
else if (prefe==2 && servicio==4)

{

document.write("<br>","Gracias por visitarnos "+"<br>")

document.write("Te esperamos muy pronto nuevamente, recuerda que por ser cliente precuente obtienes descuentos en todos nuestros servicios"+"<br>")

}







if(forma==1 && servicio==5)
{
document.write(" Usted adquirio un set de pestañas pelo a pelo <br>")
document.write(" Usted ha cancelado con tarjeta de credito <br>")
document.write(" el costo inicial del servicio es de "+costo+" <br>")
document.write(" se le hara un recargo del 10%" + "<br>")
document.write(" el pago total sera de " +(costo*1.10))
}
else if (forma==2 && servicio==5)

{

document.write(" Usted adquirio un set de pestañas pelo a pelo  <br>")
document.write(" Usted ha cancelado con efectivo <br>")
document.write(" el costo inicial del servicio es de "+costo+" <br>")
document.write(" el pago total sera de " +costo)
}


if(prefe==1 && servicio==5)
{

document.write("<br>"+"por ser cliente precuente recibes un descuento del 25% " + "<br>")

document.write(" el pago final sera de " + (costo-1.25).toFixed(2) + "<br>")
}
else if (prefe==2 && servicio==5)

{

document.write("<br>","Gracias por visitarnos "+"<br>")

document.write("Te esperamos muy pronto nuevamente, recuerda que por ser cliente precuente obtienes descuentos en todos nuestros servicios"+"<br>")

}