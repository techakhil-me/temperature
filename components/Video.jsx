"use client"
import React, { useEffect, useRef, useState } from 'react';

export default function Video({ stream }) {
    const videoRef = useRef();
  
    useEffect(() => {
      if (stream) {
        videoRef.current.srcObject = stream;
      }
    }, [stream]);
  
    return <video ref={videoRef} autoPlay muted />;
  }