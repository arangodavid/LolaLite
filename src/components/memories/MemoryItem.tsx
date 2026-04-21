import type { ReactNode } from "react";
import type { MemoryItem as MemoryItemData, MemoryKind } from "./types";
import styles from "./memories.module.css";

type MemoryItemProps = {
  item: MemoryItemData;
};

const FlightIcon = () => (
  <svg className={styles.iconSvg} viewBox="0 0 24 24" aria-hidden>
    <title>Flight</title>
    <path
      fill="#1e6bb8"
      d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
    />
  </svg>
);

const HotelIcon = () => (
  <svg className={styles.iconSvg} viewBox="0 0 24 24" aria-hidden>
    <title>Hotel</title>
    <path
      fill="#8b5a2b"
      d="M4 22V2h10l6 6v14H4zm2-2h12V10h-5V4H6v16zm4-8h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"
    />
  </svg>
);

const NoteIcon = () => (
  <svg className={styles.iconSvg} viewBox="0 0 24 24" aria-hidden>
    <title>Note</title>
    <path
      fill="#1e6bb8"
      d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7V9zm4 0h6v2h-6V9zm-4 4h10v2H7v-2z"
    />
  </svg>
);

const ICON_BY_KIND: Record<MemoryKind, ReactNode> = {
  flight: <FlightIcon />,
  hotel: <HotelIcon />,
  note: <NoteIcon />,
};

const MemoryItem = ({ item }: MemoryItemProps) => {
  return (
    <li className={styles.recentMemoriesItem}>
      <span className={styles.iconWrap}>{ICON_BY_KIND[item.kind]}</span>
      <p className={styles.recentMemoriesItemText}>{item.text}</p>
    </li>
  );
};

export default MemoryItem;
