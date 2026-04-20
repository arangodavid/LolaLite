import Link from "next/link";
import HeaderNavContainer from "../components/header/HeaderNavContainer";
import styles from "./page.module.css";

const Dashboard = () => {
  return (
    <main className={styles.dashboardMain}>
      <HeaderNavContainer />
      <section className={styles.dashboardContent}>
        <section className={styles.preferences}>Preferences(placeholder)</section>
        <Link className={styles.ctas} href="/upload-travels">
          + Add to your travels
        </Link>
        <section className={styles.recentMemories}>Recent memories(placeholder)</section>
      </section>
    </main>
  );
};

export default Dashboard;
