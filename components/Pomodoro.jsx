import { Button } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import {Progress} from "@nextui-org/react";

const PomodoroTimer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(0);
    const [isBreak, setIsBreak] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
      let interval = null;
  
      if (isActive) {
        interval = setInterval(() => {
          if (seconds === 0) {
            if (minutes === 0) {
              if (hours === 0) {
                toggleBreak();
              } else {
                setHours(hours => hours - 1);
                setMinutes(59);
                setSeconds(59);
              }
            } else {
              setMinutes(minutes => minutes - 1);
              setSeconds(59);
            }
          } else {
            setSeconds(seconds => seconds - 1);
          }
        }, 1000);
      } else if (!isActive && (seconds !== 0 || minutes !== 0 || hours !== 0)) {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [isActive, hours, minutes, seconds]);
  
    const toggleTimer = () => {
      setIsActive(!isActive);
    };
  
    const resetTimer = () => {
      setHours(0);
      setMinutes(10);
      setSeconds(0);
      setIsActive(false);
      setIsBreak(false);
    };
  
    const toggleBreak = () => {
      if (isBreak) {
        setHours(0);
        setMinutes(10);
      } else {
        setHours(0);
        setMinutes(5);
      }
      setSeconds(0);
      setIsActive(false);
      setIsBreak(!isBreak);
    };
  
    const formatTime = (time) => {
      return time < 10 ? `0${time}` : time;
    };
    
    useEffect(() => {
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        const totalTime = isBreak ? 5 * 60 : 10 * 60;
        const consumedPercentage = Math.floor((totalTime - totalSeconds) / totalTime * 100);
        setPercentage(consumedPercentage);
      }, [hours, minutes, seconds, isBreak]);

  return (

    <Card className="py-2 shadow-none">
          <CardHeader className="pb-0 pt-2 px-4 flex items-start justify-between">
            <h4 className="font-bold text-large">Pomodoro</h4>
            <p> {isBreak? "Break" : "Focus"}</p>
          </CardHeader>
          <CardBody className="overflow-visible py-0 px-4">
          <div>
      <h3 className='text-4xl font-bold pt-4 flex-col'>
      <p>{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</p>
      <Progress size="sm" aria-label="Loading..." value={percentage}  color="success" />
      </h3>
      <div className="flex gap-4 py-2">
      <Button
          className={isActive ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isActive ? "bordered" : "solid"}
          onPress={toggleTimer}
        >
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button
          color="warning"
          radius="full"
          size="sm"
          onPress={resetTimer}
        >
          Reset
        </Button>
      </div>
    </div>
          </CardBody>
        </Card>
  
  );
};

export default PomodoroTimer;