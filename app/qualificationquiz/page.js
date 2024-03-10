'use client';
import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { colleges } from "./data";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
 <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
    <RadioGroup label="Are you a High School or University student?">
      <Radio value="high-school">High School</Radio>
      <Radio value="university-bachelor">University (Bachelor)</Radio>
      <Radio value="university-master">University (Master)</Radio>
      <Radio value="else">Else</Radio>
    </RadioGroup>
 </div>
 <div className="mt-4">
    <Textarea label="College Name" placeholder="Enter your College Name" className="max-w-xs w-full" maxRows={1} size="lg" />
 </div>
</div>

      <div className="absolute top-[50px] right-[200px]">
        <Player
          autoplay
          speed={1.5}
          loop
          src="https://lottie.host/a021a71b-7b94-4390-bbbe-99c64e7f1473/6EPaja3pLi.json"
          style={{ height: "600px", width: "600px" }}
        />
      </div>
    </>
  );
}
