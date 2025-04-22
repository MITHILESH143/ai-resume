"use client"


import { useState } from "react";

export default function ResumeBuilder() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
  });

  const [education, setEducation] = useState([{ school: "", degree: "", year: "" }]);
  const [experience, setExperience] = useState([{ company: "", role: "", duration: "" }]);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEducationChange = (index, e) => {
    const updated = [...education];
    updated[index][e.target.name] = e.target.value;
    setEducation(updated);
  };

  const handleExperienceChange = (index, e) => {
    const updated = [...experience];
    updated[index][e.target.name] = e.target.value;
    setExperience(updated);
  };

  const addEducation = () => setEducation([...education, { school: "", degree: "", year: "" }]);
  const addExperience = () => setExperience([...experience, { company: "", role: "", duration: "" }]);

  const removeEducation = (index) => setEducation(education.filter((_, i) => i !== index));
  const removeExperience = (index) => setExperience(experience.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullResume = { ...form, education, experience };
    console.log("Resume Data:", fullResume);
    // Save to backend or send to AI API here
  };

  return (
    <>
    
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Resume Builder</h2>
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Basic Info */}
            <div>
              <label className="block font-medium">Full Name</label>
              <input name="fullName" onChange={handleFormChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label>Email</label>
                <input name="email" type="email" onChange={handleFormChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label>Phone</label>
                <input name="phone" onChange={handleFormChange} className="w-full border rounded px-3 py-2" />
              </div>
            </div>

            {/* Summary */}
            <div>
              <label>Professional Summary</label>
              <textarea name="summary" onChange={handleFormChange} rows={3} className="w-full border rounded px-3 py-2" />
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              {education.map((item, index) => (
                <div key={index} className="grid md:grid-cols-3 gap-4 mb-3">
                  <input name="school" placeholder="School" value={item.school} onChange={(e) => handleEducationChange(index, e)} className="border px-3 py-2 rounded" />
                  <input name="degree" placeholder="Degree" value={item.degree} onChange={(e) => handleEducationChange(index, e)} className="border px-3 py-2 rounded" />
                  <input name="year" placeholder="Year" value={item.year} onChange={(e) => handleEducationChange(index, e)} className="border px-3 py-2 rounded" />
                  {education.length > 1 && (
                    <button type="button" onClick={() => removeEducation(index)} className="text-red-500">Remove</button>
                  )}
                </div>
              ))}
              <button type="button" onClick={addEducation} className="text-blue-600">+ Add Education</button>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              {experience.map((item, index) => (
                <div key={index} className="grid md:grid-cols-3 gap-4 mb-3">
                  <input name="company" placeholder="Company" value={item.company} onChange={(e) => handleExperienceChange(index, e)} className="border px-3 py-2 rounded" />
                  <input name="role" placeholder="Role" value={item.role} onChange={(e) => handleExperienceChange(index, e)} className="border px-3 py-2 rounded" />
                  <input name="duration" placeholder="Duration" value={item.duration} onChange={(e) => handleExperienceChange(index, e)} className="border px-3 py-2 rounded" />
                  {experience.length > 1 && (
                    <button type="button" onClick={() => removeExperience(index)} className="text-red-500">Remove</button>
                  )}
                </div>
              ))}
              <button type="button" onClick={addExperience} className="text-blue-600">+ Add Experience</button>
            </div>

            {/* Skills */}
            <div>
              <label>Skills (comma separated)</label>
              <input name="skills" onChange={handleFormChange} className="w-full border rounded px-3 py-2" />
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
              Save Resume
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
