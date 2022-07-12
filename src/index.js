import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const { wordList, } = require('./wordList.js');

const colourList = ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'black'];
const boardSize = colourList.length;

// This is a new comment for the surf
function generateRandomList(totalLength, outputLength) {
  let nums = Array.from(Array(totalLength).keys());
  let result = [];
  let count = outputLength;

  while (count--) {
    let randomNum = Math.floor(Math.random() * (nums.length));
    result.push(nums[randomNum]);
    nums.splice(randomNum, 1);
  }

  return result;
}

function createBoardState() {
  const randomColourIndexes = generateRandomList(colourList.length, colourList.length);
  const randomWordIndexes = generateRandomList(wordList.length, boardSize);

  let result = [];
  for(let i=0; i<boardSize; i++) {
    result.push({isUncovered: false, colour: colourList[randomColourIndexes[i]], value: wordList[randomWordIndexes[i]]})
  }

  return result;
}

function Square(props) {
  if(props.isUncovered) {
    return (
      <button className='square' id={props.colour} onClick={props.onClick}>
        {props.value}
      </button>
    );
  } else {
    return (
      <button className='square' onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
}
  
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: createBoardState(),
      blueIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i].isUncovered = true;
    this.setState({
      squares: squares,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i].value}
        isUncovered={this.state.squares[i].isUncovered}
        colour={this.state.squares[i].colour}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
        <div className='board-row'>
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
        <div className='board-row'>
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
        </div>
        <div className='board-row'>
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
        </div>
        <div className='board-row'>
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
  