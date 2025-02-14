 /* En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%... 
Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos. 
Ej. Costos varios artículos: 10, 20, 14, 6 y 4 
La salida requerida presenta el siguiente formato: 
La ganancia será de Bs.27
**/

import Cl_bodega from "./Cl_bodega.js";
import Cl_articulos from "./Cl_articulos.js";

let arti1 = new Cl_articulos(10);
let arti2 = new Cl_articulos(20);
let arti3 = new Cl_articulos(14);
let arti4 = new Cl_articulos(6);
let arti5 = new Cl_articulos(4);

let bodega = new Cl_bodega();

bodega.procesarArticulo(arti1); 
bodega.procesarArticulo(arti2); 
bodega.procesarArticulo(arti3); 
bodega.procesarArticulo(arti4); 
bodega.procesarArticulo(arti5);

let salida = document.getElementById("Salida");
salida.innerHTML=`Resultados
<p>La ganancia sera de Bs. ${bodega.totalGanancia()}</p>`

