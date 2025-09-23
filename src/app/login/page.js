"use client";
import { useState } from "react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (username && password) {
     localStorage.setItem("session", "true");
     alert("Login Successfully");
      router.push("/");
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.subhead}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className={styles.input}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
           className={styles.input}
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
}
