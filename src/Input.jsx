import React, { useState } from 'react';

const Input = ({  id, text, data, setData }) => {
  const [isValid, setIsValid] = useState(true); // Use state for validation status


  const handleChange = (e) => {
    const value = e.target.value;
    const minLength = id === "name" ? 2 : 3;

    setIsValid(value.length >= minLength); 

    setData({
      ...data,
      [id]: value,
    });
  };

  return (
    <>
      <label htmlFor={id}>{text}:</label>
      <input id={id} onChange={handleChange} />
      {!isValid && <p className="error-message">Ingrese datos validos!</p>} 
    </>
  );
};

export default Input;