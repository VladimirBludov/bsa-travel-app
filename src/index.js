import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/bsa-travel-app/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
