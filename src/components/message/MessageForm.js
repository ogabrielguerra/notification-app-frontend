import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MessageForm = () => {

    const [httpsStatusReceived, setHttpStatusReceived] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();   

        const url = "http://localhost:8081/api/v1/message"
        const payload = {
            "message": {
                "user": {
                    "id": "1"
                },
                "body": {
                    "content": "Dummy messages for general purposes."
                },
                "channel_id": "1"
            }
        };


        

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
            })
            .then(response => {
                setHttpStatusReceived(response.status);
                setFormValue("")
            })
            .catch(error => {
                console.log('Handle errors', error)
            });
    }

    const handleMessageChange = (e) => {
        setHttpStatusReceived(null)
        setFormValue(e.target.value)
    }

    const [formValue, setFormValue] = useState(null)

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Select aria-label="Select a category">
                <option>Select a category:</option>
                <option value="1">Finances</option>
                <option value="2">Movies</option>
                <option value="3">Sports</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="log.message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleMessageChange} value={formValue}/>
            </Form.Group>

            <Button variant="primary" type="submit" >
                Send
            </Button>
            { 
                httpsStatusReceived === 201 ? <div>Message sent!</div> : null
            }
        </Form>
    )
}

export default MessageForm;