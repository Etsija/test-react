import dynamic from "next/dynamic";
import useSettingsStore from "@/store/settings.store";

const MainUI = dynamic(() => import("@/components/MainUI"), {
    ssr: false,
});

export default function Home() {
    const mainWidths = useSettingsStore((state) => state.mainWidths);
    const clearanceHeights = useSettingsStore(
        (state) => state.clearanceHeights,
    );

    return (
        <div className="h-screen p-2">
            <MainUI defaultLayout={mainWidths} />
        </div>
    );
}
