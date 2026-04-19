import Link from "next/link";
import styles from "./page.module.css";

export default function Dashboard() {
  return (
    <main className={styles.dashboardMain}>
      <header className={styles.dashboardHeader}>
        <nav>
          <ul>
            <li><Link href="/">Dashboard</Link></li>
            <li><Link href="/share">Share</Link></li>
            <li><Link href="/history">Logout</Link></li>
            <li><Link href="/history">Planning</Link></li>
          </ul>
        </nav>
        <h1 className={styles.dashboardTitle}>Lola-Lite</h1>
        <nav>
          <ul>
            <li><Link href="/history">Account</Link></li>
            <li><Link href="/share">Settings</Link></li>
            <li><Link href="/history">Logout</Link></li>
          </ul>
        </nav>
      </header>
      <section className={styles.dashboardContent}>
        <section className={styles.preferences}>Preferences(placeholder)</section>
        <Link className={styles.ctas} href="/upload-travels">+ Add to your travels</Link>
        <section className={styles.recentMemories}>Recent memories(placeholder)</section>
      </section>
    </main>
  )  
}
