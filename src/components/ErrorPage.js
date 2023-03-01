import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = ()=>{
    return (
        <>
        <Container>
            <h1>ERROR</h1>
            <p>Route not found. :(</p>
            <Link to={`/`}>Back to the beginning...</Link>
        </Container>
        </>
    )
}

export default ErrorPage;