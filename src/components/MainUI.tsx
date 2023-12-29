import React from "react";
import useSettingsStore from "@/store/settings.store";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

type Props = {
    defaultLayout: number[];
};

const MainUI = ({ defaultLayout }: Props) => {
    const setAllWidths = useSettingsStore((state) => state.setAllWidths);

    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="rounded-md border shadow-lg"
            onLayout={(sizes: number[]) => {
                setAllWidths(sizes);
            }}
        >
            {/* Sidebar */}
            <ResizablePanel defaultSize={defaultLayout[0]}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Sidebar</span>
                </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Main UI */}

            {/* Package inspector */}
            <ResizablePanel defaultSize={defaultLayout[1]}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Package Inspector</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />

            {/* Code inspector */}
            <ResizablePanel defaultSize={defaultLayout[2]}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">File Inspector</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />

            {/* Clearance */}
            <ResizablePanel defaultSize={defaultLayout[3]}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Clearance</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};

export default MainUI;
