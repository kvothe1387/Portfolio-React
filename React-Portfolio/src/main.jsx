import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';

import "@fontsource/outfit";
import "@fontsource/roboto";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
