import React from 'react';

const TransactionDetails = ({ gasLimit, gasPrice, gasUsed, miniBlockHash, nonce, round, signature, data }) => {
  return (
    <div className="transaction-details">
      <p>Gas Limit: {gasLimit}</p>
      <p>Gas Price: {gasPrice}</p>
      <p>Gas Used: {gasUsed}</p>
      <p>Mini Block Hash: {miniBlockHash}</p>
      <p>Nonce: {nonce}</p>
      <p>Round: {round}</p>
      <p>Signature: {signature}</p>
      <p>Data: {data}</p>
    </div>
  );
};

export default TransactionDetails;