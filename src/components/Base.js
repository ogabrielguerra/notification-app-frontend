import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Base = ()=>{
    return (
        <>
            <Container>
                <h1>Notification App</h1>
                <Outlet/>
            </Container>
        </>
    )
}

export default Base;