import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignUp from './SignUp'; 
import SignIn from './SignIn';
import MainInterface from './MainInterface';
import CreateRoom from './CreateRoom';
import ColorPicker from './ColorPicker';

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
                    <Route path="/createroom" element={<CreateRoom />} />
                    <Route path="/colorpicker" element={<ColorPicker />} />
                </Routes>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/signup">Sign Up</Link> 
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/signin">Sign In</Link>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/maininterface">Main Interface</Link> 
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="createroom">Create Room</Link>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="colorpicker">Color Picker</Link>
                </div>
            </BrowserRouter>
        </React.StrictMode>
    );
}


