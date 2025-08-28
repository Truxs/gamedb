import React from "react";
import "./GameCard.css";
import genshinImg from "../../assets/Genshin.jpg";
import lolImg from "../../assets/lol.jpg";
import valorantImg from "../../assets/valo.jpg";
import clashRoyaleImg from "../../assets/clash royale.jpg";
import mlbbImg from "../../assets/MLBB.jpg";
import codmImg from "../../assets/codm.jpg";

const gameImages = {
  "Genshin Impact": genshinImg,
  "League of Legends": lolImg,
  "Valorant": valorantImg,
  "Clash Royale": clashRoyaleImg,
  "Mobile Legends Bang Bang": mlbbImg,
  "Call of Duty Mobile": codmImg,
};

const gameColors = {
  "Valorant": "linear-gradient(135deg, #ff4655, #1f1f1f)",
  "League of Legends": "linear-gradient(135deg, #0bc6e3, #0a323c)",
  "Mobile Legends Bang Bang": "linear-gradient(135deg, #5d9df5, #2b4c7d)",
  "Clash Royale": "linear-gradient(135deg, #2c6fbb, #48a9f8)",
  "Genshin Impact": "linear-gradient(135deg, #74c2e8, #5a8cca)",
  "Super Mario": "linear-gradient(135deg, #e4000f, #ff9c12)",
  "Car Racing 2": "linear-gradient(135deg, #2c3e50, #4ca1af)"
};

function GameCard({ game }) {
  const imageUrl = gameImages[game];
  const backgroundColor = gameColors[game] || "linear-gradient(135deg, #252a41, #6c5ce7)";
  const styleProps = imageUrl 
    ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: backgroundColor };
  
  return (
    <div 
      className="card game-card"
      style={styleProps}
    >
      <h3>{game}</h3>
    </div>
  );
}

export default GameCard;
