import { useState } from "react";
import Square from "./components/Square";
import './App.css';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = () => {
    setSquares('X')
  }

  return (
    <div className="game-container">
      <div className="gradient-bg"></div>
      <div className="gradient-bg-2"></div>
      <div className="tic-tac-toe-wrapper">
        <h1 className="text-white leading-9 mb-12 text-4xl font-bold">Enjoy the GAME!</h1>
        <div className="flex">
          <Square value={squares[0]} onSquareClick={handleClick} />
          <Square value={squares[1]} />
          <Square value={squares[2]} />
        </div>
        <div className="flex">
          <Square value={squares[3]} />
          <Square value={squares[4]} />
          <Square value={squares[5]} />
        </div>
        <div className="flex">
          <Square value={squares[6]} />
          <Square value={squares[7]} />
          <Square value={squares[8]} />
        </div>
      </div>
    </div>
  )
}