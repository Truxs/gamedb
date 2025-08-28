import React from "react";
import ProfileCard from "./components/Profile/ProfileCard";
import GameCard from "./components/Games/GameCard";
import MilestoneCard from "./components/Milestones/MilestoneCard";
import Section from "./components/Layout/Section";
import "./App.css";

function App() {
  const profile = {
    team: "", // leave blank
    realName: "Nicolo Marchiavelli D. Ariola",
    ign: "Xylo",
    profilePic: "", // leave blank
  };

  const games = [
    "Valorant",
    "League of Legends",
    "Mobile Legends Bang Bang",
    "Clash Royale",
    "Genshin Impact",
  ];

  const milestones = [
    "Reached Diamond in Valorant",
    "Top 100 in Clash Royale PH",
    "Completed AR60 in Genshin Impact"
  ];

  return (
    <div className="dashboard">
      <h1 className="title">Gamer Profile Dashboard</h1>

      <Section title="Profile">
        <ProfileCard profile={profile} />
      </Section>

      <Section title="Games You Are Playing">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </Section>

      <Section title="Milestones">
        {milestones.length > 0 ? (
          milestones.map((milestone, index) => (
            <MilestoneCard key={index} milestone={milestone} />
          ))
        ) : (
          <p>No milestones yet...</p>
        )}
      </Section>
    </div>
  );
}

export default App;
