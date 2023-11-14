import React from 'react';

const ActionDetails = ({ category, name, description, args }) => {
  return (
    <div className="action-details">
      <span className='row-item'>Category: {category}</span>
      <span className='row-item'>Name: {name}</span>
      <span className='row-item'>Description: {description}</span>
      <span className='row-item'>Arguments: {JSON.stringify(args)}</span>
    </div>
  );
};

export default ActionDetails;