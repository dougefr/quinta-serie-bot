import express from "express";
import TelegramBot from "node-telegram-bot-api";
import { DiceRoll } from "rpg-dice-roller";
import mocks from "./mock";

// Cria o bot
const token = process.env.TELEGRAM_TOKEN || "";
const bot = new TelegramBot(token);
bot.setWebHook(process.env.HEROKU_URL + token);

mocks.forEach((mock) => {
  bot.onText(mock.regex, (msg) => {
    const { total } = new DiceRoll("10d10");
    console.log("Dice roll total: ", total);

    if (total >= 85) {
      bot.sendMessage(msg.chat.id, mock.message, {
        reply_to_message_id: msg.message_id,
      });
    }
  });
});

// Cria a aplicação express
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post(`/${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

//Inicia o servidor
app.listen(process.env.PORT || 8080, () => {
  console.log("Servidor inicializado na porta:", process.env.PORT || 8080);
});
