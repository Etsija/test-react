import React from "react";
import useSettingsStore from "@/store/settings.store";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

type Props = {
    defaultMainWidths: number[];
    defaultClearanceHeights: number[];
};

const MainUI = ({ defaultMainWidths, defaultClearanceHeights }: Props) => {
    const setMainWidths = useSettingsStore((state) => state.setMainWidths);
    const setClearanceHeights = useSettingsStore(
        (state) => state.setClearanceHeights,
    );

    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="border"
            onLayout={(sizes: number[]) => {
                setMainWidths(sizes);
            }}
        >
            <ResizablePanel defaultSize={defaultMainWidths[0]}>
                {/* Sidebar */}
                <div className="flex items-center justify-center h-full p-6">
                    <span className="font-semibold">Sidebar</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={defaultMainWidths[1]}>
                {/* Package inspector */}
                <div className="flex items-center justify-center h-full p-6">
                    <span className="font-semibold">Package Inspector</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={defaultMainWidths[2]}>
                {/* Code inspector */}
                <div className="flex items-center justify-center h-full p-6">
                    <span className="font-semibold">File Inspector</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={defaultMainWidths[3]}>
                {/* Clearance */}
                <ResizablePanelGroup
                    direction="vertical"
                    onLayout={(sizes: number[]) => {
                        setClearanceHeights(sizes);
                    }}
                >
                    <ResizablePanel defaultSize={defaultClearanceHeights[0]}>
                        <div className="flex items-center justify-center h-full p-6">
                            <span className="font-semibold">
                                Detected license
                            </span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={defaultClearanceHeights[1]}>
                        <div className="flex items-center justify-center h-full p-6">
                            <span className="font-semibold">
                                Individual license matches
                            </span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={defaultClearanceHeights[2]}>
                        <div className="flex items-center justify-center h-full p-6">
                            <span className="font-semibold">
                                Concluded license
                            </span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel>
                        <div className="flex items-center justify-center h-full p-6">
                            <span className="font-semibold">
                                Create a license conclusion
                            </span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};

export default MainUI;
