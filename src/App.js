import Container from 'react-bootstrap/Container';
import { useApi } from './hooks/useApi';
import MessageForm from './components/message/MessageForm';
import Log from './components/log/Log';

function App() {

  let state = useApi('http://localhost:8081/api/v1/log/')
  
  if(state.status==='fetched'){
    
    return (
      <Container>
        <h1>Notification App</h1>
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

export default App;



