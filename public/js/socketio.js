var url      = window.location.href;
var socket = io.connect(url);

socket.on('connect', function(data) {
  socket.emit('join', 'Hello from client');
});
socket.on('messages', function(data) {
  $("#future").empty().append(data);
});
