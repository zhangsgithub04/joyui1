import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import SignUp from './SignUp'; // Import SignUp component
import Demo from './Demo';
import Demo2 from './Demo2';
import Component2 from './Component2';
import App from './App';  // Ensure this is the correct path to your App component

// Get the root element to render your app
const rootElement = document.querySelector("#root");

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <StyledEngineProvider injectFirst>
                <CssVarsProvider>
                    <SignUp /> {/* Add the SignUp component */}
                    <Demo />
                    <Demo2 />
                    <Component2 />
                </CssVarsProvider>
            </StyledEngineProvider>
        </React.StrictMode>
    );
}

