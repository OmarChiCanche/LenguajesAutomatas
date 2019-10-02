let mensaje ="correcaminos";
let newMensaje = mensaje.replace(/[^aeiou]/g,"*");/*la "g" sirve para reemplazar todos los que esten 
y ^ para negacion por eso solo reemplaza todos menos las vocales*/
console.log(newMensaje);

let mensaje2 =" el 30 de septiembre de 2019 se dio inicio a las 3 semanas";
let newMensaje2 = mensaje2.replace(/[a-z]{5,}/g,"*");/*la "g" sirve para reemplazar todos los que esten
y los corchetes con 5, es la longitud a reemplazar de 5 en adelante */
console.log(newMensaje2);

var parrafo = "\Tasunka universidad Omar Alexis perro gatos fantastico genial lluvioso\
Estado Unico Fruncir\
Tratamiento Tulancingo";
var expresion = /[A-Z][a-z]\b/gm; // buscar nombres Propios
result = parrafo.match(expresion);
console.log(result);

var expresion = /[A-Z][a-z]+/g; // buscar nombres Propios
result = parrafo.match(expresion);
console.log(result);

var expresion = /[A-Z][^aeiou][a-z]+/g; //Palabras que inicien con mayuscula seguido de una no vocal y 
result = parrafo.match(expresion);
console.log(result);
