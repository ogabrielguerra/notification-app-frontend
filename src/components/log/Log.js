import Row from './Row';
import { Link } from 'react-router-dom';

const Log = ({data})=>{
  
    let messages = data.data;
    let key = 0;
  
    if(messages.length>0){
      return (
        <>
        <h2 className='mb-3'>Registered Messages</h2>
        {
          messages.map((item)=>{
            key += 1;
            return <Row key={`logRow_${key}`} data={item}/>
          })
        }
        </>
      );
    }else{
      return <>
        <p>No messages yet.</p>
        <Link to={'/message/send'}>Send a new message</Link>
      </>;
    }
  }

export default Log;
