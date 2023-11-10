import './App.css';
import React, { useState } from 'react';
import DisplayJSON from './DisplayJson.js';

function App() {
  // Discover current time;
  // convert to make it useful
  const currTime = new Date().toLocaleTimeString();

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
  fetch(`https://api.multiversx.com/accounts/${userInput}/transactions?size=299&before=1699248999`)
    .then((response) => response.json())
    .then((data) => {
      // Assuming data structure has 'item' property
      const description = data?.item?.action?.description ?? 'N/A';
      setData(data); // Setting entire data into state
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};
  // Function to convert timestamp to useful Date/Time info
  const timeDecrypt = (inputTimeStamp) => {
    const date = new Date(inputTimeStamp * 1000); // Convert Unix timestamp to milliseconds

    // Get the various components of the date
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is 0-indexed, so we add 1
    const day = date.getDate();
    const hours = date.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const minutes = date.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const seconds = date.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    return (<span>{`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`}</span>)
  }

  return (
    <div className='wholeapp'>
      <h1>MultiversX Prototype API Caller: v1.5, Tx data </h1>
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
          <DisplayJSON jsonData={data} />
          {/* {data.map((item,index) => (
            <div className='table-row'>
              <div className='row-item' key={index}>
                <div className="caption">
                  tx @:{timeDecrypt(item.timestamp)}<br/>
                  sent to: {item.receiver}<br/>
                  sent from: {item.sender}<br/>
                  <span className='beefy-text'>type of tx: {item.function}</span><br/>
                  <h2>Description: {item.description || 'N/A'}</h2><br/>
                  tx hash: {item.txHash}
                </div>
              </div>
            </div>
          ))} */}
        </div>
        {/* below is for NFT call, expand into anouther route! */}
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
