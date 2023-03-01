import Subscribe from './components/stomp/Subscribe';
import SendMessage from './components/stomp/SendMessage';
import {
  StompSessionProvider,
} from "react-stomp-hooks";

const App = () => {
  const urlSocket = 'http://localhost:8080/gs-guide-websocket';
  const mapTopic = '/app/hellos';
  const subscribeTopic = '/topic/greetings';

  return (
      <>
      <StompSessionProvider url={urlSocket}>
        <Subscribe topic={subscribeTopic}/>
        <SendMessage topic={subscribeTopic} mapTopic={mapTopic}/>
      </StompSessionProvider> 
      </>
  )
}

export default App;
