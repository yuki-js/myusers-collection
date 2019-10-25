const http = require('http');
http.createServer((req, res) => {
  console.log(req.url)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.PORT, () => console.log('Server http://localhost:3000'));
