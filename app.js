import React from 'react';
import { Github, Linkedin, Mail, BookOpen, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Sharat Akhoury</h1>
          <p className="text-2xl text-slate-300 mb-6">Software Engineer | Cloud Native Technologies</p>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Building scalable solutions in distributed systems, Kubernetes, and OpenShift. 
            Focused on cloud-native infrastructure, CNF features, and lifecycle management.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 flex-wrap">
            <a 
              href="https://github.com/sakhoury" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/akhourys/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="https://scholar.google.com/citations?user=IvddIq8AAAAJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
            >
              <BookOpen size={20} />
              Google Scholar
            </a>
            <a 
              href="mailto:dev@akhoury.io"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <p className="text-slate-300 leading-relaxed mb-4">
              I'm a Software Engineer at Red Hat based in Ottawa, working on cutting-edge cloud-native technologies 
              and distributed systems. My focus includes OpenShift, Kubernetes orchestration, and CNF (Cloud Native 
              Functions) feature development.
            </p>
            <p className="text-slate-300 leading-relaxed">
              With a background in computer science research spanning computer vision, biometrics, and medical imaging 
              (OCT), I bring both theoretical depth and practical engineering experience to complex technical challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <div className="grid gap-6">
            
            {/* Project 1 */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold">f3tch</h3>
                <a 
                  href="https://github.com/sakhoury/f3tch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-slate-300 mb-3">
                Python tool for fetching data from Prometheus (hosted on OpenShift) and graphing the results. 
                Streamlines metrics collection and visualization for monitoring distributed systems.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-slate-700 px-3 py-1 rounded text-sm">Python</span>
                <span className="bg-slate-700 px-3 py-1 rounded text-sm">Prometheus</span>
                <span className="bg-slate-700 px-3 py-1 rounded text-sm">OpenShift</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold">siteconfig</h3>
                <a 
                  href="https://github.com/sakhoury/siteconfig" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-slate-300 mb-3">
                Site configuration management tool built in Go. Enables declarative configuration and deployment 
                of cloud-native infrastructure components.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-slate-700 px-3 py-1 rounded text-sm">Go</span>
                <span className="bg-slate-700 px-3 py-1 rounded text-sm">Kubernetes</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold">CNF Features Deploy</h3>
                <a 
                  href="https://github.com/openshift-kni/cnf-features-deploy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-slate-300 mb-3">
                Contributor to OpenShift CNF features deployment. Kustomize configs for installing CNF features 
                and e2e functional tests for verifying feature deployment and integration.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-slate-700 px-3 py-1 rounded text-sm">Kubernetes</span>
                <span className="bg-slate-700 px-3 py-1 rounded text-sm">OpenShift</span>
                <span className="bg-slate-700 px-3 py-1 rounded text-sm">CNF</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <span className="text-slate-400">Present</span>
            </div>
            <p className="text-blue-400 mb-4">Red Hat | Ottawa, Canada</p>
            <ul className="text-slate-300 space-y-2">
              <li>• Developing cloud-native solutions using Kubernetes and OpenShift</li>
              <li>• Contributing to CNF features deployment and lifecycle management</li>
              <li>• Building tools for cluster upgrades and orchestration</li>
              <li>• Working on distributed systems and infrastructure automation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Research Background</h2>
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <p className="text-slate-300 leading-relaxed mb-4">
              My academic research spans computer vision, biometrics, and medical imaging technologies. 
              I've contributed to work in optical coherence tomography (OCT) and pattern recognition systems.
            </p>
            <a 
              href="https://scholar.google.com/citations?user=IvddIq8AAAAJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              View publications on Google Scholar
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16 pb-24">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <p className="text-slate-300 mb-6">
              I'm always interested in discussing cloud-native technologies, distributed systems, 
              or potential collaboration opportunities.
            </p>
            <a 
              href="mailto:hello@akhoury.io"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors font-medium"
            >
              <Mail size={20} />
              hello@akhoury.io
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-slate-400">
            © 2025 Sharat Akhoury. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
