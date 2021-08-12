import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './NewColorForm.css';

const NewColorForm = ({ setColors }) => {
  const history = useHistory();
  const initialState = {
    name: '',
    colorVal: ''
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = e => {
    setFormData(fData => ({
      ...fData,
      [e.target.name]: e.target.value
    }))
  };
  const handleSubmit = e => {
    setColors(currColors => [
      {
        name: formData.name,
        value: formData.colorVal
      },
      ...currColors
    ]);
    history.push('/colors');
  };

  return (
    <form onSubmit={handleSubmit} className="NewColorForm">
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
      <div>
        <button>Add color</button>
        <button><Link to="/colors">Go Back</Link></button>
      </div>
    </form>
  )
};

export default NewColorForm;