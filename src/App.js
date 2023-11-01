import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  // Create a state variable to store the user input
  const [userInput, setUserInput] = useState('');
  
  // Create a function to handle the user input change
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }
  
  // Create a function to process the user input
  const processInput = () => {
    // You can perform any processing or call your desired function here
    // For now, let's just display an alert with the input
    alert(`User input: ${userInput}`);
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
      <span className="footsy">By <a href='http://Jacks.Media'>Jacks.Media</a></span>
    </div>
  );
}

export default App;
