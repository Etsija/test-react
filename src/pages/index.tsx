import dynamic from "next/dynamic";
import useSettingsStore from "@/store/settings.store";

const MainUI = dynamic(() => import("@/components/MainUI"), {
    ssr: false,
});

export default function Home() {
    const widths = useSettingsStore((state) => state.widths);

    return (
        <div className="h-screen p-2">
            <MainUI defaultLayout={widths} />
        </div>
    );
}
