import React from "react";

function PlayerInput({ player1, player2, setPlayer1, setPlayer2 }) {
  return (
    <div className="player-input">
      <h3>Enter Player Names</h3>
      <label htmlFor="player1">Player 1 Name</label>
      <input
        type="text"
        id="player1"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
        placeholder="Enter Player 1 Name"
      />
      <label htmlFor="player2">Player 2 Name</label>
      <input
        type="text"
        id="player2"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
        placeholder="Enter Player 2 Name"
      />
    </div>
  );
}

export default PlayerInput;
