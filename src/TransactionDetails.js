import React from 'react';

const TransactionDetails = ({ gasLimit, gasPrice, gasUsed, miniBlockHash, nonce, round, signature, data }) => {
  return (
    <div className="transaction-details">
      <span className='row-item'>Gas Limit: {gasLimit}</span>
      <span className='row-item'>Gas Price: {gasPrice}</span>
      <span className='row-item'>Gas Used: {gasUsed}</span>
      <span className='row-item'>Mini Block Hash: {miniBlockHash}</span>
      <span className='row-item'>Nonce: {nonce}</span>
      <span className='row-item'>Round: {round}</span>
      <span className='row-item'>Signature: {signature}</span>
      <span className='row-item'>Data: {data}</span>
    </div>
  );
};

export default TransactionDetails;