import './App.css';
import React, { useState } from 'react';
import Dashboard from './Dashboard.js';
// import * as DappUI from '@multiversx/sdk-dapp/UI';

// wallet-connect ProjectID: d54539c88deb228823b6789a19746e0b

function App() {
  // Discover current time;
  const currTimestamp = new Date();
  // convert to make it useful
  const currTime = currTimestamp.toLocaleTimeString();

  // Create a state variable to store the user input
  const [userInput, setUserInput] = useState('');
  
  // Function to handle the user input change
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }
  // Create a state variable to store the wallet data
  const [data, setData] = useState([]);

// Function to process the user input
const processInput = () => {
  fetch(`https://api.multiversx.com/accounts/${userInput}/transactions?size=799`)
    .then((response) => response.json())
    .then((data) => {
      // Assuming data structure has 'item' property
      // const description = data?.item?.action?.description ?? 'N/A';
      setData(data); // Setting entire data into state
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};

  return (
    <div className='wholeapp'>
      <div className='row'>
        <h1>MultiversX WalletView: v1.7</h1>
        <h6>Another <a href='https://Jacks.Media'>Jacks.Media</a> app</h6>
      </div>
      <form>
        <label>
          <span>Enter your erd:</span>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={processInput}>
          Paste wallet address & push me 🟩
        </button>
      </form>
      <div>
        <h4>Current time is: {currTime}</h4>
        <h3>Transactions (tx's) will appear below . . .</h3>
        <div className='table-container'>
          <Dashboard transactions={data} />
        </div>
        {/* below is for NFT call, expand into another route! */}
        {/* <div className="grid-container">
          {data.map((item, index) => (
            <div className="grid-item" key={index}>
              <img src={item.url} alt={item.name} className='NFTimg'/>
              <div className="caption">{item.name}</div>
            </div>
          ))}
        </div> */}
      </div>
      {/* <div className="footsy">By <a href='http://Jacks.Media'>Jacks.Media</a></div> */}
    </div>
  );
}

export default App;
