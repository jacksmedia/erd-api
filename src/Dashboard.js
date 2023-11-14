import React from 'react';
import TransactionCard from './TransactionCard';

const Dashboard = ({ transactions, onTransactionClick }) => {
  return (
    <div className="dashboard">
      {transactions.map((transaction, index) => (
        <TransactionCard key={index} {...transaction} onClick={() => onTransactionClick(index)} />
      ))}
    </div>
  );
};

export default Dashboard;