// src/zustand/useModeStore.js
import { create } from "zustand";

const useStore = create((set) => ({
  refreshScorecard: false,

  setRefreshScorecard: () =>
    set((state) => ({
      refreshScorecard: !state.refreshScorecard, // Toggle the current value
    })),
}));

export default useStore;
