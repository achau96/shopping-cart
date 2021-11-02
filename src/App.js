import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [itemCount, setItemCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <NavBar />
        {/*Switch chooses first match unless exact is stated*/}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
