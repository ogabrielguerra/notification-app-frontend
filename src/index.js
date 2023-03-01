import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from 'react-bootstrap';
import ErrorPage from './components/ErrorPage';
import App from './App';
import Base from './components/Base';
import SeeMessages from './components/SeeMessages';
import SendMessage from './components/SendMessage';
import {
    StompSessionProvider,
} from "react-stomp-hooks";

const urlSocket = 'http://localhost:8080/gs-guide-websocket';

const router = createBrowserRouter(
    
    [
        {
            path: "/",
            element: <Base />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <StompSessionProvider url={urlSocket}><App /></StompSessionProvider>,
                },
                {
                    path: "/send-message",
                    element: <StompSessionProvider url={urlSocket}><SendMessage/></StompSessionProvider>,
                },
                {
                  path: "/see-messages",
                  element: <SeeMessages />,
              },

            ]
        }
    ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

