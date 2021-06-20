import express from "express";
import TelegramBot from "node-telegram-bot-api";

const token = process.env.TELEGRAM_TOKEN || "";
const bot = new TelegramBot(token);
bot.setWebHook(process.env.HEROKU_URL + token);

// Cria a aplicação express
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post(`/${token}`, (req, res) => {
  console.log(req.body);
});

//Inicia o servidor
app.listen(process.env.PORT || 8080, () => {
  console.log("Servidor inicializado na porta:", process.env.PORT || 8080);
});
