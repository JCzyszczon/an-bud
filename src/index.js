import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </HashRouter>,
);
