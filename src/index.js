import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import App from './App';
import Base from './components/Base';
import SeeMessages from './components/SeeMessages';
import {
    StompSessionProvider,
} from "react-stomp-hooks";
import MessageForm from './components/message/MessageForm';

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
                    path: "/message/send",
                    element: <StompSessionProvider url={urlSocket}><MessageForm/></StompSessionProvider>,
                },
                {
                  path: "/message/log",
                  element: <SeeMessages />,
              },

            ]
        }
    ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
