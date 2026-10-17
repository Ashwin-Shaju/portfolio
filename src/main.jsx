
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Moon,
  Newspaper,
  Sparkles,
  Sun,
  UserRound,
  BriefcaseBusiness,
  Cpu,
  Layers3,
  Menu,
  X,
  Bug,
  ClipboardCheck,
  ShieldCheck,
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Ashwin Shaju',
  role: 'Computer Science Graduate',
  email: 'YOUR_EMAIL@example.com',
  github: 'https://github.com/YOUR_GITHUB_USERNAME',
  linkedin: 'https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/',
  resume: '/resume.pdf',
};

const skills = [
  {
    title: 'Programming Languages',
    icon: Code2,
    items: ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    title: 'Web & App Development',
    icon: Layers3,
    items: ['React', 'HTML', 'CSS', 'Flutter', 'Django REST Framework'],
  },
  {
    title: 'Database & Tools',
    icon: Cpu,
    items: ['PostgreSQL', 'Git', 'GitHub', 'REST APIs'],
  },
  {
    title: 'Core Concepts',
    icon: BriefcaseBusiness,
    items: [
      'Object-Oriented Programming',
      'Computer Vision',
      'Machine Learning',
      'API Development',
    ],
  },
    
  {
    title: 'Software Testing & QA',
    icon: Bug,
    items: [
      'Manual Testing',
      'Test Case Design',
      'Bug Reporting',
      'SDLC & STLC',
      'Functional Testing',
      'Regression Testing',
    ],
  },
  {
    title: 'Testing Practices',
    icon: ClipboardCheck,
    items: [
      'Test Scenarios',
      'Defect Tracking',
      'Requirements Analysis',
      'Software Quality Assurance',
    ],
  },
  {
    title: 'Cybersecurity',
    icon: ShieldCheck,
    items: [
      'Ethical Hacking Fundamentals',
      'Network Reconnaissance',
      'File Integrity Monitoring',
      'Cryptography Fundamentals',
      'Defensive Security',
    ],
  },
];

