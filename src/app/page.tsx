import Link from "next/link";
import styles from "./page.module.css";

export default function Dashboard() {
  return (
    <main className={styles.dashboardMain}>
      <header className={styles.dashboardHeader}>
        <nav>
          <ul>
            <li><Link href="/">Dashboard</Link></li>
            <li><Link href="/settings">Settings</Link></li>
            <li><Link href="/logout">Logout</Link></li>
          </ul>
        </nav>
        <h1 className={styles.dashboardTitle}>Lola-Lite</h1>
      </header>
      <section className={styles.dashboardContent}>
        <section className={styles.preferences}>Preferences(placeholder)</section>
        <Link className={styles.ctas} href="/upload-travels">+ Add to your travels</Link>
        <section className={styles.recentMemories}>Recent memories(placeholder)</section>
      </section>
    </main>
  )  
}
