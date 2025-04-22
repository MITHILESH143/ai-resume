import React from 'react';

const ResumePage = () => {
  const resumeData = {
    name: "John Doe",
    title: "Full Stack Developer",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    location: "Pune, India",
    summary: "Innovative full stack developer with 4+ years of experience building scalable web apps. Passionate about clean code and intuitive UX.",
    skills: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs", "Git"],
    experience: [
      {
        role: "Senior Developer",
        company: "TechNova Solutions",
        duration: "Jan 2022 – Present",
        description: "Led frontend development for multiple B2B SaaS platforms using React and Node."
      },
      {
        role: "Junior Developer",
        company: "WebCraft",
        duration: "Jun 2020 – Dec 2021",
        description: "Developed REST APIs and admin dashboards, improving system efficiency by 30%."
      }
    ],
    education: [
      {
        degree: "B.E. in Computer Engineering",
        institute: "MIT Pune",
        year: "2016 – 2020"
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h1 className="text-3xl font-bold text-center">{resumeData.name}</h1>
      <p className="text-center text-gray-600">{resumeData.title}</p>
      <div className="flex justify-center gap-6 mt-2 text-sm text-gray-700">
        <span>{resumeData.email}</span>
        <span>{resumeData.phone}</span>
        <span>{resumeData.location}</span>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Professional Summary</h2>
        <p className="text-gray-800">{resumeData.summary}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {resumeData.skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{exp.role} – {exp.company}</p>
            <p className="text-sm text-gray-500">{exp.duration}</p>
            <p className="text-gray-800">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <p className="font-semibold">{edu.degree}</p>
            <p className="text-sm text-gray-500">{edu.institute} | {edu.year}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ResumePage;
