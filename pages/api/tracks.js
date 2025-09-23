export default function handler(req, res) {
  const tracks = [
  {
    id: 1,
    title: "Dreamscape",
    artist: "Aria Smith",
    releaseDate: "2024-05-10",
    genre: "Pop",
    status: "Published",
  },
  {
    id: 2,
    title: "Midnight Beats",
    artist: "DJ Raven",
    releaseDate: "2024-06-22",
    genre: "Electronic",
    status: "Draft",
  },
  {
    id: 3,
    title: "Echoes of Tomorrow",
    artist: "Liam Grey",
    releaseDate: "2024-07-01",
    genre: "Indie",
    status: "Submitted",
  },
  {
    id: 4,
    title: "Crimson Horizon",
    artist: "Sophia Lee",
    releaseDate: "2024-03-15",
    genre: "Rock",
    status: "Published",
  },
  {
    id: 5,
    title: "Neon Nights",
    artist: "Kai Turner",
    releaseDate: "2024-08-12",
    genre: "Synthwave",
    status: "Draft",
  },
  {
    id: 6,
    title: "Silent Whispers",
    artist: "Olivia Carter",
    releaseDate: "2024-02-28",
    genre: "Acoustic",
    status: "Published",
  },
  {
    id: 7,
    title: "Rise of Legends",
    artist: "Noah Blake",
    releaseDate: "2024-09-10",
    genre: "Hip-Hop",
    status: "Submitted",
  },
  {
    id: 8,
    title: "Golden Hour",
    artist: "Maya Flores",
    releaseDate: "2024-01-20",
    genre: "Pop",
    status: "Published",
  },
  {
    id: 9,
    title: "Parallel Worlds",
    artist: "Ethan Cross",
    releaseDate: "2024-04-18",
    genre: "Alternative",
    status: "Draft",
  },
  {
    id: 10,
    title: "Waves of Serenity",
    artist: "Isabella Reed",
    releaseDate: "2024-05-30",
    genre: "Chillout",
    status: "Published",
  },
];

  if (req.method === "POST") {
    const newTrack = { id: Date.now(), ...req.body, status: "Draft" };
    tracks.push(newTrack);
    return res.status(201).json(newTrack);
  }

  res.status(200).json(tracks);
}
