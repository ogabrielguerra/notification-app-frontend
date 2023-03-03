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
        return (
            <div>
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <strong className="me-auto">Notification</strong>
                    </Toast.Header>
                    <Toast.Body>
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
