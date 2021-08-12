import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import './ColorPage.css';

const ColorPage = ({ colorsArr }) => {
  const history = useHistory();
  const { color: colorName } = useParams();
  const colorArr = colorsArr.filter(colorObj => colorObj.name === colorName);
  
  if (colorArr.length === 0) {
    colorArr[0] = {}; // so line 16 doesn't break
    history.push('/colors');
  }

  return (
    <div className="ColorPage" style={{backgroundColor: colorArr[0].value}}>
      <h1>This is the {colorName} page!</h1>
      <h3><Link to="/colors">Go Back</Link></h3>
    </div>
  )
};

export default ColorPage;