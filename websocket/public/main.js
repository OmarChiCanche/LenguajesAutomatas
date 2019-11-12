var socket = io.connect('192.168.43.132:8081', { 'forceNew': true });

socket.on('messages', function(data) {
  console.log(data);
  render(data);
})

function render (data) {
  var html = data.map(function(elem, index) {
    return(`<div>
              <strong>${elem.author}</strong>:
              <em>${elem.text}</em>
              <br> Recuento de elementos
              <br> Vocales Recibidas = <em>${elem.tVocal}</em>
              <br> Palabras Recibidas = <em>${elem.tPalab}</em>
              <br> Iniciadas con Mayusculas = <em>${elem.tMayus}</em>
              <br> Numeros Recibidos = <em>${elem.tNum}</em>
              <br> Finalizan con no Vocal = <em>${elem.tNoVocal}</em>
              
            </div>`);
  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}

function addMessage(_e) {
  var payload = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value,

    //Recuento de datos por medio de las funciones
        tVocal: document.getElementById('texto').value.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/gi).length,
        tPalab:  document.getElementById('texto').value.replace (/\r?\n/g," ").replace (/[ ]+/g," ").replace (/^ /,"").replace (/ $/,"").split (" ").length,
        tMayus: document.getElementById('texto').value.match(/[A-Z][a-z]+/gm).length,
        tNum: document.getElementById('texto').value.match(/[\d]/g).length,
        tNoVocal:document.getElementById('texto').value.match(/[a-záéíóúA-ZÁÉÍÓÚ]+([^aeiouáéíóú\? ])\b/g).length 
  };

  socket.emit('new-message', payload);
  return false;
}