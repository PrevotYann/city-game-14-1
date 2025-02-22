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
  mean1,
  mean2,
  focusedPlayer,
  balls,
  maxBreakCount,
  winningScore,
}) {
  return (
    <div
      className="scoreboard-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "600px",
      }}
    >
      <h2
        className="scoreboard-title"
        style={{ color: "#333", textAlign: "center" }}
      >
        Scoreboard
      </h2>

      {/* Player 1 Card */}
      <div
        className="player-card"
        style={{
          backgroundColor: player1 === focusedPlayer ? "#dbeafe" : "#f7f7f7",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%", // Makes it stretch full width
          textAlign: "center",
        }}
      >
        <div
          className="player-name"
          style={{ fontSize: "22px", fontWeight: "bold", color: "#333" }}
        >
          {player1}
          <div
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              background: "linear-gradient(45deg, #4a90e2, #80c1ff)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {score1}
            <div style={{ fontSize: "16px", color: "#555" }}>
              Billes restantes: {winningScore - score1}
            </div>
            <div style={{ fontSize: "16px", color: "#555" }}>
              Reprises restantes: {maxBreakCount - innings1}
            </div>
          </div>
        </div>

        <div className="player-info" style={{ marginTop: "10px" }}>
          <span>
            <strong>Reprises:</strong> {innings1}
          </span>
          <br />
          <span>
            <strong>Meilleur break:</strong> {highRun1}
          </span>
          <br />
          <span>
            <strong>Fautes:</strong> {fouls1}
          </span>
          <br />
          <span>
            <strong>Moyenne:</strong> {mean1}
          </span>
        </div>
      </div>

      {/* Info Section */}
      <div
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#333",
          margin: "10px 0",
        }}
      >
        <strong>Billes restantes:</strong> {balls}
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#333",
          marginBottom: "10px",
        }}
      >
        <strong>{maxBreakCount}</strong> reprises
      </div>

      {/* Player 2 Card */}
      <div
        className="player-card"
        style={{
          backgroundColor: player2 === focusedPlayer ? "#dbeafe" : "#f7f7f7",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%", // Full width
          textAlign: "center",
        }}
      >
        <div
          className="player-name"
          style={{ fontSize: "22px", fontWeight: "bold", color: "#333" }}
        >
          {player2}
        </div>
        <div
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #4a90e2, #80c1ff)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {score2}
        </div>
        <div style={{ fontSize: "16px", color: "#555" }}>
          Billes restantes: {winningScore - score2}
        </div>
        <div style={{ fontSize: "16px", color: "#555" }}>
          Reprises restantes: {maxBreakCount - innings2}
        </div>
        <div className="player-info" style={{ marginTop: "10px" }}>
          <span>
            <strong>Reprises:</strong> {innings2}
          </span>
          <br />
          <span>
            <strong>Meilleur break:</strong> {highRun2}
          </span>
          <br />
          <span>
            <strong>Fautes:</strong> {fouls2}
          </span>
          <br />
          <span>
            <strong>Moyenne:</strong> {mean2}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
