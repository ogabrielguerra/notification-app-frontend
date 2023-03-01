import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from 'react-bootstrap';
import ErrorPage from './components/ErrorPage';
import App from './App';
import Base from './components/Base';
import SeeMessages from './components/SeeMessages';
import SendMessage from './components/SendMessage';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Base />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Container><App /></Container>,
                },
                {
                    path: "/send-message",
                    element: <SendMessage/>,
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

