// pages/index.js
import FileUpload from '../../components/UploadFiles.jsx';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload File</h1>
      <FileUpload />
    </div>
  );
}
