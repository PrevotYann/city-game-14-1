import React, { useState } from "react";
import PlayerInput from "./components/PlayerInput";
import Scoreboard from "./components/Scoreboard";
import GameControls from "./components/GameControls";
import GameSettings from "./components/GameSettings";
import "./App.css";

function App() {
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [round, setRound] = useState(1);
  const [balls, setBalls] = useState(15);
  const [innings1, setInnings1] = useState(0);
  const [innings2, setInnings2] = useState(0);
  const [highRun1, setHighRun1] = useState(0);
  const [highRun2, setHighRun2] = useState(0);
  const [fouls1, setFouls1] = useState(0);
  const [fouls2, setFouls2] = useState(0);
  const [winningScore, setWinningScore] = useState(100); // Default target score
  const [handicap1, setHandicap1] = useState(0);
  const [handicap2, setHandicap2] = useState(0);
  const [rackSize, setRackSize] = useState(15);

  const resetGame = () => {
    setScore1(handicap1);
    setScore2(handicap2);
    setRound(1);
    setBalls(rackSize);
    setInnings1(0);
    setInnings2(0);
    setHighRun1(0);
    setHighRun2(0);
    setFouls1(0);
    setFouls2(0);
  };

  return (
    <div className="App">
      <h1>14/1 Pool Scoring</h1>
      <div className="container">
        <PlayerInput
          player1={player1}
          player2={player2}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
        />
        <Scoreboard
          player1={player1}
          player2={player2}
          score1={score1}
          score2={score2}
          innings1={innings1}
          innings2={innings2}
          highRun1={highRun1}
          highRun2={highRun2}
          fouls1={fouls1}
          fouls2={fouls2}
        />
        <GameControls
          round={round}
          setRound={setRound}
          balls={balls}
          setBalls={setBalls}
          score1={score1}
          setScore1={setScore1}
          score2={score2}
          setScore2={setScore2}
          innings1={innings1}
          setInnings1={setInnings1}
          innings2={innings2}
          setInnings2={setInnings2}
          highRun1={highRun1}
          setHighRun1={setHighRun1}
          highRun2={highRun2}
          setHighRun2={setHighRun2}
          fouls1={fouls1}
          setFouls1={setFouls1}
          fouls2={fouls2}
          setFouls2={setFouls2}
          winningScore={winningScore}
          resetGame={resetGame}
          player1={player1}
          player2={player2}
        />
        <GameSettings
          setWinningScore={setWinningScore}
          setHandicap1={setHandicap1}
          setHandicap2={setHandicap2}
          setRackSize={setRackSize}
        />
      </div>
    </div>
  );
}

export default App;
