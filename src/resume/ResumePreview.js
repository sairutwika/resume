// src/resume/ResumePreview.js
import React from 'react';

const ResumePreview = ({ formData }) => {
  return (
    <div className="mt-4 border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{formData.name}</h2>
      <h3 className="text-lg font-semibold">Experience</h3>
      <p>{formData.experience}</p>
      <h3 className="text-lg font-semibold">Education</h3>
      <p>{formData.education}</p>
      <h3 className="text-lg font-semibold">Skills</h3>
      <p>{formData.skills}</p>
      <h3 className="text-lg font-semibold">GitHub</h3>
      <p>{formData.github}</p>
      <h3 className="text-lg font-semibold">LinkedIn</h3>
      <p>{formData.linkedin}</p>
      <h3 className="text-lg font-semibold">Projects</h3>
      <p>{formData.projects}</p>
    </div>
  );
};

export default ResumePreview;
