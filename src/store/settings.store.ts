import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
    mainWidths: number[];
    clearanceHeights: number[];
};

type Actions = {
    setMainWidths: (w: number[]) => void;
    setClearanceHeights: (h: number[]) => void;
};

const useSettingsStore = create<State & Actions>()(
    persist(
        (set) => ({
            mainWidths: [7, 25, 53, 15],
            setMainWidths: (w) => set({ mainWidths: w }),
            clearanceHeights: [20, 30, 10],
            setClearanceHeights: (h) => set({ clearanceHeights: h }),
        }),
        {
            name: "layout-storage",
        },
    ),
);

export default useSettingsStore;
