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
    // NFT endpoint call
    // fetch(`https://api.multiversx.com/accounts/${userInput}/nfts?size=999&hasUris=true&includeFlagged=true&excludeMetaESDT=false`)
    fetch(`https://api.multiversx.com/accounts/${userInput}/transactions?size=299&before=1699248999`)
    .then((response) => response.json())
    .then((data) => setData(data));
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
        <h3>Tx hashes will appear below . . .</h3>
        <div className='table-container'>
          {data.map((item,index) => (
            <div className='table-row'>
              <div className='row-item' key={index}>
                <div className="caption">{item.txHash} <br/>sent to:{item.receiver}<br/> sent from:{item.sender}<br/>sent:{item.timestamp}</div>
              </div>
            </div>
          ))}
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
