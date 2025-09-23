import Link from "next/link";
import styles from "./trackTable.module.css";

export default function TrackTable({ tracks }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.th}>Title</th>
          <th className={styles.th}>Artist</th>
          <th className={styles.th}>Release Date</th>
          <th className={styles.th}>Status</th>
        </tr>
      </thead>
      <tbody className={styles.td}>
        {tracks.map(track => (
          <tr key={track.id}>
            <td>
              <Link href={`/track/${track.id}`} className={styles.xxx}>{track.title}</Link>
            </td>
            <td>{track.artist}</td>
            <td>{track.releaseDate}</td>
            <td>{track.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
