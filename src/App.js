import React from 'react';
import LoginControl from './Home';




function App() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  )
  return (
    <div className="App">
      <h1>gael,{new Date().toLocaleDateString()} </h1>
     <h1>{listItems}</h1>
      <LoginControl />
     
    </div>
  );
}

export default App;
