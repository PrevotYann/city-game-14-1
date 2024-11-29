import React from "react";

function GameControls({
  round,
  setRound,
  balls,
  setBalls,
  score1,
  setScore1,
  score2,
  setScore2,
  innings1,
  setInnings1,
  innings2,
  setInnings2,
  highRun1,
  setHighRun1,
  highRun2,
  setHighRun2,
  fouls1,
  setFouls1,
  fouls2,
  setFouls2,
  winningScore,
  resetGame,
  player1,
  player2,
}) {
  const incrementScore = (player) => {
    const currentRun = balls; // Assuming current run is equal to balls pocketed in this turn

    if (balls > 1) {
      setBalls(balls - 1);
    } else {
      setBalls(15); // Reset rack when only one ball remains
    }

    if (player === 1) {
      setScore1(score1 + 1);
      updateHighRun(1, currentRun);
      if (score1 + 1 >= winningScore) alert(`${player1} wins!`);
    } else {
      setScore2(score2 + 1);
      updateHighRun(2, currentRun);
      if (score2 + 1 >= winningScore) alert(`${player2} wins!`);
    }
  };

  const nextInning = (player) => {
    if (player === 1) setInnings1(innings1 + 1);
    else setInnings2(innings2 + 1);
  };

  const updateHighRun = (player, currentRun) => {
    if (player === 1 && currentRun > highRun1) setHighRun1(currentRun);
    if (player === 2 && currentRun > highRun2) setHighRun2(currentRun);
  };

  const incrementFoul = (player) => {
    if (player === 1) setFouls1(fouls1 + 1);
    else setFouls2(fouls2 + 1);
  };

  const nextRound = () => {
    setRound(round + 1);
    setBalls(15); // Reset balls for a new round
  };

  return (
    <div>
      <h2>Game Controls</h2>
      <p>Round: {round}</p>
      <p>Balls Remaining: {balls}</p>
      <button onClick={() => incrementScore(1)}>Player 1 Scores</button>
      <button onClick={() => incrementScore(2)}>Player 2 Scores</button>
      <button onClick={() => nextInning(1)}>Player 1 Next Inning</button>
      <button onClick={() => nextInning(2)}>Player 2 Next Inning</button>
      <button onClick={() => incrementFoul(1)}>Player 1 Foul</button>
      <button onClick={() => incrementFoul(2)}>Player 2 Foul</button>
      <button onClick={nextRound}>Next Round</button>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default GameControls;
