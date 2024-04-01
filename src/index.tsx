import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUp from './SignUp'; 
import SignIn from './SignIn';
import MainInterface from './MainInterface';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <SignUp /> {}
            <SignIn /> {}
            <MainInterface /> {}
        </React.StrictMode>
    );
}

