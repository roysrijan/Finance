import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { MoralisProvider } from "react-moralis";

ReactDOM.render(
    <MoralisProvider appId="8cCec1YObvqVy9B9TZ9lRDSXFSwT1t4S28VpN4hT" serverUrl="https://c0vaklobbo6r.usemoralis.com:2053/server">
          <App />
    </MoralisProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
