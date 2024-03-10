// ChatRoom.js

import { useEffect, useState } from 'react';
import { db } from '../app/firebase.js';
import { addDoc, collection, serverTimestamp,query,orderBy,getDocs,onSnapshot } from "firebase/firestore";
import {Input} from "@nextui-org/react";

const ChatRoom = ({ channelName }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const q = query(
      collection(db, 'rooms', channelName, 'messages'),
      orderBy('timestamp')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(data);
    });

    return () => unsubscribe();
  }, [channelName]);

  const sendMessage = async () => {
    if (input.trim() !== '') {
      await addDoc(collection(db, 'rooms', channelName, 'messages'), {
        text: input,
        timestamp: new Date(),
      });
      setInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <Input  type="text" variant="bordered" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;