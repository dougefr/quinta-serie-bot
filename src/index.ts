import express from "express";
import http from "http";
import HelloWorldBot from "./HelloWorldBot";

// Instancia o BOT
const bot = new HelloWorldBot(process.env.BLIP_KEY!);

// Cria a aplicação express
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  bot.handleMessage(req.body);
});

//Inicializa um servidor HTTP orquestrado pelo express
const server = http.createServer(app);

//Inicia o servidor
server.listen(process.env.PORT || 8080, () => {
  console.log("Servidor inicializado na porta:", process.env.PORT || 8080);
});
