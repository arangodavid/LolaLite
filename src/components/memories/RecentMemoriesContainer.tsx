import RecentMemories from "./RecentMemories";
import type { MemoryItem } from "./types";

// Replace with API fetch once the memories endpoint is available.
const MOCK_MEMORIES: MemoryItem[] = [
  {
    id: "flight-mia-delta",
    kind: "flight",
    text: "Flight to Miami - Delta Airlines",
  },
  {
    id: "hotel-standard",
    kind: "hotel",
    text: "Stay at The Standard Hotel",
  },
  {
    id: "pref-walkable",
    kind: "note",
    text: '"Prefer walkable neighborhoods"',
  },
];

const RecentMemoriesContainer = () => {
  return <RecentMemories title="Recent Memories" items={MOCK_MEMORIES} />;
};

export default RecentMemoriesContainer;
