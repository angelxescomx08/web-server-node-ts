import http from "http";

const server = http.createServer((req, res) => {
  res.write("Hola mundo");
  res.end();
});

server.listen(3000);
