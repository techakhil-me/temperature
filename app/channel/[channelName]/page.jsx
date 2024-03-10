
"use client"
import Call from "@/components/Call";
import Chat from "@/components/Chat";

import { UserAuth } from "../../context/AuthContext.js";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useEffect } from "react";

export default function Page({ params }) {
  const { user, googleSignIn, logOut, register } = UserAuth();
  useEffect(()=>{console.log(user)},[user])
    return (
        <PanelGroup direction="horizontal" id="group" className="gap-2">
      <Panel id="right-panel" defaultSize={80}>
          <Card className="shadow-none h-full">
            <CardBody>
            <Call appId={"84bf5c1d70124d48a05bc485867b19e2"} channelName={params.channelName}></Call>
            </CardBody>
          </Card>  
      </Panel>
      <PanelResizeHandle
        id="resize-handle"
        className="bg-gray-200 w-1 h-20 my-auto rounded"
      />
      <Panel
        id="left-panel"
        defaultSize={20}
        collapsible
        className="flex flex-col gap-8"
      >
         <Card className="shadow-none h-full">
            <CardBody>
            <Chat appId={"51dc4c3e3d284f9d8944d4b2e7218604"} channelName={params.channelName}></Chat>
            </CardBody>
          </Card>  
      </Panel>
    </PanelGroup>
    )
}