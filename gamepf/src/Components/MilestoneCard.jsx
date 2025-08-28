import React from "react";
import "./MilestoneCard.css";

function MilestoneCard({ milestone }) {
  return (
    <div className="card milestone-card">
      <p>{milestone}</p>
    </div>
  );
}

export default MilestoneCard;
