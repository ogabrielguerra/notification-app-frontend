import { useState } from "react";
import {
    useSubscription
  } from "react-stomp-hooks";

const Subscribe = ({topic}) => {
    const [lastMessage, setLastMessage] = useState("No message received yet");
    useSubscription(topic, (message) => setLastMessage(message.body));
    return (
        <div>Last Message: {lastMessage}</div>
    );
}

export default Subscribe;