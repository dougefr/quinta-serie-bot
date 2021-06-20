import request from "request-promise";

const MESSAGES_URL = "https://http.msging.net/messages";

class MessagingHubHttpClient {
  private _authHeader: string;

  constructor(accessKey: string) {
    this._authHeader = `Key ${accessKey}`;
  }

  public sendMessage<TYPE>(message: TYPE) {
    return request({
      method: "POST",
      uri: MESSAGES_URL,
      headers: {
        "Content-type": "application/json",
        Authorization: this._authHeader,
      },
      body: message,
      json: true,
    });
  }
}

export default MessagingHubHttpClient;
