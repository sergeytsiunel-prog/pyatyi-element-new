import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css'; // импорт должен быть в самом верху
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

