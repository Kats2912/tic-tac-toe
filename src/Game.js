import React, { useState } from "react";

const Square = (props) => {
  return (
    <div>
      <button className="square " onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
};
const Board = () => {
  const initialSquares = [null, null, null, null, null, null, null, null, null];
  const [squares, setSquares] = useState(initialSquares);
  const winner=calculatorWinner(squares);
  const renderSquare = (i) => {
    return( <Square value={squares[i]} 
    onClick={()=>handleClickEvent(i)}
    />);
  };
  const [xIsNext, setXIsNext]=useState(true);
const status= winner? <h6>winner is {winner}</h6>: <h6>Player {xIsNext?'X':'O'}'s turn</h6>
  const handleClickEvent=(i)=>{
      const newSquares= [...squares];
      const winnerDeclared= Boolean(calculatorWinner(newSquares));
      const sqareFilled= Boolean(newSquares[i]);
      if(winnerDeclared||sqareFilled)return;
      newSquares[i]=xIsNext?'X':'O';
      setSquares(newSquares);
      setXIsNext(!xIsNext);
  }
  return (
    <div >
      <div className="status">{status}</div>
      <div className="board-row">
        
        {renderSquare(0)} {renderSquare(1)}{ renderSquare(2)}
      </div>
      <div className="board-row">
       
      {renderSquare(3)} {renderSquare(4)}{ renderSquare(5)}
      </div>
      <div className="board-row">
       
      {renderSquare(6)} {renderSquare(7)}{ renderSquare(8)}
      </div>
    </div>
  );
};
function Game() {
  return (
    <div className="game">
    Tic-Tac-Toe
      <Board />
    </div>
  );
}

export default Game;

function calculatorWinner(squares){
const lines=[
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6],
];
for(let line of lines){
    const [a,b,c]=line;
    if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
        return squares[a];
    }

}
return null;
}