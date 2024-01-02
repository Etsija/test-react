import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
    mainWidths: number[];
};

type Actions = {
    setMainWidths: (w: number[]) => void;
};

const useSettingsStore = create<State & Actions>()(
    persist(
        (set) => ({
            mainWidths: [7, 25, 53, 15],
            setMainWidths: (w) => set({ mainWidths: w }),
        }),
        {
            name: "layout-storage",
        },
    ),
);

export default useSettingsStore;
