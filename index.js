const http = require('http');
const webSocket = require('websocket');

const PORT = process.env.PORT || 8090;

const WebSocketServer = webSocket.server;
let connection = null;

const httpServer = http.createServer((req, res) => {
  console.log('We have received a call');
});

const ws = new WebSocketServer({
  "httpServer": httpServer
});

ws.on('request', req => {
  connection = req.accept(null, req.origin);
  connection.on('open', () => console.log('Connection has been opened'));
  connection.on('close', () => console.log('Connection has been closed'));
  connection.on('message', (message) => {
    console.log(`Received message ${message.utf8Data}`)
  });
});

httpServer.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));