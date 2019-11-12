const {createServer} = require("net");

var server = createServer();
var port =4001;

server.on('listening',function(){
    console.log('Servidor escuchando en puerto 4001');
});

server.on('conection',function(socket){
    console.log('El servidor tiene una nueva conexion..');
    socket.end();
    server.close();
});

server.on('close',function(){
    console.log('El servidor esta cerrado..')
});

server.on('error',function(err){
    console.log('Error en la conexion',err.message);
});

server.listen(port);