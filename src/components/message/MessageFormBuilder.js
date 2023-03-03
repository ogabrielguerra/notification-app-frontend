import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useStompClient } from "react-stomp-hooks";

const MessageForm = () => {
    const [httpsStatusReceived, setHttpStatusReceived] = useState(null);
    const [messageBody, setMessageBody] = useState("")
    const [messageTypeId, setMessageTipeId] = useState(1)
    const [messageChannelId, setMessageChannelId] = useState(1)
    const stompClient = useStompClient();

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {};
        payload.body = messageBody;
        payload.messageType = { id: messageTypeId };
        payload.channel = { id: messageChannelId };
        payload.user = { id: 2 };

        (messageTypeId != 3) ? sendEmailOrSMS(payload) : sendPush(payload);
        
        setMessageBody("");
    }

    const sendPush = (payload) => {
        console.log("Sending push")
        const mapTopic = '/app/hellos';

        if (stompClient) {
            try {
                console.log('send message to', mapTopic)
                stompClient.publish({
                    destination: mapTopic,
                    body: JSON.stringify(payload)
                });
            } catch (error) {
                console.log('Error:', error);
            }
        }
    }

    const sendEmailOrSMS = (payload) => {
        const url = "http://localhost:8080/api/v1/message/send"

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                setHttpStatusReceived(response.status);
                setMessageBody("")
            })
            .catch(error => {
                console.log('Handle errors', error)
            });
    }

    const handleMessageChange = (e) => {
        setHttpStatusReceived(null)
        setMessageBody(e.target.value)
    }

    const handleMessageTypeChange = (e) => setMessageTipeId(e.target.value);
    const handleMessageChannelChange = (e) => setMessageChannelId(e.target.value);

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Select defaultValue={1} aria-label="Select a message type" onChange={handleMessageTypeChange}>
                <option>Select a message type:</option>
                <option value="1">Email</option>
                <option value="2">SMS</option>
                <option value="3">Push</option>
            </Form.Select>

            <Form.Select defaultValue={1} className="mb-3 mt-3" aria-label="Select a category" onChange={handleMessageChannelChange}>
                <option>Select a category:</option>
                <option value="1">Finances</option>
                <option value="2">Movies</option>
                <option value="3">Sports</option>
            </Form.Select>

            <Form.Group className="mb-3 mt-3" controlId="log.message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleMessageChange} value={messageBody} />
            </Form.Group>

            <Button variant="primary" type="submit">Send</Button>
            {httpsStatusReceived === 201 ? <div>Message sent!</div> : <div></div>}
        </Form>
    )
}

export default MessageForm;
