//definicio Tradicional
function square(x)
{
    return x*x
};

//Definicion a traes de una ariable
const power = function(base, exponente){
    let result=1;
    for (let count = 0; count < exponente; count ++){
        result *=base;
    }
    return result;
};

//Funcion Arrow
const hipotenusa = (a,b) => {
    let result = Math.sqrt(a*a + b*b);
    return result;
};

//Funcion arrow
const hola = () =>{
    return "hola a todos";

}

console.log(square(8));
console.log(power(2,5));
console.log(hipotenusa(3,5));
console.log(hola());