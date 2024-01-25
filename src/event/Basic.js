import React, { useState } from 'react';

export default function Basic() {
  const [inputValue, setInputValue] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayMessage(`You submitted: ${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <p>{displayMessage}</p>
      <form onSubmit={handleSubmit}>
        <label>Type:</label>
        <input
          type='text'
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
