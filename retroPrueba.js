
var si, i, d, sf, n, uniform_discount, total_salary = 0, total_discount1 = 0, total_uniform_discount = 0, total_gerentes = 0, total_otros = 0;
var num_empleados = prompt('Digite el número de empleados', '');

document.write('<b>PLANILLA DE EMPLEADOS</b><br><br>');
document.write('<table border=1>');
document.write('<tr><td>Número empleado</td><td>Nombre empleado</td><td>Salario inicial</td><td>Descuento</td><td>Descuento por uniforme</td><td>Salario final</td></tr>');

for (i = 1; i <= num_empleados; i++) {
    n = prompt('Digite el nombre del empleado número ' + i + '');
    do {
        si = parseFloat(prompt('Digite el salario inicial del empleado (mínimo $356)', ''));
    } while (si < 356);

    d = si * 0.05;
    total_discount1 += d;

    if (n.toLowerCase().includes("gerente")) {
        uniform_discount = 50;
        total_gerentes++;
    } else {
        uniform_discount = 25;
        total_otros++;
    }

    total_uniform_discount += uniform_discount;

    sf = si - d - uniform_discount;
    total_salary += sf;

    document.write('<tr><td>' + i + '</td><td>' + n + '</td><td>$' + si.toFixed(2) + '</td><td>$' + d.toFixed(2) + '</td><td>$' + uniform_discount.toFixed(2) + '</td><td>$' + sf.toFixed(2) + '</td></tr>');
}

document.write('</table>');
document.write('<br><b>En conclusion:</b><br>');
document.write('Monto total pagado en concepto de salarios: $' + total_salary.toFixed(2) + '<br>');
document.write('Monto total en concepto de descuentos: $' + total_discount1.toFixed(2) + '<br>');
document.write('Monto total en concepto de descuentos por uniforme: $' + total_uniform_discount.toFixed(2) + '<br>');
document.write('Cantidad de gerentes: ' + total_gerentes + '<br>');
document.write('Cantidad de otros empleados: ' + total_otros + '<br>');
