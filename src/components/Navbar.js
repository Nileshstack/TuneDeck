"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  function logout() {
    localStorage.removeItem("session"); 
    router.push("/login"); 
  }

  return (
    <nav className={styles.nav}>
      <Link href="/">Dashboard</Link>
      <Link href="/upload">Upload</Link>
      <Link href="/login" onClick={logout}>Logout</Link>
    </nav>
  );
}
