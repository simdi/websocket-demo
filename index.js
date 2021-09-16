const http = require('http');

const PORT = process.env.PORT || 8090;

const httpServer = http.createServer((req, res) => {
  console.log('We have received a call');
});

httpServer.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));