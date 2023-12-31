  import React, { useState } from 'react';
  import ReactDOM from 'react-dom';
  import "./index.css"

  const Board = () =>{
    const initialSquares = Array(9).fill(null);
    const [squares,setSquares] = useState(initialSquares);
    const [xIsNext, setxIsNext] = useState(true);
    const handleClickEvent = (i) => {
      const newSquares = [...squares];
      const winnerDeclard = Boolean(caclucateWinner(newSquares));
      const squarwFilled = Boolean(newSquares[i]);
      if (winnerDeclard || squarwFilled){
        return;
      }
      newSquares[i] = xIsNext ? 'X' : "O";
      setSquares(newSquares);
      setxIsNext(!xIsNext);
    }  
    const renderSquare = (i) => {
      return(
        <Square value = {squares[i]}
        onClickEvent  = {() => handleClickEvent(i)}
        />
      )
    }
    const winner = caclucateWinner(squares);
    const status = winner ?
    `Winner: ${winner}` :
      `Next player : ${xIsNext ? 'X' : 'O'}`; 

    return (
      <div style={{
        backgroundColor: 'lightblue',
        margin: 10,
        padding: 13,}}>
        <div className='status'>{status}</div>  
        
        <div className='board-row'>
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
        </div>
        <div className='board-row'>
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
        </div>
        <div className='board-row'>
        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
        </div>
      </div>
    );
  };

  const Square = (props) => {
    const [value, setvalue] = useState(null);
    return (
      <button 
      className='square'
      onClick = {props.onClickEvent}>
        {props.value}
      </button>
    )
  }

  const Game = () => {
    return (
      <div className='game'>
        Tic-Tac-Toe
        <Board/>
      </div>
    );
  };

  ReactDOM.render(
    <Game/>,
    document.getElementById('root')
  );

  function caclucateWinner(squares) {
    const lines = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];
    for (let line of lines){
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }}
  }
    