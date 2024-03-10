// components/FileUpload.js
'use client'
import { useState } from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../app/firebase.js';
import firebase from 'firebase/app';



const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const storage = getStorage();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file);
    console.log('File uploaded');
 };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
