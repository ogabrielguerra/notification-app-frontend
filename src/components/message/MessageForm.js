import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const MessageForm = () => {
    const [httpsStatusReceived, setHttpStatusReceived] = useState(null);
    const [messageBody, setMessageBody] = useState("")
    const [formHasError, setFormHasError] = useState(false)
    const [messageChannelId, setMessageCategoryId] = useState(1)
    const [userId, setUserId] = useState(1)

    const handleSubmit = (event) => {
        event.preventDefault();
        if(messageBody===""){
            triggerFormError();
            return false;
        } 
        setFormHasError(false);
        const payload = {};
        payload.body = messageBody;
        payload.category = { id: messageChannelId };
        payload.user = { id: userId };

        notify(payload);        
        setMessageBody("");
        setFormHasError(false);
    }

    const triggerFormError = ()=>{
        console.log("form error")
        setHttpStatusReceived(null)
        setFormHasError(true)
    }

    const notify = (payload) => {
        const url = "http://localhost:8080/api/v1/message/notify"

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

    const handleMessageCategoryChange = (e) => setMessageCategoryId(e.target.value);
    const handleUserIdChange = (e) => setUserId(e.target.value);

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label className='mt-3'>Send message as user:</Form.Label>
            <Form.Select defaultValue={1} className="mb-3" aria-label="Select a category" onChange={handleUserIdChange}>
                <option value="1">Dilbert</option>
                <option value="2">Ryu</option>
                <option value="3">Bram Stoker</option>
            </Form.Select>

            <Form.Label className='mt-3'>Select a category:</Form.Label>
            <Form.Select defaultValue={1} className="mb-3" aria-label="Select a category" onChange={handleMessageCategoryChange}>
                <option value="1">Finances</option>
                <option value="2">Movies</option>
                <option value="3">Sports</option>
            </Form.Select>

            <Form.Group controlId="log.message">
                <Form.Label className="mt-3">Message:</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleMessageChange} value={messageBody} />
            </Form.Group>

            <Button className="mt-3" variant="primary" type="submit">Send</Button>
            {formHasError ? <Alert className='mt-3' variant='danger'>Message body is empty or invalid.</Alert> : null}
            {httpsStatusReceived === 201 ? <Alert className='mt-3' variant='success'>Message sent!</Alert> : null}
        </Form>
    )
}

export default MessageForm;

const CustomAlert = ({value}, {variant})=><Alert variant={variant}>{value}</Alert>;
