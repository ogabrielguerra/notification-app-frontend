import { useApi } from '../hooks/useApi';
import Log from './log/Log';

const SeeMessages = ()=>{
    let state = useApi('http://localhost:8080/api/v1/message/')

    if(state.status==='fetched'){
        console.log(state)
        return <Log data={state} />; 

    }else{
        return (
            <div>
            Loading...
            </div>
        )
    }
}

export default SeeMessages;