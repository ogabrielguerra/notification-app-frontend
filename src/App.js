import Subscribe from './components/stomp/Subscribe';
import SendMessage from './components/stomp/SendMessage';

const App = () => {
  const urlSocket = 'http://localhost:8080/gs-guide-websocket';
  const mapTopic = '/app/hellos';
  const subscribeTopic = '/topic/greetings';

  return (
      <>
        <Subscribe topic={subscribeTopic}/>
        <SendMessage topic={subscribeTopic} mapTopic={mapTopic}/>
      </>
  )
}

export default App;
