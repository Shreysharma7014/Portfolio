import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image
            src="/shrey_sharma.jpg" // Move your image to the public folder and rename it
            alt="Shrey Sharma"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Shrey Sharma</h2>
          <p className="mb-4">
            I am a DevOps Engineer passionate about automating infrastructure, optimizing CI/CD pipelines, 
            and ensuring smooth deployment workflows. With hands-on experience in cloud platforms and container orchestration, 
            I strive to enhance system reliability and scalability.
          </p>
          <p className="mb-4">
            My expertise includes:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Cloud Platforms (AWS, Azure, Google Cloud)</li>
            <li>Infrastructure as Code (Terraform, Ansible)</li>
            <li>CI/CD Pipelines (Jenkins, GitHub Actions, GitLab CI)</li>
            <li>Containerization (Docker, Kubernetes)</li>
            <li>Monitoring & Logging (Prometheus, Grafana, ELK Stack)</li>
          </ul>
          <p>
            I'm always looking for opportunities to innovate and solve complex infrastructure challenges. 
            Let's connect and collaborate on exciting projects!
          </p>
        </div>
      </div>
    </div>
  )
}
