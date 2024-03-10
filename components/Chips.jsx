import React from "react";
import {Chip} from "@nextui-org/react";

export default function Chips({interest}) {
  return (
    <Chip

      variant="shadow"
      classNames={{
        base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
        content: "drop-shadow shadow-black text-white",
      }}
    >{interest}
    </Chip>
  );
}
