package quintaserie

import static java.lang.Math.random
import static java.lang.Math.round

import java.util.logging.Logger
import org.telegram.telegrambots.bots.TelegramLongPollingBot
import org.telegram.telegrambots.meta.api.methods.send.SendMessage
import org.telegram.telegrambots.meta.api.objects.Update

import static java.lang.System.getenv

class QuintaSerieBot extends TelegramLongPollingBot {

	private static Logger LOGGER = Logger.getLogger QuintaSerieBot.class.simpleName

	@Override
	String getBotUsername() {
		"quinta_serie_bot"
	}

	@Override
	String getBotToken() {
		getenv "BOT_TOKEN"
	}

	@Override
	void onUpdateReceived(Update update) {
		update.getMessage()?.with { message ->
			var messageText = message.getText()
			var from = message.from
			var reponseText = generateAnswer messageText, from, 10

			if (reponseText) {
				var response = new SendMessage(chatId: message.getChatId(), text: reponseText, replyToMessageId: message.messageId)

				try {
					execute(response)
				} catch (e) {
					e.printStackTrace()
				}
			}
		}
	}

	static def generateAnswer(msg, from, drawFactor) {
		drawNumber().with { n ->
			if (n % drawFactor == 0) {
				return null
			}
		}

		switch (msg) {
			case ~/.ão*$/:
				return "@$from.userName seu cu é o mar, meu pau o tubarão"
			case ~/ina*$/:
				return "Tomate cru é vitamina, como você e sua prima"
			default:
				return null
		}
	}

	static def drawNumber() {
		round random() * 100.with {n ->
			LOGGER.info "drawn number: $n"
			n
		}
	}
}
