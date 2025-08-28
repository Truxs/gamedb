import tenzPng from "../assets/tenz.png";
export const profile = {
  username: "Xylo",
};

export const games = [
  "Valorant",
  "League of Legends",
  "Mobile Legends Bang Bang",
  "Genshin Impact",
  "Clash Royale",
  "Call of Duty Mobile"
];

export const milestones = [
  {
    title: "First Victory",
    game: "Valorant",
    description: "Won your first competitive match.",
    completed: true
  },
  {
    title: "Team Captain",
    game: "League of Legends",
    description: "Lead your team to 10 consecutive wins.",
    completed: false,
  },
  {
    title: "Legendary Status",
    game: "Mobile Legends Bang Bang",
    description: "Reach Mythical Glory rank.",
    completed: false,
  },
  {
    title: "Anemo Adventurer",
    game: "Genshin Impact",
    description: "Unlock 10 Teleport Waypoints.",
    completed: true
  },
  {
    title: "Royal Clash",
    game: "Clash Royale",
    description: "Reach Arena 10.",
    completed: false
  },
  {
    title: "Operator On Duty",
    game: "Call of Duty Mobile",
    description: "Win 5 Battle Royale matches.",
    completed: false,
  }
];

export const friends = [
  { name: "Tenz", status: "Online", avatar: tenzPng },
  { name: "Shrek", status: "In Game", avatar: "https://i.pravatar.cc/100?img=22" },
];