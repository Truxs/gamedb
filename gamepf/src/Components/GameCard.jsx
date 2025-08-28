import React from "react";
import "./GameCard.css";

function GameCard({ game }) {
  return (
    <div className="card game-card">
      <h3>{game}</h3>
    </div>
  );
}

export default GameCard;
