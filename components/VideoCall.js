// VideoCall.js
'use client'
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const useVideoCall = (roomId) => {
 const [peers, setPeers] = useState([]);
 const [localStream, setLocalStream] = useState(null);
 const socketRef = useRef();

 useEffect(() => {
    console.log("1");
    socketRef.current = io.connect('http://localhost:3001/stream');
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        setLocalStream(stream);
        console.log("Second: ",localStream);
        document.getElementById('local').srcObject = stream;
        stream.getTracks().forEach(track => {
          socketRef.current.emit('stream', { roomId, track });
          console.log("Three: ",track);
        });
      });
      console.log("4");
      
    socketRef.current.on('stream', ({ stream, peerId }) => {
        console.log("FIve");
      const peer = peers.find(p => p.id === peerId);
      console.log(peerId)
      if (peer) {
        peer.stream = stream;
      } else {
        setPeers(peers => [...peers, { id: peerId, stream }]);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
 }, [roomId]);

 return { peers, localStream };
};

const VideoCall = ({ roomId }) => {
 const { peers, localStream } = useVideoCall(roomId);

 return (
    <div>
      <video id="local" autoPlay muted></video>
      {peers.map(peer => (
        <video key={peer.id} autoPlay></video>
      ))}
    </div>
 );
};

export default VideoCall;
