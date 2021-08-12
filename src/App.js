import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ColorList from './ColorList';
import ColorPage from './ColorPage';

function App() {
  const [colors, setColors] = useState([{name: 'blue', value: '#0000ff'}]);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <ColorList colors={colors} />
          </Route>
          <Route exact path="/colors/:color">
            <ColorPage colorsArr={colors}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


