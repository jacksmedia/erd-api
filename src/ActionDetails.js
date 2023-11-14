import React from 'react';

const ActionDetails = ({ category, name, description, args }) => {
  return (
    <div className="action-details">
      <p>Category: {category}</p>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Arguments: {JSON.stringify(args)}</p>
    </div>
  );
};

export default ActionDetails;