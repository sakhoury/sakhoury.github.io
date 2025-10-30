// Simple icon components as SVG
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const ExternalLinkIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

function Portfolio() {
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
              <GithubIcon />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/akhourys/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
            <a 
              href="https://scholar.google.com/citations?user=IvddIq8AAAAJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
            >
              <BookIcon />
              Google Scholar
            </a>
            <a 
              href="mailto:dev@akhoury.io"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              <MailIcon />
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
                  <ExternalLinkIcon />
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
                  <ExternalLinkIcon />
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
                  <ExternalLinkIcon />
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
              <ExternalLinkIcon size={16} />
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
              <MailIcon />
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

// Render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);
