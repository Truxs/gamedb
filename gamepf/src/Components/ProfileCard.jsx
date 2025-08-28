import React from "react";
import "./ProfileCard.css";

function ProfileCard({ profile }) {
  return (
    <div className="card profile-card">
      <div className="profile-pic">
        {profile.profilePic ? (
          <img src={profile.profilePic} alt="Profile" />
        ) : (
          <div className="placeholder">No Image</div>
        )}
      </div>
      <div className="profile-info">
        <h2>{profile.ign}</h2>
        <p><strong>Real Name:</strong> {profile.realName}</p>
        {profile.team && <p><strong>Team:</strong> {profile.team}</p>}
      </div>
    </div>
  );
}

export default ProfileCard;
