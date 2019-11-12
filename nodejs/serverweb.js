const {createserver}= require (http);

let server = createserver ((request,response)=>{
    response.writeHead(200,{"Content-Type" : "text/html"});
    response.write("<h1>Hola a todos </h1><p>Ejemplo de un automata</p>");
    response.end();
});

server.listen(8000);
Console.log("Servidor en Escucha en puerto 8000");