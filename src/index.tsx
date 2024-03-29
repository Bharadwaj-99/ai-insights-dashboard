import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Assuming App is your main component
import './styles/index.scss'; // Import your styles

const container = document.getElementById('root') ?? document.createElement('div');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
