import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/space.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <div>
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
    </div> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
