
	const productos = ["Mascara", "Poncho", "Sarapes", "Mueganos"];
	const precios = [33, 169, 36, 20];
	const stock = [5, 2, 2, 6];
	const precioTransporte = [6, 12, 20, "gratis"];
	const IVA = 0.16;
	let uniUser;

//JAVASCRIPT A EJECUTARSE UNA VEZ CARGADA LA PAGINA:
	window.onload = function(){
		//Se cargan los productos dentro del HTML de forna dinamica haciendo uso de los datos de la base de datos, como si de un PHP se tratase:
		const DIVS = document.getElementsByName("DIVS");
		for (i in productos){
			DIVS[i].innerHTML = '<h3 class="product__title" id="pro'+i+'">' +productos[i]+ '</h3> <span class="product__price "id="pre'+i+'">$' +precios[i]+ '</span> </b><div class="stock">Hay en stock <p id="uni'+i+'">' +stock[i]+ '</p> unidades<p>¿Cuantas quiere?: <input class="uniBien" type="number" id="uniUser'+i+'" name="uniUser" value="0" size="4" /></p></div>';
		}
		//Botones que llevaran a cabo la ejecucion de determinadas secuencias de codigo JavaScript:
		document.getElementById("botonTotal").onclick = validaLasUnidades;

	}



//FUNCION DE VALIDACION DE UNIDADES:
	function validaLasUnidades(elEvento) {
		let todoBien = true;
		 uniUser = document.getElementsByName("uniUser");

		for (i in productos){
			if ( uniUser[i].value == "" || uniUser[i].value > stock[i] || uniUser[i].value < 0 ){
				todoBien = false;
				uniUser[i].className = "uniMal";
				return;
			}
			else{
				todoBien = true;
				uniUser[i].className = "uniBien";
			}
		}
		//Si no ha habido ni un solo error, se ejecuta la siguiente funcion que se encarga de cargar el carro de la compra:
		if (todoBien){
			calculaElTotal();
		}
	}


//FUNCION QUE MUSTRA EL CARRO DE LA COMPRA:
	function calculaElTotal(elEvento) {
		//Añade el encabezado de la tabla
		document.getElementById("tablaTotal").innerHTML = '<tr><td class="pro"><b>Producto</b></td><td class="uni"><b>Unidades</b></td><td class="preUni"><b>Precio Unidad</b></td><td class="preTotal"><b>Precio Total</b></td></tr>';
		//Inicializacion de las variables para esta funcion:
		let carroTotal = 0;
		let numProductos = 0;
		//Muestra el carrito de la compra
		for (i in productos){
			let tablaTotal = document.getElementById("tablaTotal").innerHTML;
			let preTotal = 0;
			//Cuenta el numero de productos para saber cuanto costara el transporte
			if (uniUser[i].value != 0){
				numProductos++;
			}
			if (uniUser[i].value != 0){
				//Calcula el totalUnidades y rellena el carro de la compra
				preTotal = precios[i] * uniUser[i].value;
				carroTotal = carroTotal + preTotal;
				document.getElementById("tablaTotal").innerHTML = tablaTotal + '<tr class="proCarrito"><td>' +productos[i]+ '</td><td>' +uniUser[i].value+ '</td><td>' +precios[i]+ '</td><td id="preTotal' +i+'" name="preTotal">' +preTotal+ '</td></tr>';
			}
		}
		//Se calcula el transporte a pagar segun la cantidad de productos comprados:
		let precioTransporteAPagar;
		if (numProductos <= 2){
			precioTransporteAPagar = precioTransporte[0];
		}
		else if (numProductos <= 3){
			precioTransporteAPagar = precioTransporte[1];
		}
		else if (numProductos <= 4){
			precioTransporteAPagar = precioTransporte[2];
		}
		else if (numProductos >= 5){
			precioTransporteAPagar = precioTransporte[3];
		}
		//Se sacan las cuentas del transporte (si lo hubiese), del iva y el total:
		const totalTransporte = precioTransporteAPagar;
		if(totalTransporte == "gratis"){
			var totalIVA = (carroTotal * IVA);
			var totalAPagar = carroTotal + totalIVA;
		}
		else{
			var totalIVA = ((carroTotal + totalTransporte) * IVA);
			var totalAPagar = carroTotal + totalTransporte + totalIVA;
		}
		//Limitar a 2 los decimales a mostrar del IVA:
		totalIVA=totalIVA*100;
		totalIVA=Math.floor(totalIVA);
		totalIVA=totalIVA/100;
		//Limitar a 2 los decimales a mostrar del TOTAL A PAGAR:
		totalAPagar=totalAPagar*100;
		totalAPagar=Math.floor(totalAPagar);
		totalAPagar=totalAPagar/100;

		//Se añade a la tabla el TOTAL que suma el carrito:
		tablaTotal = document.getElementById("tablaTotal").innerHTML;
		document.getElementById("tablaTotal").innerHTML = tablaTotal + '<tr><td> </td> <td></td><td class="preUni"><b>Transporte: </b></td><td class="preTotal"><b>' +totalTransporte+ '</b></td></tr>' + '<tr><td> </td> <td></td><td class="preUni"><b>IVA ('+(IVA*100)+'%): </b></td><td class="preTotal"><b>' +totalIVA+ '</b></td></tr>' + '<tr><td> </td> <td></td><td class="preUni"><b>Total: </b></td><td class="preTotal" id="totalAPagar"><b>$' +totalAPagar+ '</b></td></tr>';
	}

function reset(){
	document.getElementById('form').reset();
}
