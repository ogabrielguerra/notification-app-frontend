import { useState } from "react";
import Toast from 'react-bootstrap/Toast';
import {
    useSubscription
} from "react-stomp-hooks";

const Subscribe = ({ topic }) => {
    const [lastMessage, setLastMessage] = useState(null);
    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    useSubscription(topic, (message) => setLastMessage(message.body));
    

    if(lastMessage){
        
        const data = JSON.parse(lastMessage); 
        console.log(data.body)
        return (
            <div>
                {/* Last Message: {lastMessage} */}
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Notification</strong>
                        {/* <small>11 mins ago</small> */}
                    </Toast.Header>
                    <Toast.Body>
                        <div>From {data.user.name}</div>
                        <div>{data.body}</div>
                    </Toast.Body>
                </Toast>
            </div>
        );
    }else{
        return <></>
    }
     
    
    
}

export default Subscribe;