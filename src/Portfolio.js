import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 font-sans">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Thiruselvan E</h1>
        <p className="text-xl mt-2">Java & Python Developer</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/Thiruselvan123" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://linkedin.com/in/thiruselvan-e-813328282" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
        <a
          href="/Thiruselvan_One_Page_Resume.docx"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          download
        >
          Download Resume
        </a>
      </header>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">About Me</h2>
        <p>
          I’m an enthusiastic developer skilled in Java, Python, and C with a strong foundation in data structures,
          algorithms, and software design. I enjoy building real-time systems and web solutions. My recent internships
          helped me grow as a collaborative and creative problem-solver.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
          <li>Java, Python, C</li>
          <li>JavaScript (basic)</li>
          <li>HTML, CSS</li>
          <li>SQL, Git, Django, Flask</li>
          <li>RESTful APIs</li>
          <li>Microservices (Conceptual)</li>
          <li>Problem Solving</li>
          <li>Teamwork & Communication</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Projects</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Human Following Robot</h3>
            <p>
              Designed a robot using Arduino that tracks human movement, avoids obstacles, and adjusts paths in real-time.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Fire-Fighting Robot</h3>
            <p>
              Developed an autonomous robot that detects fire, navigates obstacles, and extinguishes flames using embedded logic.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Internships</h2>
        <ul className="list-disc list-inside">
          <li>Cloud Logic Technologies – Front-End Development Intern</li>
          <li>Techcellent Solutions – Embedded Systems Intern</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>Programming Essentials in Python – Cisco</li>
          <li>Cybersecurity Essentials – Cisco</li>
          <li>Front-End Development (HTML), Introduction to Python – Great Learning</li>
          <li>Wipro TalentNext (Java Full Stack)</li>
        </ul>
      </section>

      <footer className="text-center text-sm py-4 border-t mt-10">
        <p>Contact: thiruselvan8031@gmail.com | Phone: +91 93633 91667</p>
        <p className="mt-1">&copy; 2025 Thiruselvan E</p>
      </footer>
    </div>
  );
}