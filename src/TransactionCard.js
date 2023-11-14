import React from 'react';

const TransactionCard = ({ txHash, sender, receiver, value, fee, timestamp, status, onClick }) => {
  return (
    <div className={`transaction-card ${status}`} onClick={onClick}>
      <h3>{txHash}</h3>
      <p>Sender: {sender}</p>
      <p>Receiver: {receiver}</p>
      <p>Value: {value}</p>
      <p>Fee: {fee}</p>
      <p>Timestamp: {new Date(timestamp * 1000).toLocaleString()}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default TransactionCard;