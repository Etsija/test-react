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
            className="border rounded-md shadow-lg"
            onLayout={(sizes: number[]) => {
                setAllWidths(sizes);
            }}
        >
            <ResizablePanel defaultSize={defaultLayout[0]}>
                {/* Sidebar */}
                <div className="flex items-center justify-center h-full p-6">
                    <span className="font-semibold">Sidebar</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={defaultLayout[1]}>
                {/* Package inspector */}
                <div className="flex items-center justify-center h-full p-6">
                    <span className="font-semibold">Package Inspector</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={defaultLayout[2]}>
                {/* Code inspector */}
                <div className="flex items-center justify-center h-full p-6">
                    <span className="font-semibold">File Inspector</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={defaultLayout[3]}>
                {/* Clearance */}
                <div className="flex items-center justify-center h-full p-6">
                    <span className="font-semibold">Clearance</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};

export default MainUI;
