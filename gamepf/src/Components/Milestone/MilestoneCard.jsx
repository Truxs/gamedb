import React from "react";
import "./MilestoneCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faGamepad } from '@fortawesome/free-solid-svg-icons';

function MilestoneCard({ milestone }) {
  return (
    <div className="milestone-card">
      <div className="milestone-header">
        <div className="milestone-icon">
          <FontAwesomeIcon icon={faGamepad} />
        </div>
        <div className="milestone-title">{milestone.game}</div>
      </div>
      
      <div className="milestone-details">
        <div className="milestone-detail">
          <FontAwesomeIcon icon={faTrophy} className="detail-icon" />
          <span>{milestone.title}</span>
        </div>
                
        <div className="milestone-description">{milestone.description}</div>
      </div>
    </div>
  );
}

export default MilestoneCard;
