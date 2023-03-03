import Subscribe from './components/stomp/Subscribe';
import { Link } from 'react-router-dom';

const App = () => {
  const subscribeTopic = '/topic/greetings';

  return (
      <>
        <Subscribe topic={subscribeTopic}/>
        <h3>Project pages</h3>
        <ul>
          <li><Link to={'/message/send'}>Send messages</Link></li>
          <li><Link to={'/message/log'}>Messages log</Link></li>
        </ul>
      </>
  )
}

export default App;
