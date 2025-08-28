import React from "react";
import "./ProfileCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import defaultAvatar from "../../assets/aeef89f6-562a-403d-94ed-c948c7700ce8.jpg";

function ProfileCard({ profile }) {
  const defaults = {
    ign: 'Xylo',
    realName: 'Nicolo Marchiavelli D. Ariola',
    facebook: 'Nicolo Ariola',
    instagram: 'whss.nik0',
  };
  const data = { ...defaults, ...(profile || {}) };
  const avatarSrc = data.profilePic || defaultAvatar;
  return (
    <div className="profile-card">
      <div className="profile-header"></div>
      <div className="avatar">
        <img 
          src={avatarSrc} 
          alt="Profile" 
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/vite.svg'; }}
        />
      </div>
      <div className="profile-info">
        <div className="profile-section-card">
          <h2>{data.ign}</h2>
          <p>{data.realName}</p>
          {data.team && <p>Team: {data.team}</p>}

          <div className="social-links">
            <a href="#" aria-label="Facebook" title={data.facebook}>
              <FontAwesomeIcon icon={faFacebook} />
              <span className="social-username">{data.facebook}</span>
            </a>
            <a href="#" aria-label="Instagram" title={data.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
              <span className="social-username">{data.instagram}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
