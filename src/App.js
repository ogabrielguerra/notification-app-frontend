import Subscribe from './components/stomp/Subscribe';
import SendMessage from './components/stomp/SendMessage';
import { Link } from 'react-router-dom';

const App = () => {
  const urlSocket = 'http://localhost:8080/gs-guide-websocket';
  const mapTopic = '/app/hellos';
  const subscribeTopic = '/topic/greetings';

  return (
      <>
        <Subscribe topic={subscribeTopic}/>
        <h3>Project pages</h3>
        <ul>
          <li><Link to={'/message/send'}>Send messages</Link></li>
          <li><Link to={'/message/log'}>Messages log</Link></li>
        </ul>
        {/* <SendMessage topic={subscribeTopic} mapTopic={mapTopic}/> */}
      </>
  )
}

export default App;
