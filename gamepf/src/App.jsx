import React from "react";
import ProfileCard from "./Components/Profile/ProfileCard";
import FriendsCard from "./Components/Friends/FriendsCard";
import GameCard from "./Components/Games/GameCard";
import MilestoneCard from "./Components/Milestone/MilestoneCard";
import Section from "./Components/Layout/Section";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGamepad, faTrophy, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { profile, games, milestones, friends } from "./data/dashboardData";

function App() {

  return (
    <div className="dashboard">
      {/* Navigation Sidebar */}
      <div className="nav-sidebar">
        <a href="#"><FontAwesomeIcon icon={faHome} /></a>
        <a href="#"><FontAwesomeIcon icon={faGamepad} /></a>
        <a href="#"><FontAwesomeIcon icon={faTrophy} /></a>
        <a href="#"><FontAwesomeIcon icon={faUser} /></a>
        <a href="#"><FontAwesomeIcon icon={faCog} /></a>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <h1 className="title">Xylo's Profile Dashboard</h1>

        <Section title="Your Top Selection" paginate windowSize={3}>
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </Section>

        <Section title="Milestones" paginate windowSize={4} className="milestones-section">
          {milestones.length > 0 ? (
            milestones.map((milestone, index) => (
              <MilestoneCard key={index} milestone={milestone} />
            ))
          ) : (
            <p>No milestones yet...</p>
          )}
        </Section>
      </div>

      {/* Profile Sidebar */}
      <div className="profile-sidebar">
        <ProfileCard profile={profile} />
        <FriendsCard friends={friends} />
      </div>
    </div>
  );
}

export default App;
