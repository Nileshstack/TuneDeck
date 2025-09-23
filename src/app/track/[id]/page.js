"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "./track.module.css";
import Navbar from "../../../components/Navbar";
import { useRouter } from "next/navigation";

export default function TrackDetailsPage() {
  const { id } = useParams();
  const [track, setTrack] = useState(null);

   const router = useRouter();
      useEffect(() => {
      if (!localStorage.getItem("session")) {
        router.push("/login");
      }
    }, [router]);

  useEffect(() => {
    fetch("/api/tracks")
      .then(res => res.json())
      .then(tracks => setTrack(tracks.find(t => t.id == id)));
  }, [id]);

  if (!track) return <div className={styles.container}><p className={styles.para}>Loading...</p></div>;

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.detailsBox}>
        <h2 className={styles.subhead}>{track.title}</h2>
        <p className={styles.para}><strong>Artist:</strong> {track.artist}</p>
        <p className={styles.para}><strong>Release Date:</strong> {track.releaseDate}</p>
        <p className={styles.para}><strong>Genre:</strong> {track.genre}</p>
        <p className={styles.para}><strong>Status:</strong> {track.status}</p>
      </div>
    </div>
  );
}
