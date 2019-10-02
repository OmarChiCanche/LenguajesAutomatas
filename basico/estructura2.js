var band = true;
do{
    let respuesta = prompt("Cual es tu clima favorito?\n");
    switch (respuesta)
    {
        case "lluvia":
            alert ("recuerda llevar un paraguas ");
            break;
        case "sol":
            alert ("recuerda llevar ropa ligera ");
            break;   
        case "nublado":
            alert ("recuerda ir a pasear ");
            break;
        default:
            band = false;
    }

}while (band);

alert("Adios...");