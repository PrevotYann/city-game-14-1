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
  focusedPlayer,
  setFocusedPlayer,
  focusedPlayerNumber,
  setFocusedPlayerNumber,
  currentRun1,
  setCurrentRun1,
  currentRun2,
  setCurrentRun2,
  maxBreakCount,
}) {
  const incrementScore = (player) => {
    if (balls > 2) {
      setBalls(balls - 1);
    } else {
      setBalls(15); // Reset rack when only one ball remains
    }

    if (player === 1) {
      setScore1(score1 + 1);
      setCurrentRun1(currentRun1 + 1);
      updateHighRun(1, currentRun1);
      if (score1 + 1 >= winningScore) alert(`${player1} a gagné!`);
    } else {
      setScore2(score2 + 1);
      setCurrentRun2(currentRun2 + 1);
      updateHighRun(2, currentRun2);
      if (score2 + 1 >= winningScore) alert(`${player2} a gagné!`);
    }
  };

  const decrementScoreAndFoul = (player) => {
    if (balls > 1) {
      setBalls(balls - 1);
    } else {
      setBalls(15); // Reset rack when only one ball remains
    }

    if (player === 1) {
      setScore1(score1 - 1);
      setFouls1(fouls1 + 1);
    } else {
      setScore2(score2 - 1);
      setFouls2(fouls2 + 1);
    }
  };

  const updateHighRun = (player, currentRun) => {
    if (player === 1 && currentRun > highRun1) setHighRun1(currentRun);
    if (player === 2 && currentRun > highRun2) setHighRun2(currentRun);
  };

  const nextRound = () => {
    setRound(round + 1);
    setBalls(15); // Reset balls for a new round
  };

  const changeFocusedPlayer = (focusedPlayer) => {
    if (focusedPlayer === player1) {
      setFocusedPlayer(player2);
      setFocusedPlayerNumber(2);
      setCurrentRun1(1);
      setInnings2(innings2 + 1);

      if (maxBreakCount - innings2 <= 0) {
        // Game over condition reached
        if (score1 > score2) {
          alert(`${player1} a gagné avec ${score1} points!`);
        } else if (score2 > score1) {
          alert(`${player2} a gagné avec ${score2} points!`);
        } else {
          alert("Match nul !");
        }
      }
    } else {
      setFocusedPlayer(player1);
      setFocusedPlayerNumber(1);
      setCurrentRun2(1);
      setInnings1(innings1 + 1);

      if (maxBreakCount - innings1 <= 0) {
        // Game over condition reached
        if (score1 > score2) {
          alert(`${player1} a gagné avec ${score1} points!`);
        } else if (score2 > score1) {
          alert(`${player2} a gagné avec ${score2} points!`);
        } else {
          alert("Match nul !");
        }
      }
    }
  };

  return (
    <div>
      <button onClick={() => changeFocusedPlayer(focusedPlayer)}>
        Changer de joueur
      </button>
      <button onClick={() => incrementScore(focusedPlayerNumber)}>
        {focusedPlayer} +1
      </button>

      <button onClick={() => decrementScoreAndFoul(focusedPlayerNumber)}>
        {focusedPlayer} Faute -1
      </button>
      <div>
        <button onClick={resetGame}>Remise à zéro</button>
      </div>
    </div>
  );
}

export default GameControls;
