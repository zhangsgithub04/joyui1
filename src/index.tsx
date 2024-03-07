import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import Demo from './Demo';

import Demo2 from './Demo2';

import StepsSlider from './component2.tsx';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        
        <Demo />
        <Demo />
        <Demo2 />
        <Demo2 />

        <StepsSlider/>
        
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
