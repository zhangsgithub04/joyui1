import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignUp from './SignUp'; 
import SignIn from './SignIn';
import MainInterface from './MainInterface';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/main" element={<MainInterface />} />
                </Routes>
                {/* Link to the MainInterface */}
                <footer style={{textAlign: 'center', marginTop: '20px'}}>
                    <Link to="/main">Go to Main Interface</Link>
                </footer>
            </BrowserRouter>
        </React.StrictMode>
    );
}


