import StompJs from "@stomp/stompjs";
import SockJS from "sockjs-client";

const url = "http://localhost:8080/gs-guide-websocket"; 
const client = new StompJs.Client({
  webSocketFactory: () => new SockJS(url),
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
});

client.activate();
