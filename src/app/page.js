"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import SearchBar from "@/components/SearchBar";
import TrackTable from "@/components/TrackTable";


export default function DashboardPage() {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("/api/tracks")
      .then(res => res.json())
      .then(setTracks);
  }, []);

  const filteredTracks = tracks.filter(
    t =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Navbar/>
      <h1 className={styles.head}>🎶 Music Dashboard</h1>

      <div className={styles.contentBox}>
        <SearchBar value={search} onChange={setSearch} />
        <TrackTable tracks={filteredTracks} />
      </div>
    </div>
  );
}
