import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="p-5 bg-gray-800 text-start text-xl font-semibold shadow-lg">
        <Header />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl font-extrabold text-blue-400">Hi, I'm Shrey Sharma</h1>
        <p className="text-lg mt-3 text-gray-300">A passionate DevOps Engineer from Poornima University, Jaipur.</p>
        <Link href="/about" className="mt-6 px-8 py-3 bg-blue-600 rounded-full text-white shadow-md hover:bg-blue-700 transition">
          About Me
        </Link>
      </section>

      {/* Skills Section */}
      <section className="p-10 bg-gray-800 rounded-lg shadow-md m-6">
        <h2 className="text-3xl font-bold text-center mb-6">Technical Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          <li className="bg-gray-700 p-4 rounded-lg shadow-md">Docker & Kubernetes</li>
          <li className="bg-gray-700 p-4 rounded-lg shadow-md">AWS Cloud</li>
          <li className="bg-gray-700 p-4 rounded-lg shadow-md">Jenkins & CI/CD</li>
          <li className="bg-gray-700 p-4 rounded-lg shadow-md">Terraform</li>
          <li className="bg-gray-700 p-4 rounded-lg shadow-md">Ansible</li>
          <li className="bg-gray-700 p-4 rounded-lg shadow-md">Shell & Python Scripting</li>
          <li className="bg-gray-700 p-4 rounded-lg shadow-md">Monitoring & Logging (Prometheus, Grafana, ELK Stack)</li>
          <li className="bg-gray-700 p-4 rounded-lg shadow-md">Git & Version Control</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["TUI (Text-Based UI)", "Blog Website (Docker)", "Configuration Management", "Deploy Kubernetes using Jenkins", "Build CI/CD Pipeline", "Containerizing Applications"].map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-blue-300">{project}</h3>
              <p className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold">Resume</h2>
        <div className="mt-4">
          <a href="/Shrey_Sharma_Resume.pdf" download="Shrey_Sharma_Resume.pdf" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-10 text-center bg-gray-800 rounded-lg shadow-md m-6">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://github.com/Shreysharma7014" target="_blank" className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/shrey-sharma-39562a245" target="_blank" className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition">LinkedIn</a>
          <a href="mailto:shreysharma701425@gmail.com" className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition">Email</a>
        </div>
      </section>
    </div>
  );
}
