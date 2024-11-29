import React from "react";

function Scoreboard({
  player1,
  player2,
  score1,
  score2,
  innings1,
  innings2,
  highRun1,
  highRun2,
  fouls1,
  fouls2,
}) {
  return (
    <div className="scoreboard-container">
      <h2 className="scoreboard-title">Scoreboard</h2>
      
      {/* Player 1 Card */}
      <div className="player-card">
        <div className="player-name">{player1}</div>
        <div className="player-info">
          <span>
            <strong>Score:</strong> {score1}
          </span>
          <span>
            <strong>Innings (I):</strong> {innings1}
          </span>
          <span>
            <strong>High Run (H):</strong> {highRun1}
          </span>
          <span>
            <strong>Fouls (Ø):</strong> {fouls1}
          </span>
        </div>
      </div>

      {/* Player 2 Card */}
      <div className="player-card">
        <div className="player-name">{player2}</div>
        <div className="player-info">
          <span>
            <strong>Score:</strong> {score2}
          </span>
          <span>
            <strong>Innings (I):</strong> {innings2}
          </span>
          <span>
            <strong>High Run (H):</strong> {highRun2}
          </span>
          <span>
            <strong>Fouls (Ø):</strong> {fouls2}
          </span>
        </div>
      </div>
      
    </div>
  );
}

export default Scoreboard;
