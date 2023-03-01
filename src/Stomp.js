import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useApi } from './hooks/useApi';
import MessageForm from './components/message/MessageForm';
import Log from './components/log/Log';
import {
  StompSessionProvider,
  useStompClient,
  useSubscription,
} from "react-stomp-hooks";

const Stomp = () => {
  const urlSocket = 'http://localhost:8080/gs-guide-websocket';
  // const topic = '/topic/greetings';
  const topic = '/app/hello';

  let state = useApi('http://localhost:8081/api/v1/log/')

  function SubscribingComponent() {
    const [lastMessage, setLastMessage] = useState("No message received yet");

    useSubscription(topic, (message) => setLastMessage(message.body));
  
    return (
      <div>Last Message: {lastMessage}</div>
    );
  }

  if(state.status==='fetched'){
    
    return (
      <Container>
        <h1>Notification App</h1>

        <StompSessionProvider url={urlSocket}>
          <SubscribingComponent />
          <SendingMessages topic={topic}/>
        </StompSessionProvider> 

        <MessageForm />
        <Log data={state} />    
      </Container>
    )

  }else{

    return (
      <>
      <h1>Notification App</h1>
      <p>Loading...</p>
      </>
    );
  }
}

export default Stomp;

const SendingMessages = ({topic})=>{
  const [input, setInput] = useState("");
  const [lastMessage, setLastMessage] = useState("No message received yet");

  const stompClient = useStompClient();
  useSubscription(topic, (message) => setLastMessage(message.body));

  const sendMessage = () => {
    if(stompClient) {
      console.log('send message to', topic)
      // stompClient.send("/app/hello", {}, JSON.stringify({'name': 'foo'}));
      stompClient.publish({
        destination: "/app/hello",
        body: "Echo " + input
      });
    }
    else {
      console.log('error')
      //Handle error
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



