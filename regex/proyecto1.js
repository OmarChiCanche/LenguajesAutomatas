console.log("Ejercicio 1");
var parrafo ='estesuncomentarioLorem ipsuma doloa sia Mmea /*consectetua*/ \
/*felicidades*/ hola mundo encontro /*comentario \
 adipiscing*/ elit Mmam lacinia //Mmpus\
 //erat ultricies finibus lacus';
let newParrafo = parrafo.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
console.log(newParrafo);
