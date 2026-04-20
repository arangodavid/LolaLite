export type PreferenceIconId = "hotels" | "budget" | "frequency";

export type PreferenceItem = {
  id: string;
  icon: PreferenceIconId;
  text: string;
};
