import { useState } from "react";
import styles from "./trackForm.module.css";

export default function TrackForm({ onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    artist: "",
    releaseDate: "",
    genre: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: "", artist: "", releaseDate: "", genre: "" });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input name="title" placeholder="Track Title" required onChange={handleChange} value={form.title} />
      <input name="artist" placeholder="Artist Name" required onChange={handleChange} value={form.artist} />
      <input name="releaseDate" type="date" required onChange={handleChange} value={form.releaseDate} />
      <input name="genre" placeholder="Genre" required onChange={handleChange} value={form.genre} />
      <button type="submit">Add Track</button>
    </form>
  );
}
