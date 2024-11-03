// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Make sure this path is correct

const rootElement = document.getElementById('root'); // This should match the id in index.html
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);