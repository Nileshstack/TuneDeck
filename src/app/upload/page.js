"use client";
import { useEffect, useState } from "react";
import styles from "./upload.module.css";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";

export default function UploadPage() {
  const [form, setForm] = useState({
    title: "", artist: "", releaseDate: "",
    genre: "",
  });
 
  const router = useRouter();
    useEffect(() => {
    if (!localStorage.getItem("session")) {
      router.push("/login");
    }
  }, [router]);
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("/api/tracks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    
    console.log("Your Track data is : ")
    console.log(form);
    alert("Your Track is added successfully");
    setForm({ title: "", artist: "", releaseDate: "", genre: "" });
    router.push("/");
  }

  return (
    <>
     
    <div className={styles.container}>
     <Navbar />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Upload Track</h2>
        <input className={styles.input} name="title" placeholder="Track Title" required onChange={handleChange} />
        <input  className={styles.input}  name="artist" placeholder="Artist Name" required onChange={handleChange} />
        <input  className={styles.input}  name="releaseDate" type="date" required onChange={handleChange} />
        <input  className={styles.input}  name="genre" placeholder="Genre" required onChange={handleChange} />
        <button type="submit" className={styles.button}>Add Track</button>
      </form>
    </div>
    </>
  );
}
