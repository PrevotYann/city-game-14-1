import React from "react";

function GameSettings({
  setWinningScore,
  setHandicap1,
  setHandicap2,
  setRackSize,
}) {
  return (
    <div className="settings">
      <h3>Game Settings</h3>
      <label htmlFor="winningScore">Winning Score</label>
      <input
        type="number"
        id="winningScore"
        onChange={(e) => setWinningScore(Number(e.target.value))}
        placeholder="Enter Winning Score"
      />

      <label htmlFor="handicap1">Player 1 Handicap</label>
      <input
        type="number"
        id="handicap1"
        onChange={(e) => setHandicap1(Number(e.target.value))}
        placeholder="Enter Player 1 Handicap"
      />

      <label htmlFor="handicap2">Player 2 Handicap</label>
      <input
        type="number"
        id="handicap2"
        onChange={(e) => setHandicap2(Number(e.target.value))}
        placeholder="Enter Player 2 Handicap"
      />

      <label htmlFor="rackSize">Rack Size (Balls)</label>
      <select
        id="rackSize"
        onChange={(e) => setRackSize(Number(e.target.value))}
      >
        <option value="15">15 Balls</option>
        <option value="10">10 Balls</option>
        <option value="9">9 Balls</option>
        <option value="8">8 Balls</option>
      </select>

      <button onClick={() => alert("Settings Saved!")}>Save Settings</button>
    </div>
  );
}

export default GameSettings;
