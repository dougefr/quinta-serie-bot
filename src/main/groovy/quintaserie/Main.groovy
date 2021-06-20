package quintaserie

import java.util.logging.Logger

import static java.lang.System.getenv
import static spark.Spark.*;


class Main {
	private static final LOGGER = Logger.getLogger Main.class.simpleName

	static void main(String[] args) {
		port getenv("PORT") as Integer ?: 8080
		get "/", () -> "it's working! :)"
		post "/", (req, res) -> {
			LOGGER.info req.body()
		}
	}
}
