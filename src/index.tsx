import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import SignUp from './SignUp'; // Import SignUp component

// Get the root element to render your app
const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <StyledEngineProvider injectFirst>
                <CssVarsProvider>
                    <SignUp /> {/* Render the SignUp component directly */}
                </CssVarsProvider>
            </StyledEngineProvider>
        </React.StrictMode>
    );
}


