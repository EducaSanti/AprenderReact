import { Children, useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { checkWinner } from "./logic/board";
import { Winner } from "./components/Winner";
import "./App.css";


function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);
  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const checkEndGame = (newBoard) => {
    // con every revisamo que si todas las posiciones son diferentes a null a terminado el juego
    return newBoard.every((square) => square != null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return; //no se actualiza esta posicion si ya tiene algo o si hay un ganador

    // Actualizar el tablero
    const newBoard = [...board]; //Crea una copia de array para evitar modificar el original para evitar errores de estado
    // Nunca mutar los props y el estado siempre un nuevo array con el valor
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiar el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // revisar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if(newWinner){
      confetti();
      setWinner(newWinner);
    }else if(checkEndGame(newBoard)){
      setWinner(false); //Empate
    }
  };

  return (
    <main className="board">
      <h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

     <Winner resetGame={resetGame} winner={winner}/>
    </main>
  );
}

export default App;
