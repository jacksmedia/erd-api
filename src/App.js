import './App.css';
import React, { useState } from 'react';

function App() {
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
    // basic NFT metadata call, only using 2 properties rn
    fetch(`https://api.multiversx.com/accounts/${userInput}/nfts?size=999&hasUris=true&includeFlagged=true&excludeMetaESDT=false`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  return (
    <div className='wholeapp'>
      <h1>MultiversX Prototype API Caller: v1, NFT data </h1>
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
        <h3>Your wallet contains . . .</h3>
        <div className="grid-container">
          {data.map((item, index) => (
            <div className="grid-item" key={index}>
              <img src={item.url} alt={item.name} className='NFTimg'/>
              <div className="caption">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="footsy">By <a href='http://Jacks.Media'>Jacks.Media</a></div> */}
    </div>
  );
}

export default App;
