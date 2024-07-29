import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './routers';
import './css/main.css'
import './lib';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);