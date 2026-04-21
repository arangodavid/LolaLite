import MemoryItem from "./MemoryItem";
import type { MemoryItem as MemoryItemData } from "./types";
import styles from "./memories.module.css";

type RecentMemoriesProps = {
  title: string;
  items: MemoryItemData[];
};

const RecentMemories = ({ title, items }: RecentMemoriesProps) => {
  return (
    <section className={styles.recentMemoriesCard} aria-labelledby="recent-memories-heading">
      <h2 id="recent-memories-heading" className={styles.recentMemoriesTitle}>
        {title}
      </h2>
      <ul className={styles.recentMemoriesList}>
        {items.map((item) => (
          <MemoryItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default RecentMemories;
