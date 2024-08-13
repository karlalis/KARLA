var dolares=new Array(5);
var btc=new Array(5);
var eth=new Array(5);
var x=0;//inicializando;
while (x<dolares.length)//comprobante
{
    dolares[x]=parseFloat(prompt("Ingrese la cantidad de dolares: "));
    btc[x]=dolares[x]/57,810;

while (x<dolares.length)
{
    dolares[x]=parseFloat(prompt("Ingrese la cantidad de dolares: "));
    btc[x]=dolares[x]/57.810;
    eth[x]=dolares[x]/3.062;
    x++; //actualizando 
    }
}
 

var j=0;//inicializar
document.write("<br>");
document.write("<br>");
document.write("Dolares------------------BTC-----------------------------ETH<br>")
document.write("<br>");
document.write("<br>")
document.write("<br>");
while(j<dolares.length)
{
document.write(dolares[j]+"-----------------------"+btc[j].toFixed(3)+"-----------------------"+eth[j].toFixed(3)+"<br>");
document.write("<br>");
document.write("<br>");


    j++;
}
document.write("<br>");
