import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({ colors }) => {
  console.log(colors)
  return (
    <div className="ColorList">
      <div>
        <h1>Welcome to the color factory</h1>
        <h2><Link to="/colors/new">Add a color</Link></h2>
      </div>
      <div>
        <h3>Please Select a Color:</h3>
        <div>
          {colors.map(color => 
            <div>
              <Link to={`/colors/${color.name}`}>{color.name}</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default ColorList;