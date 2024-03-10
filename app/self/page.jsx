"use client";
import React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import PomodoroTimer from "@/components/Pomodoro";
import Todo from "@/components/Todo";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Board from "@/components/Board";
import Music from "@/components/Music";
import FileUpload from '../../components/UploadFiles.jsx'

function Page() {
  return (
    <PanelGroup direction="horizontal" id="group" className="gap-2">
      <Panel id="right-panel" defaultSize={80}>
        

      <div className="flex w-full h-full flex-col">
      <Tabs aria-label="Options" className="shadow-none relative">
        <Tab key="music" title="Music" className="h-full">
          <Music/>
        </Tab>
        <Tab key="jamboard" title="Jamboard" className="h-full">
          <Board/>
        </Tab>
        <Tab key="resources" title="Resources" className="h-full">
          <Card className="shadow-none h-full">
            <CardBody>
              <div className="flex flex-col justify-center gap-64">
                <div>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div><FileUpload/></div>
              </div>
              
              
            </CardBody>
          </Card>
          
        </Tab>
      </Tabs>
    </div>  
      </Panel>
      <PanelResizeHandle
        id="resize-handle"
        className="bg-gray-200 w-1 h-20 my-auto rounded"
      />
      <Panel
        id="left-panel"
        defaultSize={20}
        minSize={12}
        maxSize={20}
        collapsible
        className="flex flex-col gap-8"
      >
        <PomodoroTimer />
        <Todo style={{ margin: "8px 0" }} />
      </Panel>
    </PanelGroup>
  );
}

export default Page;
