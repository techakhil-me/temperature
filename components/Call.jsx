"use client"


import AgoraRTC, {
  AgoraRTCProvider,
  LocalVideoTrack,
  RemoteUser,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRTCClient,
  useRemoteAudioTracks,
  useRemoteUsers,
} from "agora-rtc-react";
import { useState } from "react";


function Call(props) {
  const client = useRTCClient(
    AgoraRTC.createClient({ codec: "vp8", mode: "rtc" })
  );



  return (
    <AgoraRTCProvider client={client}>
      <Videos channelName={props.channelName} AppID={props.appId} />
      {/* <div className="fixed z-10 bottom-0 left-0 right-0 flex justify-center pb-4">
        <a
          className="px-5 py-3 text-base font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-40"
          href="/"
        >
          End Call
        </a>
      </div> */}
    </AgoraRTCProvider>
  );
}

function Videos(props) {
  const { AppID, channelName } = props;
  const { isLoading: isLoadingMic, localMicrophoneTrack } =
    useLocalMicrophoneTrack();
  const { isLoading: isLoadingCam, localCameraTrack } = useLocalCameraTrack(1);
  const remoteUsers = useRemoteUsers();
  const { audioTracks } = useRemoteAudioTracks(remoteUsers);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);


  usePublish([localMicrophoneTrack, localCameraTrack]);
  useJoin({
    appid: AppID,
    channel: channelName,
    token: null,
  });

  audioTracks.map((track) => track.play());
  const deviceLoading = isLoadingMic || isLoadingCam;
  if (deviceLoading)
    return (
      <div className="flex flex-col items-center pt-40">Loading devices...</div>
    );
  const unit = "minmax(0, 1fr) ";


  const toggleVideo = () => {
    if (localCameraTrack) {
      if (videoEnabled) {
        localCameraTrack.setEnabled(false);
      } else {
        localCameraTrack.setEnabled(true);
      }
      setVideoEnabled(!videoEnabled);
    }
  };



  const toggleAudio = () => {
    if (localMicrophoneTrack) {
      if (audioEnabled) {
        localMicrophoneTrack.setEnabled(false);
      } else {
        localMicrophoneTrack.setEnabled(true);
      }
      setAudioEnabled(!audioEnabled);
    }
  };

  return (
    <div className="flex flex-col justify-between w-full h-full relative">
      <div
        className={`grid  gap-1 flex-1`}
        style={{
          gridTemplateColumns:
            remoteUsers.length > 9
              ? unit.repeat(4)
              : remoteUsers.length > 4
              ? unit.repeat(3)
              : remoteUsers.length > 1
              ? unit.repeat(2)
              : unit,
        }}
      >
       {videoEnabled && <LocalVideoTrack
          track={localCameraTrack}
          play={true}
          className="w-full h-full rounded-lg"
        />}
        {remoteUsers.map((user) => (
          <RemoteUser user={user} className="rounded-lg"/>
        ))}
      </div>


      <div className="absolute p-4 bottom-0 left-0 z-10">
      <button
          className="px-4 py-2 mr-4 bg-blue-500 text-white rounded-lg focus:outline-none focus:bg-blue-600"
          onClick={toggleVideo}
        >
          {videoEnabled ? "Turn Off Video" : "Turn On Video"}
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:bg-blue-600"
          onClick={toggleAudio}
        >
          {audioEnabled ? "Mute Audio" : "Unmute Audio"}
        </button>
      </div>
    </div>
  );
}

export default Call;