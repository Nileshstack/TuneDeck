import styles from "./searchBar.module.css";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search by title or artist..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
