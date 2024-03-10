"use client"
// import React, { useEffect, useRef, useState } from 'react';
// import Peer from 'peerjs';

// function page() {

// const [peerId, setPeerId] = useState('');
// const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
// const remoteVideoRef = useRef(null);
// const currentUserVideoRef = useRef(null);
// const peerInstance = useRef(null);


// useEffect(() => {
//     const peer = new Peer();

//     peer.on('open', (id) => {
//       setPeerId(id)
//     });

//     peer.on('call', (call) => {
//       var getUserMedia = navigator.getUserMedia 
//       || navigator.webkitGetUserMedia 
//       || navigator.mozGetUserMedia;

//       getUserMedia({ video: true, audio: true }, (mediaStream) => {
//         currentUserVideoRef.current.srcObject = mediaStream;
//         currentUserVideoRef.current.play();
//         call.answer(mediaStream)
//         call.on('stream', function(remoteStream) {
//           remoteVideoRef.current.srcObject = remoteStream
//           remoteVideoRef.current.play();
//         });
//       });
//     })
//   peerInstance.current = peer;
//   }, [])


//   const call = (remotePeerId) => {
//     var getUserMedia = navigator.getUserMedia 
//     || navigator.webkitGetUserMedia 
//     || navigator.mozGetUserMedia;

//     getUserMedia({ video: true, audio: true }, (mediaStream) => {

//       currentUserVideoRef.current.srcObject = mediaStream;
//       currentUserVideoRef.current.play();

//       const call = peerInstance.current.call(remotePeerId, mediaStream)

//       call.on('stream', (remoteStream) => {
//         remoteVideoRef.current.srcObject = remoteStream
//         remoteVideoRef.current.play();
//       });
//     });
//   }

//   return (
//     <div className="App">
//       <h1>Current user id is {peerId}</h1>
//       <input type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} />
//       <button onClick={() => call(remotePeerIdValue)}>Call</button>
//       <div>
//         <video ref={currentUserVideoRef} />
//       </div>
//       <div>
//         <video ref={remoteVideoRef} />
//       </div>
//     </div>
//   )
// }

// export default page


import React, { useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';
import { io } from 'socket.io-client';
import Video from '@/components/Video';


const page = () => {
    const localVideoRef = useRef();
    const [streams, setStreams] = useState([]);



//   const socket = io('http://localhost:3001/') // Create our socket

  const ROOM_ID = "1234"
  const myPeer = new Peer()
  const socket = io('https://b8b5-14-139-125-227.ngrok-free.app', {  transports: ['websocket', 'polling', 'flashsocket'] })


  const updateItem = (id,stream) => {
    const updatedUsers = streams.filter(s => s.id !== id);
    setStreams([...updatedUsers,stream])
    }

  

  const  start = () => {



 // Creating a peer element which represents the current user
// const myVideo = document.createElement('video') // Create a new video tag to show our video
// myVideo.muted = true // Mute ourselves on our end so there is no feedback loop

// Access the user's video and audio
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    // addVideoStreasam(myVideo, stream) // Display our video to ourselves
    localVideoRef.current.srcObject = stream;
    myPeer.on('call', call => { // When we join someone's room we will receive a call from them
        call.answer(stream) // Stream them our video/audio
        // const video = document.createElement('video') // Create a video tag for them
       call.on('stream', userVideoStream => {
        updateItem(userVideoStream.id,userVideoStream)
        // setStreams(prevStreams => [...prevStreams, userVideoStream]);
      });   
    })

    socket.on('user-connected', userId => { // If a new user connect
        connectToNewUser(userId, stream) 
    })
//     socket.on("disconnect", (socketId) => {
//         // handle disconnection
//         alert(`Userid: ${socketId} has disconnected`);     
//         socket.disconnect(); // Manually disconnects the socket
//    });
})

myPeer.on('open', id => { 
    console.log(id) // When we first open the app, have us join a room
    socket.emit('join-room', ROOM_ID, id)
})


}


function connectToNewUser(userId, stream) { // This runs when someone joins our room
    const call = myPeer.call(userId, stream) // Call the user who just joined
    // Add their video
    call.on('stream', userVideoStream => {
        updateItem(userVideoStream.id,userVideoStream)

        // setStreams(prevStreams => [...prevStreams, userVideoStream]);
      });
    // If they leave, remove their video
    // call.on('close', () => {
    //     video.remove()
    // })
}
    
  useEffect(() => {

    console.log("hello")
    start(socket) 
    // return () => {socket.disconnect();}
     }, []);
    

       
  useEffect(() => {
    console.log(streams)
     }, [streams]);
 

  return (
    <div>
        <video ref={localVideoRef} autoPlay muted></video>
      <div id="video-grid">
      {streams.map((stream, index) => (<>
          <Video key={index} stream={stream} />
          </>
        ))}</div>   
    </div>
  );
};

export default page;
