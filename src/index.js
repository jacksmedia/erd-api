import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  DappProvider
} from '@multiversx/sdk-dapp/wrappers';
// import * as DappUI from '@multiversx/sdk-dapp/UI';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Setup WalletConnect w unique ProjectId */}
    <DappProvider
      environment="mainnet"
      customNetworkConfig={{
        name: 'customConfig',
        walletConnectV2ProjectId: 'd54539c88deb228823b6789a19746e0b'
      }}
    >
      <App />
    </DappProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
