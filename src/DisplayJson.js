import React from 'react';

const DisplayJSON = ({ jsonData }) => {
  // Convert the JSON object into an array of key-value pairs
  const entries = Object.entries(jsonData);

  return (
    <div>
      <h2>Wallet Transactions in raw JSON:</h2>
      <ul>
        {entries.map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {JSON.stringify(value)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayJSON;