package quintaserie

import org.telegram.telegrambots.meta.TelegramBotsApi
import org.telegram.telegrambots.meta.exceptions.TelegramApiException
import org.telegram.telegrambots.updatesreceivers.DefaultBotSession


class Main {

    static void main(String[] args) {
        try {
            var telegramBotsApi = new TelegramBotsApi(DefaultBotSession.class);
            telegramBotsApi.registerBot(new QuintaSerieBot());
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }

    }
}
