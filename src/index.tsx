import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { MoralisProvider } from "react-moralis";

ReactDOM.render(
    <MoralisProvider appId="RU05ViCe03YWwSaIidoSpK2wkaI1eAT9E0S7mayJ" serverUrl="https://odd0lkeziyd3.usemoralis.com:2053/server">
          <App />
    </MoralisProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
