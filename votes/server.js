var express = require('express');
var app=express();
var http = require('http').Server(app);
var server = require('socket.io')(http);
var port=89;

var counter=0;//Initial counter value 

app.get('/', function(req, res) {

        res.sendFile(__dirname + '/index.html');
    });


server.on('connection', function(socket)
{
    console.log('USUARIO CONECTADO');
    

    //on user connected sends the current click count
    socket.emit('click_count',counter);

    //when user click the button
    socket.on('clicked',function(){
    counter+=1;//increments global click count

    server.emit('click_count',counter);//send to all users new counter value
    console.log('ROJO');
    });

});
//starting server
http.listen(port, function()
{
    console.log('listening on port:'+port);
});