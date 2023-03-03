import { useState } from "react";
import Toast from 'react-bootstrap/Toast';
import {
    useSubscription
} from "react-stomp-hooks";

const Subscribe = ({ topic }) => {
    const [lastMessage, setLastMessage] = useState(null);
    const [showToast, setShowToast] = useState(true);
    const toggleShowToast = () => setShowToast(!showToast);
    useSubscription(topic, (message) => setLastMessage(message.body));

    if(lastMessage){
        const data = JSON.parse(lastMessage); 
        return (
            <div>
                <Toast show={showToast} onClose={toggleShowToast}>
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
