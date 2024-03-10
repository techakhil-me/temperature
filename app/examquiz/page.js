'use client';
import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Player, Controls } from "@lottiefiles/react-lottie-player"
export default function App() {
 return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row justify-center w-full">
        <div className="flex-1 mr-4"> {/* Add margin to the right */}
          <RadioGroup
            label="Your Goals to Crack Exam"
          >
            <Radio value="engineering">Engineering</Radio>
            <Radio value="medical">Medical</Radio>
            <Radio value="civil-services">Civil Services</Radio>
            <Radio value="ca">CA</Radio>
            <Radio value="defence-entrance">Defence Entrance</Radio>
            <Radio value="law">Law Entrance</Radio>
            <Radio value="banking">Banking Exams</Radio>
            <Radio value="mba">MBA Entrance</Radio>
            <Radio value="else">Else</Radio>
          </RadioGroup>
        </div>
      </div>
      <div className="absolute top-1/2 right-1 transform translate-y-(-25%)">
        <Player
          autoplay
          speed={1.5}
          loop
          src="https://lottie.host/a021a71b-7b94-4390-bbbe-99c64e7f1473/6EPaja3pLi.json"
          style={{ height: "300px", width: "300px" }}
        />
      </div>
    </div>
 );
}
