import React from 'react';

const TokenTransfer = ({ type, name, ticker, svgUrl, token, decimals, value }) => {
  return (
    <div className="token-transfer">
      <p>Type: {type}</p>
      <p>Name: {name}</p>
      <p>Ticker: {ticker}</p>
      <img src={svgUrl} alt={`${name} Logo`} />
      <p>Token: {token}</p>
      <p>Decimals: {decimals}</p>
      <p>Value: {value}</p>
    </div>
  );
};

export default TokenTransfer;