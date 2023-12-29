import dynamic from "next/dynamic";

const MainUI = dynamic(() => import("@/components/MainUI"), {
    ssr: false,
});

export default function Home() {
    return (
        <div className="h-screen p-2">
            <MainUI />
        </div>
    );
}
