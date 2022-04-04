import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/Global.css'
import './style/Menu.css';
import App from './App';
import { UserContextProvider } from './context/userContext'
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
