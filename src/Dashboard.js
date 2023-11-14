import React from 'react';
import TransactionCard from './TransactionCard';
import TransactionDetails from './TransactionDetails';
import ActionDetails from './ActionDetails';

const Dashboard = ({ transactions, onTransactionClick }) => {
  return (
    <div className="dashboard">
      {transactions.map((transaction, index) => (
        <span className="table-row">
            <TransactionCard key={index} {...transaction} onClick={() => onTransactionClick(index)} />
            <TransactionDetails key={index} {...transaction} onClick={() => onTransactionClick(index)} />
            <ActionDetails key={index} {...transaction} onClick={() => onTransactionClick(index)} />
        </span>
      ))}
    </div>
  );
};

export default Dashboard;