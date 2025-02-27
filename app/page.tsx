import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="p-5 bg-gray-800 text-start text-xl font-semibold shadow-lg">
        <Header />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-10 lg:px-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400">Hi, I'm Shrey Sharma</h1>
        <p className="text-lg mt-3 text-gray-300 max-w-screen-md">
          A passionate DevOps Engineer from Poornima University, Jaipur.
        </p>
        <Link href="/about" className="mt-6 px-6 py-3 bg-blue-600 rounded-full text-white shadow-md hover:bg-blue-700 transition">
          About Me
        </Link>
      </section>

      {/* Skills Section */}
      <section className="p-6 md:p-10 bg-gray-800 rounded-lg shadow-md m-4 md:m-6">
        <h2 className="text-3xl font-bold text-center mb-6">Technical Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          {["Docker & Kubernetes", "AWS Cloud", "Jenkins & CI/CD", "Terraform", "Ansible", "Shell & Python Scripting", "Monitoring & Logging (Prometheus, Grafana, ELK Stack)", "Git & Version Control"].map((skill, index) => (
            <li key={index} className="bg-gray-700 p-4 rounded-lg shadow-md">{skill}</li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["TUI (Text-Based UI)", "Blog Website (Docker)", "Configuration Management", "Deploy Kubernetes using Jenkins", "Build CI/CD Pipeline", "Containerizing Applications"].map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-blue-300">{project}</h3>
              <p className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="p-6 md:p-10 text-center">
        <h2 className="text-3xl font-bold">Resume</h2>
        <div className="mt-4">
          <a href="/Shrey_Sharma_Resume.pdf" download="Shrey_Sharma_Resume.pdf" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-6 md:p-10 text-center bg-gray-800 rounded-lg shadow-md m-4 md:m-6">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="https://github.com/Shreysharma7014" target="_blank" className="bg-gray-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/shrey-sharma-39562a245" target="_blank" className="bg-gray-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition">LinkedIn</a>
          <a href="mailto:shreysharma701425@gmail.com" className="bg-gray-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition">Email</a>
        </div>
      </section>

      {/* Tidio Chat Script */}
      <Script src="//code.tidio.co/yscqb4g3h4fwtkamraz6xgmus3q72irm.js" strategy="lazyOnload" />
    </div>
  );
}
