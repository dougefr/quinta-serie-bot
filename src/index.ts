import express from "express";
import WebSocket, { AddressInfo } from "ws";
import http from "http";

// Cria a aplicação express
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({
    ...req.body,
    to: req.body.from
  })
});

//Inicializa um servidor HTTP orquestrado pelo express
const server = http.createServer(app);

//Inicia o servidor
server.listen(process.env.PORT || 8080, () => {
  console.log(
    "Servidor inicializado na porta:",
    (server.address() as AddressInfo).port
  );
});
