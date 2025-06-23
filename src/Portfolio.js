import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 p-4 font-sans transition-colors duration-300">

      <header className="text-center py-10 relative">
        <h1 className="text-4xl font-bold">Thiruselvan E</h1>
        <button
          onClick={() => {
            document.documentElement.classList.toggle("dark");
          }}
          className="absolute top-4 right-4 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm shadow"
        >
          Toggle Dark Mode
        </button>

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
          href="Thiruselvan_Updated_Resume.pdf"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          target="_blank"
          rel="noopener noreferrer"
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

      <section className="max-w-4xl mx-auto mb-10 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded shadow p-4 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
            <img
              src="/images/robot-card.png"
              alt="Human Following Robot"
              className="rounded mb-3 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="font-bold text-lg">Human Following Robot</h3>
            <p className="text-sm mb-2">Real-time path tracking and obstacle avoidance using Arduino.</p>
            <div className="flex gap-4">
              <a href="https://github.com/Thiruselvan123" target="_blank" className="text-blue-600 dark:text-blue-400 text-sm underline">GitHub</a>
              <a href="#" className="text-blue-600 dark:text-blue-400 text-sm underline">Live Demo</a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded shadow p-4 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
            <img
              src="/images/fire-robot-card.png"
              alt="Fire-Fighting Robot"
              className="rounded mb-3 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="font-bold text-lg">Fire-Fighting Robot</h3>
            <p className="text-sm mb-2">Autonomous robot that detects fire and extinguishes flames with embedded logic.</p>
            <div className="flex gap-4">
              <a href="https://github.com/Thiruselvan123" target="_blank" className="text-blue-600 dark:text-blue-400 text-sm underline">GitHub</a>
              <a href="#" className="text-blue-600 dark:text-blue-400 text-sm underline">Live Demo</a>
            </div>
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

      <section className="max-w-2xl mx-auto mb-10" id="contact">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Contact Me</h2>
        <form action="https://formspree.io/f/xkgbqzvw" method="POST" className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" name="name" required className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" name="email" required className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea name="message" rows="4" required className="w-full px-3 py-2 border rounded" />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="text-center text-sm py-4 border-t mt-10">
        <p>Contact: thiruselvan8031@gmail.com | Phone: +91 93633 91667</p>
        <p className="mt-1">&copy; 2025 Thiruselvan E</p>
      </footer>
    </div>
  );
}
