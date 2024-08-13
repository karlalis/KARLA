
			var si, i, d, sf, n;
			var descuento;
			var salarioTotal = 0;
			var totalDescuento1 = 0;
			var totalDescuento = 0; 
			var total_gerentes = 0;
			var total_otros = 0;
			var num_empleados = prompt('Digite el número de obrero', '');
	
			document.write('<b>PLANILLA DE EMPLEADOS</b><br><br>');
			document.write('<table border=1>');
			document.write('<tr><td>Número Obrero</td><td>Nombre obrero</td><td>Salario inicial</td><td>Descuento</td><td>uniforme</td><td>Salario final</td></tr>');
	
			for (i = 1; i <= num_empleados; i++) {
				n = prompt('Digite el nombre del Obrero numero ' + i + '');
				do {
					si = parseFloat(prompt('Digite el salario inicial del obrero (mínimo $356)', ''));
				} while (si < 356);
	
				d = si * 0.05;
				totalDescuento1 += d;
	
				if (n.toLowerCase().includes("gerente")) {
					descuento = 50;
					total_gerentes++;
				} else {
					descuento = 25;
					total_otros++;
				}
	
				totalDescuento += descuento;
	
				sf = si - d - descuento;
				salarioTotal += sf;
	
				document.write('<tr><td>' + i + '</td><td>' + n + '</td><td>$' + si.toFixed(2) + '</td><td>$' + d.toFixed(2) + '</td><td>$' + descuento.toFixed(2) + '</td><td>$' + sf.toFixed(2) + '</td></tr>');
			}
	
			document.write('</table>');
			document.write('<br><b>En conclusión:</b><br>');
			document.write('el monto total de salarios: $ ' + salarioTotal.toFixed(2) + '<br>');
			document.write('el monto total de descuentos: $' + totalDescuento1.toFixed(2) + '<br>');
			document.write('el monto total descuentos uniforme: $' + totalDescuento.toFixed(2) + '<br>');
			document.write('cantidad de gerentes: ' + total_gerentes + '<br>');
			document.write('cantidad de otros obreros: ' + total_otros + '<br>');
		