import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ColorList from './ColorList';

function App() {
  const [colors, setColors] = useState([{name: 'blue', value: '#0000ff'}]);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/colors">
            <ColorList colors={colors} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


