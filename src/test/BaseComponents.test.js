import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage';
import Base from '../components/Base';
import SeeMessages from '../components/SeeMessages';
import Log from '../components/log/Log';

it('renders ErrorPage', () => {
    render(<ErrorPage />, { wrapper: BrowserRouter });
});

it('renders Base', () => {
    render(<Base />, { wrapper: BrowserRouter });
});

it('renders SeeMessages', () => {
    render(<SeeMessages />, { wrapper: BrowserRouter });
});

it('renders Log with no messages', () => {
    const mock = {
        "status": "fetched",
        "data": []
    }
    render(<Log data={mock}/>, { wrapper: BrowserRouter });
});

it('renders Log with messages', () => {
    const mock = {
        "status": "fetched",
        "error": null,
        "data": [
            {
                "id": 1,
                "categoryId": 1,
                "categoryName": "Finance",
                "body": "foo body message",
                "userId": 1,
                "userName": "Dilbert",
                "createdAt": "2023-03-03T02:58:47.890+00:00"
            }
        ]
    }
    render(<Log data={mock}/>, { wrapper: BrowserRouter });
});


