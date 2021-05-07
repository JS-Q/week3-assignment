import './App.css';
import Feed from "./components/feed/feed";
import Cart from "./components/cart/cart";
import { useState } from 'react';

function App() {
  const [state, setState] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Week 3 Assignment</h1>
      </header>
      <body className="App-body">
        <Feed cartItems={state}></Feed>
        <Cart cartItems={state}></Cart>
      </body>
    </div>
  );
}

export default App;
