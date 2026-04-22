import Link from "next/link";
import HeaderNavContainer from "../components/headerNav/HeaderNavContainer";
import RecentMemoriesContainer from "../components/memories/RecentMemoriesContainer";
import PreferencesContainer from "../components/preferences/PreferencesContainer";
import styles from "./page.module.css";

const Dashboard = () => {
  return (
    <main className={styles.dashboardMain}>
      <HeaderNavContainer />
      <section className={styles.dashboardContent}>
        <PreferencesContainer />
        <Link className={styles.ctas} href="/share-a-travel-detail">
          + Add to your travels
        </Link>
        <RecentMemoriesContainer />
      </section>
    </main>
  );
};

export default Dashboard;
