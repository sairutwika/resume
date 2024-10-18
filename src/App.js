import React, { useState } from 'react';
import Header from './resume/Header';
import ResumeForm from './resume/ResumeForm';
import ResumePreview from './resume/ResumePreview';
import Footer from './resume/Footer';
import { saveAs } from 'file-saver';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    education: '',
    skills: '',
    github: '',
    linkedin: '',
    projects: '',
  });
  const [isResumeVisible, setIsResumeVisible] = useState(false);

  const handleSaveResume = () => {
    setIsResumeVisible(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      experience: '',
      education: '',
      github: '',
      linkedin: '',
      projects: '',
      skills: '',
    });
    setIsResumeVisible(false);
  };

  const handleDownloadResume = () => {
    const resumeContent = `
      Name: ${formData.name}
      Experience: ${formData.experience}
      Education: ${formData.education}
      Skills: ${formData.skills}
      GitHub: ${formData.github}
      LinkedIn: ${formData.linkedin}
      Projects: ${formData.projects}
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'resume.txt');
  };

  return (
    <div
      className="App bg-cover bg-center h-screen w-full"
      style={{
        height:"100vh",
        backgroundSize:"cover",
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGReB8_cotqP5lruw1fdTM95jHaz7afHWWA&s')",
      }}
    >
      <Header />

      <div className="bg-white bg-opacity-90 p-6 rounded shadow-lg max-w-lg mx-auto mt-10">
        <ResumeForm formData={formData} setFormData={setFormData} />

        <div className="text-center mt-4 space-x-4">
          <button
            onClick={handleSaveResume}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button
            onClick={handleReset}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Reset
          </button>
          <button
            onClick={handleDownloadResume}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Download Resume
          </button>
        </div>

        {isResumeVisible && <ResumePreview formData={formData} />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