const projects = [
  {
    number: '01',
    name: 'VEIN-PAY',
    category: 'BIOMETRICS · FINTECH',
    description:
      'A smart biometric payment system that explores contactless payments through palm-vein recognition and neural-network-based identity verification.',
    details: [
      'Palm-vein image capture using a NoIR camera and infrared LEDs',
      'Siamese neural network for biometric verification',
      'REST API and wallet transaction workflow',
    ],
    tags: [
      'Python',
      'Django REST Framework',
      'PostgreSQL',
      'Flutter',
      'Computer Vision',
    ],
    icon: Cpu,
    accent: 'violet',
    link: 'https://github.com/Ashwin-Shaju/Vein-Pay',
  },
  {
    number: '02',
    name: 'Kattankappi',
    category: 'WEB DEVELOPMENT · KERALA AMBIENCE',
    description:
      'A vintage Kerala-inspired digital experience built around the warmth of a traditional chayakkada, with Malayalam identity and a relaxing ambience-focused interface.',
    details: [
      'Vintage Kerala tea-shop aesthetic and responsive layouts',
      'Ambience presets, volume controls and a music-player interface',
      'React and Vite experience with distinctive visual styling',
    ],
    tags: [
      'React',
      'Vite',
      'JavaScript',
      'CSS',
      'Web Audio API',
      'UI/UX',
    ],
    icon: Sparkles,
    accent: 'orange',
    link: 'https://github.com/Ashwin-Shaju/kattankappi',
  },
  {
    number: '03',
    name: 'Flutter Calculator',
    category: 'MOBILE APP DEVELOPMENT',
    description:
      'A lightweight calculator application built with Flutter as a practical mobile development project.',
    details: [
      'Mobile-first interface',
      'Reusable Flutter widgets',
      'Practice with application logic and UI development',
    ],
    tags: ['Flutter', 'Dart', 'Mobile Development'],
    icon: Code2,
    accent: 'blue',
    link: 'https://github.com/Ashwin-Shaju/Flutter_Calculator',
  },
  {
    number: '04',
    name: 'Python Cybersecurity Toolkit',
    category: 'CYBERSECURITY · ETHICAL HACKING',
    description:
      'A collection of Python mini projects exploring defensive security, network reconnaissance, file integrity verification, and basic cryptography in authorized lab environments.',
    details: [
      'File Integrity Monitor: SHA-256 hashing and file-change detection',
      'Multithreaded Port Scanner: TCP port discovery and basic service banners',
      'File Encryption & Decryption: reversible XOR-based educational demonstration',
    ],
    tags: [
      'Python',
      'Cybersecurity',
      'hashlib',
      'Socket Programming',
      'Multithreading',
      'File Security',
    ],
    icon: ShieldCheck,
    accent: 'green',
    link: 'https://github.com/Ashwin-Shaju/Projects',
  },
];

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [expandedProject, setExpandedProject] = useState(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Software Developer', 'Software Tester', 'QA Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [theme]);

  // Hide the navbar while scrolling down and reveal it while scrolling up.
  useEffect(() => {
    let previousScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - previousScrollY;

      // Always show the navbar at the top of the page.
      if (currentScrollY <= 20) {
        setHeaderVisible(true);
      } else if (Math.abs(scrollDifference) > 3) {
        if (scrollDifference > 0) {
          // Scrolling down.
          setHeaderVisible(false);
          setMenuOpen(false);
        } else {
          // Scrolling up.
          setHeaderVisible(true);
        }

        previousScrollY = currentScrollY;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reveal sections as they enter the viewport.
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`site-header ${
          headerVisible ? 'header-visible' : 'header-hidden'
        }`}
      >
        <nav className="navbar container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-name">
              Ashwin Shaju<span>.</span>
            </span>
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            onClick={() => {
              setMenuOpen((open) => !open);
              setHeaderVisible(true);
            }}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#about" onClick={closeMenu}>Education</a>
            <a href="#publication" onClick={closeMenu}>Publication</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>

            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === 'dark' ? 'light' : 'dark'
              } theme`}
              title={`Switch to ${
                theme === 'dark' ? 'light' : 'dark'
              } theme`}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section container hero-minimal" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <p className="hero-intro">Hi, I'm <span>Ashwin Shaju</span></p>
            <h1 className="hero-role-line">
              I'm a <span className="typing-text" key={roles[roleIndex]}>{roles[roleIndex]}</span>
            </h1>
            <p className="hero-description">
              A Computer Science and Engineering graduate interested in software
              development, software testing, quality assurance, and building
              reliable, user-friendly applications.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects <ArrowUpRight size={17} />
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={19} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <ExternalLink size={18} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={19} />
              </a>
              <span className="social-caption">LET'S CONNECT</span>
            </div>
          </div>
          <a href="#about" className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} />
          </a>
        </section>

        <section className="section container" id="about">
          <div className="section-heading reveal">
            <span className="eyebrow">01 / ABOUT ME</span>
            <h2>A little about <span className="gradient-text">me.</span></h2>
            <p className="section-description">
              Curious by nature. Developer by choice.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-copy reveal">
              <div className="about-icon"><UserRound size={23} /></div>
              <h3>Turning ideas into working software.</h3>
              <p>
                  I’m a Computer Science and Engineering graduate from Ilahia
                  College of Engineering and Technology. I enjoy developing
                  applications, testing software, identifying defects, and
                  improving the quality and reliability of digital products.
              </p>
              <p>
                 My interests include software development, software testing
                 and quality assurance, web development, mobile applications,
                 computer vision, and machine learning. I enjoy both building
                 software and making sure it works as expected.
              </p>

              <a
                className="text-link"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                View my resume <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="education-card reveal reveal-delay">
              <div className="card-icon"><GraduationCap size={22} /></div>
              <span className="card-label">EDUCATION</span>
              <h3>B.Tech in Computer Science &amp; Engineering</h3>
              <p>Ilahia College of Engineering and Technology</p>
              <div className="education-divider" />
              <div className="education-focus">
                <span className="card-label">AREAS OF INTEREST</span>
                <div className="tag-list">
                  <span className="tag">Software Development</span>
                  <span className="tag">Software Testing</span>
                  <span className="tag">Quality Assurance</span>
                  <span className="tag">Web Technologies</span>
                  <span className="tag">Machine Learning</span>
                  <span className="tag">Cybersecurity</span>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-row reveal">
            <div><strong>01</strong><span>IEEE publication</span></div>
            <div><strong>04</strong><span>Featured projects</span></div>
            <div><strong>∞</strong><span>Things to learn</span></div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">02 / SELECTED WORK</span>
              <h2>Things I’ve <span className="gradient-text">built.</span></h2>
              <p className="section-description">
                A selection of projects I’ve worked on while learning,
                experimenting, and bringing ideas to life.
              </p>
            </div>

            <div className="projects-grid projects-grid-interactive">
              {projects.map((project) => {
                const ProjectIcon = project.icon;
                const isExpanded = expandedProject === project.number;

                return (
                  <article
                    className={`project-card project-card-interactive accent-${project.accent} reveal ${
                      isExpanded ? 'project-card-expanded' : ''
                    }`}
                    key={project.number}
                  >
                    <div className="project-card-front">
                      <div className="project-card-top">
                        <span className="project-number">{project.number}</span>
                        <div className="project-icon">
                          <ProjectIcon size={22} />
                        </div>
                        <span className="project-card-hint" aria-hidden="true">
                          <ArrowUpRight size={17} />
                        </span>
                      </div>

                      <span className="project-category">{project.category}</span>
                      <h3>{project.name}</h3>
                      <span className="project-discover">
                        <span className="desktop-discover">Hover to discover</span>
                        <span className="mobile-discover">Tap to discover</span>
                        <ArrowDownRight size={15} />
                      </span>
                    </div>

                    <div className="project-card-popup">
                      <div className="project-popup-heading">
                        <span className="project-category">{project.category}</span>
                        <span className="project-popup-number">{project.number}</span>
                      </div>
                      <h3 className="project-popup-title">{project.name}</h3>
                      <p className="project-description">{project.description}</p>

                      <ul className="project-details">
                        {project.details.map((detail) => (
                          <li key={detail}>
                            <span className="detail-bullet" />
                            {detail}
                          </li>
                        ))}
                      </ul>

                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      {project.link ? (
                        <a
                          className="project-link"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Explore project <ArrowRight size={16} />
                        </a>
                      ) : (
                        <span className="project-link project-link-muted">
                          Project link coming soon
                        </span>
                      )}
                    </div>

                    <button
                      className="project-expand-button"
                      type="button"
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? 'Hide' : 'Show'} details for ${project.name}`}
                      onClick={() =>
                        setExpandedProject((current) =>
                          current === project.number ? null : project.number
                        )
                      }
                    >
                      {isExpanded ? 'Show less' : 'View project details'}
                      <ArrowDownRight size={16} />
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section container" id="publication">
          <div className="section-heading reveal">
            <span className="eyebrow">03 / RESEARCH</span>
            <h2>Published <span className="gradient-text">work.</span></h2>
            <p className="section-description">
              Research and technical exploration beyond application development.
            </p>
          </div>

          <article className="publication-card reveal">
            <div className="publication-icon"><Newspaper size={24} /></div>
            <div className="publication-content">
              <span className="card-label">IEEE CONFERENCE PUBLICATION · 2026</span>
              <h3>
                Vein-PAY: A Contactless Biometric Payment System Using Dorsal Vein Recognition
              </h3>
              <p>
                This research presents Vein-PAY, a contactless payment system that
                authenticates users through the unique vein patterns beneath the
                skin. Using a NoIR camera and near-infrared illumination, the system
                captures vein images and verifies identity with computer vision and
                a Siamese neural network. After successful authentication, a backend
                processes wallet transactions and records them securely. The work
                explores a hygienic alternative to card- and PIN-based payments,
                with a focus on usability, security, and fraud resistance.
              </p>
              <div className="publication-note">
                <strong>Published in:</strong> 2026 International Conference on
                Innovations in Engineering and Technology (ICIET)
                <br />
                <strong>Conference:</strong> 20–21 August 2026 · Ernakulam, India
                <br />
                <strong>Added to IEEE Xplore:</strong> 2 October 2026
                <br />
                <strong>Publisher:</strong> IEEE
                <br />
                <strong>Electronic ISBN:</strong> 979-8-3315-4856-8
                <br />
                <strong>Print ISBN:</strong> 979-8-3315-4857-5
                <br />
                <strong>DOI:</strong>{' '}
                <a
                  href="https://doi.org/10.1109/ICIET70550.2026.11712862"
                  target="_blank"
                  rel="noreferrer"
                >
                  10.1109/ICIET70550.2026.11712862
                </a>
              </div>
              <a
                className="text-link"
                href="https://ieeexplore.ieee.org/xpl/conhome/11712151/proceeding"
                target="_blank"
                rel="noreferrer"
              >
                View on IEEE Xplore <ArrowUpRight size={17} />
              </a>
            </div>
            <a
              className="publication-link"
              href="https://doi.org/10.1109/ICIET70550.2026.11712862"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Vein-PAY research paper DOI"
            >
              <ArrowUpRight size={21} />
            </a>
          </article>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">04 / TOOLKIT</span>
              <h2>Skills &amp; <span className="gradient-text">technologies.</span></h2>
              <p className="section-description">
                Technologies I’ve used across projects, coursework, and
                personal experimentation.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => {
                const SkillIcon = skill.icon;

                return (
                  <article
                    className={`skill-card reveal reveal-delay-${index + 1}`}
                    key={skill.title}
                  >
                    <div className="skill-card-heading">
                      <div className="skill-icon"><SkillIcon size={20} /></div>
                      <h3>{skill.title}</h3>
                    </div>
                    <div className="tag-list">
                      {skill.items.map((item) => (
                        <span className="tag" key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section container contact-section" id="contact">
          <div className="contact-panel reveal">
            <div className="contact-decoration contact-decoration-one" />
            <div className="contact-decoration contact-decoration-two" />

            <span className="eyebrow">05 / CONTACT</span>
            <h2>Have an idea? Let’s make it <span className="gradient-text">real.</span></h2>
            <p>
              Open to conversations, collaboration, and opportunities in software development, software testing, quality assurance, and cybersecurity.
            </p>

            <div className="contact-actions">
              <a
                className="button button-primary"
                href={`mailto:${profile.email}`}
              >
                <Mail size={17} /> Email me <ArrowUpRight size={17} />
              </a>
              <a
                className="button button-secondary"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <ExternalLink size={16} />
              </a>
            </div>

            <div className="contact-location">
              <MapPin size={15} /> Kerala, India
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-name">
              Ashwin Shaju<span>.</span>
            </span>
          </a>

          <p>Designed with curiosity. Built with code.</p>

          <a className="back-to-top" href="#home">
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Ashwin Shaju</span>
          <span>Made with React &amp; Vite</span>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
