import Lime from "lime-js";
import BlipHttpClient from "./BlipHttpClient";
import { v4 as uuidv4 } from "uuid";

export default class HelloWorldBot {
  private _client: BlipHttpClient;

  constructor(accessKey: string) {
    this._client = new BlipHttpClient(accessKey);
  }

  handleMessage(message: Lime.Message) {
    // Obtem o conteudo da mensagem recebida pelo contato
    let text = message.content.toString();

    // Loga mensagem recebida
    console.log(`<< ${message.from}: ${message.content}`);

    // Cria uma nova mensagem para responder o usuario que enviou a mensagem.
    // O campo `to` da messagem deve ser igual ao campo `from` da mensagem recebida
    let response = {
      id: uuidv4(),
      to: message.from,
      content: "Hello World from Webhook",
      type: "text/plain",
    };

    // Responde a mensagem para o usuario
    return this._client.sendMessage(response);
  }
}
