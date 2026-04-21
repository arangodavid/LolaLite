export type MemoryKind = "flight" | "hotel" | "note";

export type MemoryItem = {
  id: string;
  kind: MemoryKind;
  text: string;
};
