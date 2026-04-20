import Preferences from "./Preferences";
import type { PreferenceItem } from "./types";

const PLACEHOLDER_PREFERENCES: PreferenceItem[] = [
  {
    id: "hotels",
    icon: "hotels",
    text: "Boutique Hotels",
  },
  {
    id: "budget",
    icon: "budget",
    text: "Budget: $800 - $1500",
  },
  {
    id: "frequency",
    icon: "frequency",
    text: "Frequent: Miami, NYC",
  },
];

const PreferencesContainer = () => {
  return <Preferences title="Your Preferences:" items={PLACEHOLDER_PREFERENCES} />;
};

export default PreferencesContainer;
