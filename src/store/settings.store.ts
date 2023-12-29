import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
    widths: number[];
};

type Actions = {
    setAllWidths: (newWidths: number[]) => void;
};

const useSettingsStore = create<State & Actions>()(
    persist(
        (set) => ({
            widths: [7, 25, 53, 15],
            setAllWidths: (newWidths) => set({ widths: newWidths }),
        }),
        {
            name: "layout-storage",
        },
    ),
);

export default useSettingsStore;
