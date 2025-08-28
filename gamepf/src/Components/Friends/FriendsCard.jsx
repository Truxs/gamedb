import React from "react";
import "./FriendsCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCircle } from '@fortawesome/free-solid-svg-icons';

function FriendsCard({ friends = [] }) {
  return (
    <div className="friends-card">
      <div className="friends-header">
        <div className="friends-icon">
          <FontAwesomeIcon icon={faUserFriends} />
        </div>
        <div className="friends-title">Friends</div>
      </div>
      <div className="friends-details">
        {friends.length === 0 && (
          <div className="friends-description">Friends</div>
        )}
        {friends.map((f, i) => (
          <div key={i} className="friends-detail">
            <img src={f.avatar} alt={f.name} style={{ width: 24, height: 24, borderRadius: '50%' }} />
            <span>{f.name}</span>
            <span className="friends-status-icon"><FontAwesomeIcon icon={faCircle} /></span>
            <span>{f.status === 'Online' ? 'Online' : 'In Game'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendsCard;


