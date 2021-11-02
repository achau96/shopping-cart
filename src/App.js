import React, { useState } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [itemCount, setItemCount] = useState(0);
  const [processors, setProcessors] = useState({
    ryzen5600x: 0,
    ryzen5700x: 0,
    ryzen5800x: 0,
    ryzen5900x: 0,
  });

  const incrementItem = (item) => {
    if (processors[item] < 99) {
      setProcessors((prevState) => ({
        ...processors,
        [item]: prevState[item] + 1,
      }));
    }
  };

  const decrementItem = (item) => {
    if (processors[item] > 0) {
      setProcessors((prevState) => ({
        ...processors,
        [item]: prevState[item] - 1,
      }));
    }
  };

  const handleProcessorChange = (event, item) => {
    setProcessors((prevState) => ({
      ...prevState,
      [item]: Number(event.target.value),
    }));
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        {/*Switch chooses first match unless exact is stated*/}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/shop"
            render={() => (
              <Shop
                incrementItem={incrementItem}
                decrementItem={decrementItem}
                handleProcessorChange={handleProcessorChange}
                processors={processors}
              />
            )}
          />
          {console.log(processors)}
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
