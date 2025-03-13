import { useState } from "react";
import axios from "axios";

function MedicalReportPage() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file!");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data.text); // Assuming API returns extracted text
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to process the file.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-xl font-bold">Upload Medical Report</h2>
      <input type="file" onChange={handleFileChange} className="border p-2" />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">
        Process Report
      </button>
      {result && <p className="mt-4 p-2 border">{result}</p>}
    </div>
  );
}

export default MedicalReportPage;
