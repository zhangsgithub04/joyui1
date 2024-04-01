import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUp from './SignUp'; // Ensure this path is correct

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <SignUp /> {/* Directly render the SignUp component */}
        </React.StrictMode>
    );
}

