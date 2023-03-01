import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {
    useSubscription,
    useStompClient,
  } from "react-stomp-hooks";

const SendMessage = ({subscribeTopic, mapTopic}) => {
    const [input, setInput] = useState("");
    const [lastMessage, setLastMessage] = useState("No message received yet");
    const stompClient = useStompClient();
    useSubscription(subscribeTopic, (message) => setLastMessage(message.body));
  
    const sendMessage = () => {
  
      const messageObject = {
        'body': 'foo',
        'messageType': {
          'id': 1
        },
        'channel': {
          'id': 1
        },
        'user': {
          'id': 2
        },
      };
  
      if(stompClient) {
        
        console.log(JSON.stringify(messageObject));
  
        try{
          console.log('send message to', mapTopic)
          stompClient.publish({
            destination: mapTopic,
            body: JSON.stringify(messageObject)
          });
        }catch(error){
          console.log('Error:', error);
        }
        
      } else {
        console.log('error')
      }
    };
  
    return (
      <div>
        <Button variant={"contained"} onClick={sendMessage}>Send Message</Button>
        <input value={input} onChange={(event => setInput(event.target.value))} />
          Last Message received: {lastMessage}
      </div>
    );
  }

  export default SendMessage;