// src/resume/ResumeForm.js
import React from 'react';

const ResumeForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        placeholder="Experience"
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        name="education"
        value={formData.education}
        onChange={handleChange}
        placeholder="Education"
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        placeholder="Skills"
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        name="github"
        value={formData.github}
        onChange={handleChange}
        placeholder="GitHub URL"
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        name="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
        placeholder="LinkedIn URL"
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        name="projects"
        value={formData.projects}
        onChange={handleChange}
        placeholder="Projects"
        className="border p-2 rounded w-full mb-2"
      />
    </div>
  );
};

export default ResumeForm;
