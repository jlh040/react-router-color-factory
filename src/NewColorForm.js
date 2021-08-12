import React, { useState } from 'react';

const NewColorForm = ({ setColors }) => {
  const initialState = {
    name: 'light red',
    colorVal: '#ff5733'
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = e => {
    setFormData(fData => ({
      ...fData,
      [e.target.name]: e.target.value
    }))
  };
  return (
    <form className="NewColorForm">
      <div>
        <label for="colorName">Color Name:</label>
        <input 
          id="colorName" 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} />
      </div>
      <div>
        <label for="colorVal">Color Value:</label>
          <input 
            id="colorVal" 
            type="color" 
            name="colorVal" 
            value={formData.colorVal} 
            onChange={handleChange} />
      </div>
    </form>
  )
};

export default NewColorForm;