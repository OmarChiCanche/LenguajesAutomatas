var net = require('net');
var server =net.createServer();
var sockets = [];
var string;

server.on('conection', function(){
	console.log('Servidor activo en el puerto 4001');

	sockets.push(socket);

	socket.on('dat', function(data){
		cosole.log('got data:', data);
		sockets.forEach(function(otherSocket){

			if(otherSocket !== socket){
				otherSocket.write(data);
			}
		});
	});

	socket.on('close', function(){
		console.log('El servidor está cerrado...');
		var index = osckets.indexOf(socket);
		sockets.splice(index, 1);
	});

}); //fin de conexion

server.on('error', function(err){
	console.log('error:', err.message);
});
server.on('close', function(err){
	console.log('cerrado');
});
server.listen(4001);