import React from 'react';
import './App.css';
import Board from './Components/Board/Board';

function App() {
  // fetch("https://apimocha.com/quicksell/data").then((result)=>{
  //   XPathResult.json().then((resp)=>{
  //     console.warn("expecto patronum",resp)
  //   })
  // })
  return (
    <div className="App">
      <div className='app_navbar'>
      < h2>Working</h2>
      </div>
      <div className='app_outer'>
        <div className='app_boards'>
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  ); 
}

export default App;
