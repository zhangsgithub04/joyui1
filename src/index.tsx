import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignUp from './SignUp'; 
import SignIn from './SignIn';
import MainInterface from './MainInterface';
import CreateRoom from './CreateRoom';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/maininterface" element={<MainInterface />} />
                    <Route path="/createroom" element={CreateRoom />} />
                </Routes>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/signup">Sign Up</Link> | <Link to="/signin">Sign In</Link>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/maininterface">Go to Main Interface</Link> | <Link to="createroom">Create Room</Link>
                </div>
            </BrowserRouter>
        </React.StrictMode>
    );
}


