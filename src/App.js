import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  // Create a state variable to store the user input
  const [userInput, setUserInput] = useState('');
  
  // Create a function to handle the user input change
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }
  
  const [data, setData] = useState([]);

  // Simulate an API call to set the data
  useEffect(() => {
    // Replace this with your actual API call
    // For example:
    // fetch('your-api-endpoint')
    //   .then((response) => response.json())
    //   .then((data) => setData(data));

    // Simulated API data
    const jsonData = [
      {
        "name": "Elrond AnimeShibas #1",
        "url": "https://media.elrond.com/nfts/asset/QmeJnpsR5Vh1Yd3CArW4o5u4arT3sbxvqwheJfD5Cjsc94/1.png"
      },
      {
        "name": "Elrond AnimeShibas #2",
        "url": "https://media.elrond.com/nfts/asset/QmeJnpsR5Vh1Yd3CArW4o5u4arT3sbxvqwheJfD5Cjsc94/2.png"
      },
      {
        "name": "Elrond AnimeShibas #3",
        "url": "https://media.elrond.com/nfts/asset/QmeJnpsR5Vh1Yd3CArW4o5u4arT3sbxvqwheJfD5Cjsc94/3.png"
      }
      // Add more data as needed
    ];
    setData(jsonData);
  }, []);

  // Create a function to process the user input
  const processInput = () => {
    // You can perform any processing or call your desired function here
    alert(`You entered wallet: ${userInput}`);

  }

  return (
    <div className='wholeapp'>
      <h1>React Input Boiler</h1>
      <form>
        <label>
          <span>Enter erd:</span>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={processInput}>
          Do something w erd! (Soon fetch from API 🫡)
        </button>
      </form>
      <div>
        <h3>Your wallet contains . . .</h3>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <h2>{item.name}</h2>
              <img src={item.url} alt={item.name} className='NFTimg'/>
            </li>
          ))}
        </ul>
      </div>
      <div className="footsy">By <a href='http://Jacks.Media'>Jacks.Media</a></div>
    </div>
  );
}

export default App;
