import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignUp from './SignUp'; 
import SignIn from './SignIn';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <SignUp /> {/* Directly render the SignUp component */}
            <SignIn /> {}
        </React.StrictMode>
    );
}


