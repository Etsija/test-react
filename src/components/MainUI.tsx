import React from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

const MainUI = () => {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="rounded-md border shadow-lg"
        >
            {/* Sidebar */}
            <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Sidebar</span>
                </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Main UI */}
            <ResizablePanel defaultSize={75}>
                <ResizablePanelGroup direction="horizontal">
                    {/* Package inspector */}
                    <ResizablePanel defaultSize={25}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">
                                Package Inspector
                            </span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />

                    {/* Code inspector */}
                    <ResizablePanel defaultSize={50}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">
                                File Inspector
                            </span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />

                    {/* Clearance */}
                    <ResizablePanel defaultSize={25}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Clearance</span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};

export default MainUI;
