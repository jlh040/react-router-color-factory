import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ColorPage.css';

const ColorPage = ({ colorsArr }) => {
  const { color: colorName } = useParams();
  const [{ value: colorVal }] = colorsArr.filter(colorObj => colorObj.name === colorName);

  return (
    <div className="ColorPage" style={{backgroundColor: colorVal}}>
      <h1>This is the {colorName} page!</h1>
      <h3><Link to="/colors">Go Back</Link></h3>
    </div>
  )
};

export default ColorPage;