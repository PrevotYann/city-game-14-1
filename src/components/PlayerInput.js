import React from "react";

function PlayerInput({ player1, player2, setPlayer1, setPlayer2 }) {
  return (
    <div className="player-input">
      <h3>Noms des joueurs</h3>
      <label htmlFor="player1">Nom du joueur 1</label>
      <input
        type="text"
        id="player1"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
        placeholder="Entrer nom Joueur 1"
      />
      <label htmlFor="player2">Nom du joueur 2</label>
      <input
        type="text"
        id="player2"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
        placeholder="Entrer nom Joueur 2"
      />
    </div>
  );
}

export default PlayerInput;
