import { useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

const GroupCallPage = () => {
 useEffect(() => {
    const joinChannel = async () => {
      const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
      await client.join('YOUR_APP_ID', 'YOUR_CHANNEL_NAME', 'YOUR_TOKEN', null);
      const localTrack = await AgoraRTC.createMicrophoneAndCameraTracks();
      await client.publish(localTrack);
      client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === 'video') {
          const remoteVideoTrack = user.videoTrack;
          remoteVideoTrack.play('video-grid');
        }
      });
    };

    joinChannel().catch(console.error);
 }, []);

 return (
    <div id="video-grid"></div>
 );
};

export default GroupCallPage;
