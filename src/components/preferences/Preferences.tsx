import type { PreferenceIconId, PreferenceItem } from "./types";
import styles from "./preferences.module.css";

const ICON_BY_ID: Record<PreferenceIconId, string> = {
  hotels: "🏨",
  budget: "💰",
  frequency: "⛵",
};

type PreferencesProps = {
  title: string;
  items: PreferenceItem[];
};

const Preferences = ({ title, items }: PreferencesProps) => {
  return (
    <section className={styles.preferencesCard} aria-labelledby="preferences-heading">
      <h2 id="preferences-heading" className={styles.preferencesCardTitle}>
        {title}
      </h2>
      <ul className={styles.preferencesCardList}>
        {items.map((item) => (
          <li key={item.id} className={styles.preferencesCardListItem}>
            <span className={styles.icon} aria-hidden>
              {ICON_BY_ID[item.icon]}
            </span>
            <p className={styles.preferencesCardListItemText}>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Preferences;
