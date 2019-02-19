import React, { Component } from 'react';
import {Game} from './Game';

function calculateWinner(squares) {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
  ];
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { //logical AND
          return squares[a];
      }
  }
  return null;
}


class App extends Component {
  render() {
    return (
      <div className="App">
      <Game />
      </div>
    );
  }
}

export default App;
