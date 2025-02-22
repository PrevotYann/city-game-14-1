import React, { useState } from "react";

function GameSettings({
  winningScore,
  setWinningScore,
  handicap1,
  setHandicap1,
  handicap2,
  setHandicap2,
  rackSize,
  setRackSize,
  resetGame,
  player1,
  player2,
  maxBreakCount,
  setMaxBreakCount,
}) {
  const [localWinningScore, setLocalWinningScore] = useState(winningScore);
  const [localBreakCount, setLocalBreakCount] = useState(maxBreakCount);
  // const [localHandicap1, setLocalHandicap1] = useState(handicap1);
  // const [localHandicap2, setLocalHandicap2] = useState(handicap2);
  // const [localRackSize, setLocalRackSize] = useState(rackSize);

  const saveSettings = () => {
    setWinningScore(localWinningScore);
    setMaxBreakCount(localBreakCount);
    // setHandicap1(localHandicap1);
    // setHandicap2(localHandicap2);
    // setRackSize(localRackSize);
    resetGame();
  };

  return (
    <div className="game-settings">
      <h2>Paramètres de la partie</h2>
      <div className="settings-row">
        <label>Score à atteindre:</label>
        <input
          type="number"
          value={localWinningScore}
          onChange={(e) => setLocalWinningScore(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Nombre de reprises max:</label>
        <input
          type="number"
          value={localBreakCount}
          onChange={(e) => setLocalBreakCount(Number(e.target.value))}
        />
      </div>
      {/* <div className="settings-row">
        <label>{player1} Handicap:</label>
        <input
          type="number"
          value={localHandicap1}
          onChange={(e) => setLocalHandicap1(Number(e.target.value))}
        />
      </div>
      <div className="settings-row">
        <label>{player2} Handicap:</label>
        <input
          type="number"
          value={localHandicap2}
          onChange={(e) => setLocalHandicap2(Number(e.target.value))}
        />
      </div> */}
      {/* <div className="settings-row">
        <label>Taille du rack:</label>
        <input
          type="number"
          value={localRackSize}
          onChange={(e) => setLocalRackSize(Number(e.target.value))}
        />
      </div> */}
      <button onClick={saveSettings}>Save Settings</button>
    </div>
  );
}

export default GameSettings;
