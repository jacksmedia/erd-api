import React from 'react';

const TransactionCard = ({ txHash, sender, receiver, value, fee, timestamp, status, onClick }) => {
  return (
    <div className={`transaction-card ${status}`} onClick={onClick}>
      <span className='row-item'>{txHash}</span>
      <span className='row-item'>Sender: {sender}</span>
      <span className='row-item'>Receiver: {receiver}</span>
      <span className='row-item'>Value: {value}</span>
      <span className='row-item'>Fee: {fee}</span>
      <span className='row-item'>Timestamp: {new Date(timestamp * 1000).toLocaleString()}</span>
      <span className='row-item'>Status: {status}</span>
    </div>
  );
};

export default TransactionCard;