import React from 'react';
import './index.scss';
import App from './App';
import { createRoot } from 'react-dom/client';
const containerRoot = document.getElementById('root');
const root = createRoot(containerRoot);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
