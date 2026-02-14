import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


//! Створюємо Головний компонент всього застосунку - App.js

const root = ReactDOM.createRoot(document.getElementById('root'));

//todo: В index.js ми раендеримо тільки <App />
// root.render(<App />);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);