import React from "react";
import {User} from "@nextui-org/react";

export default function UserCard() {
  return (<div className="w-full h-full text-2xl">
    <User   
      name="Jane Doe"
      description="Product Designer"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
  </div>
    
  );
}
