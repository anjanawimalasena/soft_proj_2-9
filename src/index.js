import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './UIs/Login';
import Reg from './UIs/Reg';
import ChatPage from './UIs/App';
import AccSTmenu from './UIs/AccSTmenu';
import AccSTsubscriptions from './UIs/AccSTsubscriptions';
import App from './UIs/App';


ReactDOM.render(
  <React.StrictMode>
  <App/>
   </React.StrictMode>,
  document.getElementById('root')
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
