import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PopupProvider } from 'react-popup-manager';
import App from './App';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <PopupProvider>
      <App />
    </PopupProvider>
  </Router>
);
