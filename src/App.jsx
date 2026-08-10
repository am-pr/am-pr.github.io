import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Activity,
  ArrowUpRight,
  Braces,
  Boxes,
  Cable,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Globe2,
  KeyRound,
  Linkedin,
  LockKeyhole,
  Mail,
  Network,
  Radar,
  Route,
  Server,
  ShieldCheck,
  TerminalSquare,
  Workflow,
  Zap,
} from 'lucide-react'

const PROFILE = {
  name: 'Amirhossein',
  githubUsername: 'am-pr',
  email: 'amirhossein.bohlour@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amirhossein-bohlour-516247260/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaukVXTXcR%2FC6WgaDSzJfQQ%3D%3D',
  location: 'Mashhad, Iran',
}

const tabs = [
  { id: 'about', label: 'ABOUT' },
  { id: 'network', label: 'NETWORK' },
  { id: 'security', label: 'SECURITY' },
  { id: 'software', label: 'SOFTWARE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
]

const typingLines = [
  'building programmable networks',
  'automating network infrastructure',
  'engineering secure systems',
  'exploring software-defined networking',
]

const expertise = {
  network: [
    ['Software-Defined Networking', 'Control-plane driven networking and programmable infrastructure.', Network],
    ['Network Automation', 'Repeatable workflows, APIs and tooling for network operations.', Workflow],
    ['Routing & Switching', 'Core networking concepts, segmentation and traffic engineering.', Route],
    ['Overlay Networks', 'Logical network abstractions over physical infrastructure.', Cable],
    ['Linux Networking', 'Host networking, interfaces, bridges and system-level networking.', Server],
    ['Network APIs', 'Interfaces that connect software, policy and infrastructure.', Braces],
  ],
  security: [
    ['Network Security', 'Designing defensible network boundaries and secure flows.', ShieldCheck],
    ['Access Control', 'ACL, RBAC and policy-driven authorization models.', KeyRound],
    ['Firewall Architecture', 'Rule design, segmentation and security enforcement.', LockKeyhole],
    ['Secure APIs', 'Authentication, authorization and safe service boundaries.', Braces],
    ['Infrastructure Security', 'Reducing exposure across systems and network services.', Server],
    ['Zero-Trust Concepts', 'Identity-aware, least-privilege access patterns.', Radar],
  ],
  software: [
    ['Python', 'Automation, backend services and infrastructure tooling.', TerminalSquare],
    ['TypeScript / JavaScript', 'Modern applications and operational interfaces.', Code2],
    ['Backend APIs', 'Structured service boundaries and control APIs.', Braces],
    ['PostgreSQL', 'Relational data modeling for reliable systems.', Boxes],
    ['Docker', 'Repeatable application and infrastructure packaging.', Server],
    ['Systems Thinking', 'Designing software around real operational constraints.', Cpu],
  ],
}

const projects = [
  {
    index: '01',
    title: 'SDN / Network Control Platform',
    description:
      'Software-defined network management, automation and secure control-plane concepts.',
    tags: ['SDN', 'NETWORKING', 'API', 'SECURITY'],
    href: 'https://github.com/am-pr/ERP-BackEnd',
    icon: Network,
  },
  {
    index: '02',
    title: 'Network Automation',
    description:
      'Infrastructure automation and operational tooling for repeatable network workflows.',
    tags: ['PYTHON', 'LINUX', 'AUTOMATION', 'NETWORK'],
    href: 'https://github.com/am-pr/ERP-FrontEnd',
    icon: Workflow,
  },
  {
    index: '03',
    title: 'Security / Infrastructure',
    description:
      'Security-focused infrastructure, policy and access-control engineering.',
    tags: ['SECURITY', 'ACL', 'RBAC', 'INFRASTRUCTURE'],
    href: 'https://github.com/am-pr/Theory-of-Computation',
    icon: ShieldCheck,
  },
]

function useTypingText(lines) {
  const [lineIndex, setLineIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = lines[lineIndex]
    const finishedTyping = !deleting && text === full
    const finishedDeleting = deleting && text === ''

    const timeout = setTimeout(
      () => {
        if (finishedTyping) {
          setDeleting(true)
          return
        }

        if (finishedDeleting) {
          setDeleting(false)
          setLineIndex((current) => (current + 1) % lines.length)
          return
        }

        setText(
          deleting
            ? full.slice(0, Math.max(0, text.length - 1))
            : full.slice(0, text.length + 1),
        )
      },
      finishedTyping ? 1250 : deleting ? 24 : 48,
    )

    return () => clearTimeout(timeout)
  }, [deleting, lineIndex, lines, text])

  return text
}

function NetworkBackdrop() {
  const nodes = useMemo(
    () => [
      [12, 24], [28, 13], [45, 26], [68, 15], [88, 29],
      [18, 68], [38, 52], [59, 68], [78, 54], [91, 78],
    ],
    [],
  )

  return (
    <div className="network-backdrop" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <g className="network-lines">
          <line x1="12" y1="24" x2="28" y2="13" />
          <line x1="28" y1="13" x2="45" y2="26" />
          <line x1="45" y1="26" x2="68" y2="15" />
          <line x1="68" y1="15" x2="88" y2="29" />
          <line x1="12" y1="24" x2="18" y2="68" />
          <line x1="18" y1="68" x2="38" y2="52" />
          <line x1="38" y1="52" x2="45" y2="26" />
          <line x1="38" y1="52" x2="59" y2="68" />
          <line x1="59" y1="68" x2="78" y2="54" />
          <line x1="78" y1="54" x2="88" y2="29" />
          <line x1="78" y1="54" x2="91" y2="78" />
        </g>
        {nodes.map(([cx, cy], index) => (
          <circle
            key={`${cx}-${cy}`}
            className={`network-node node-${index % 3}`}
            cx={cx}
            cy={cy}
            r=".65"
          />
        ))}
        <circle className="packet packet-a" cx="0" cy="0" r=".7">
          <animateMotion
            dur="5.5s"
            repeatCount="indefinite"
            path="M12 24 L28 13 L45 26 L68 15 L88 29"
          />
        </circle>
        <circle className="packet packet-b" cx="0" cy="0" r=".7">
          <animateMotion
            dur="6.8s"
            repeatCount="indefinite"
            path="M18 68 L38 52 L59 68 L78 54 L91 78"
          />
        </circle>
      </svg>
    </div>
  )
}

function StatusPill() {
  return (
    <div className="status-pill">
      <span className="status-dot" />
      SYSTEM ONLINE
    </div>
  )
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function ExpertiseGrid({ type }) {
  return (
    <div className="expertise-grid">
      {expertise[type].map(([title, description, Icon], index) => (
        <motion.article
          className="expertise-card"
          key={title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <div className="card-icon">
            <Icon size={20} />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </motion.article>
      ))}
    </div>
  )
}

function About() {
  return (
    <section className="tab-panel">
      <SectionHeader
        eyebrow="01 / IDENTITY"
        title="Network-first software engineering."
        description="I work at the intersection of software, networking and infrastructure — with a focus on programmable, automated and secure systems."
      />

      <div className="about-layout">
        <div className="terminal-card">
          <div className="terminal-topbar">
            <span /><span /><span />
            <small>identity.sh</small>
          </div>
          <div className="terminal-body">
            <p><span className="prompt">$</span> whoami</p>
            <p className="terminal-answer">Amirhossein — Network Software Developer</p>
            <p><span className="prompt">$</span> cat focus.txt</p>
            <div className="terminal-answer terminal-list">
              <span>Software-Defined Networking</span>
              <span>Network Automation</span>
              <span>Computer Networks</span>
              <span>Cybersecurity</span>
              <span>Linux & Infrastructure</span>
              <span>Backend & Systems Engineering</span>
            </div>
            <p><span className="prompt">$</span> status</p>
            <p className="terminal-answer ok">ready_to_build=true</p>
          </div>
        </div>

        <div className="principles">
          <div className="principle">
            <CircleDot size={18} />
            <div>
              <strong>Programmable</strong>
              <span>Networks should be controllable through clean software boundaries.</span>
            </div>
          </div>
          <div className="principle">
            <Zap size={18} />
            <div>
              <strong>Automated</strong>
              <span>Repeatable infrastructure beats repetitive manual operation.</span>
            </div>
          </div>
          <div className="principle">
            <ShieldCheck size={18} />
            <div>
              <strong>Secure by design</strong>
              <span>Identity, policy and least privilege should be architectural concerns.</span>
            </div>
          </div>
          <div className="principle">
            <Activity size={18} />
            <div>
              <strong>Operational</strong>
              <span>Good systems are observable, maintainable and built for real environments.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NetworkTab() {
  return (
    <section className="tab-panel">
      <SectionHeader
        eyebrow="02 / NETWORK"
        title="Programmable network infrastructure."
        description="Networking is the core domain: control planes, overlays, automation and the software that operates them."
      />

      <div className="topology">
        <div className="topology-node top"><Globe2 size={18} /><span>Internet</span></div>
        <div className="topology-line vertical a" />
        <div className="topology-node control"><ShieldCheck size={18} /><span>Security</span></div>
        <div className="topology-line vertical b" />
        <div className="topology-node sdn"><Network size={18} /><span>SDN Controller</span></div>
        <div className="topology-line left" />
        <div className="topology-line right" />
        <div className="topology-node edge edge-a"><Server size={18} /><span>Edge 01</span></div>
        <div className="topology-node edge edge-b"><Server size={18} /><span>Edge 02</span></div>
        <div className="packet-dot packet-left" />
        <div className="packet-dot packet-right" />
      </div>

      <ExpertiseGrid type="network" />
    </section>
  )
}

function SecurityTab() {
  return (
    <section className="tab-panel">
      <SectionHeader
        eyebrow="03 / SECURITY"
        title="Security belongs in the architecture."
        description="I’m interested in the boundaries where networks, identity, policy and software authorization meet."
      />
      <ExpertiseGrid type="security" />
    </section>
  )
}

function SoftwareTab() {
  return (
    <section className="tab-panel">
      <SectionHeader
        eyebrow="04 / SOFTWARE"
        title="Software that operates infrastructure."
        description="Backend engineering, automation and systems tooling are how network ideas become reliable operational products."
      />
      <ExpertiseGrid type="software" />

      <div className="stack-line">
        <span>PYTHON</span>
        <span>TYPESCRIPT</span>
        <span>REACT</span>
        <span>POSTGRESQL</span>
        <span>DOCKER</span>
        <span>LINUX</span>
        <span>GIT</span>
      </div>
    </section>
  )
}

function ProjectsTab() {
  return (
    <section className="tab-panel">
      <SectionHeader
        eyebrow="05 / PROJECTS"
        title="Selected engineering work."
        description="Replace these three cards with the repositories you want visitors and recruiters to see first."
      />

      <div className="projects-grid">
        {projects.map((project, index) => {
          const Icon = project.icon
          return (
            <motion.a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              key={project.index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
            >
              <div className="project-head">
                <span className="project-index">{project.index}</span>
                <Icon size={23} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="project-link">
                OPEN PROJECT <ArrowUpRight size={15} />
              </div>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}

function ContactTab() {
  const githubUrl = `https://github.com/${PROFILE.githubUsername}`

  return (
    <section className="tab-panel">
      <SectionHeader
        eyebrow="06 / CONTACT"
        title="Let’s build useful systems."
        description="For networking, infrastructure, security or software engineering conversations, these are the best ways to reach me."
      />

      <div className="contact-grid">
        <a className="contact-card" href={githubUrl} target="_blank" rel="noreferrer">
          <Github />
          <div>
            <small>GITHUB</small>
            <strong>@{PROFILE.githubUsername}</strong>
          </div>
          <ExternalLink size={17} />
        </a>

        <a className="contact-card" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
          <Linkedin />
          <div>
            <small>LINKEDIN</small>
            <strong>Professional profile</strong>
          </div>
          <ExternalLink size={17} />
        </a>

        <a className="contact-card" href={`mailto:${PROFILE.email}`}>
          <Mail />
          <div>
            <small>EMAIL</small>
            <strong>{PROFILE.email}</strong>
          </div>
          <ChevronRight size={17} />
        </a>
      </div>

      <div className="contact-terminal">
        <span className="prompt">$</span>
        <span>location</span>
        <strong>{PROFILE.location}</strong>
      </div>
    </section>
  )
}

function Panel({ activeTab }) {
  const panels = {
    about: <About />,
    network: <NetworkTab />,
    security: <SecurityTab />,
    software: <SoftwareTab />,
    projects: <ProjectsTab />,
    contact: <ContactTab />,
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -14 }}
        transition={{ duration: 0.2 }}
      >
        {panels[activeTab]}
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('about')
  const typed = useTypingText(typingLines)

  return (
    <main>
      <NetworkBackdrop />

      <div className="shell">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Home">
            <span className="brand-mark"><Network size={18} /></span>
            <span>AMIRHOSSEIN<span className="brand-dot">_</span></span>
          </a>

          <StatusPill />
        </header>

        <section className="hero" id="top">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="hero-kicker">
              <span>NETWORK SOFTWARE DEVELOPER</span>
              <span className="separator">/</span>
              <span>SDN • SECURITY • SYSTEMS</span>
            </div>

            <h1>
              Building software for
              <span> programmable networks.</span>
            </h1>

            <p className="hero-description">
              Network-focused developer interested in software-defined networking,
              network automation, computer networks, cybersecurity and systems engineering.
            </p>

            <div className="typing-line">
              <span className="prompt">&gt;</span>
              <span>{typed}</span>
              <span className="cursor">▋</span>
            </div>

            <div className="hero-actions">
              <button onClick={() => setActiveTab('projects')} className="primary-button">
                EXPLORE PROJECTS <ArrowUpRight size={16} />
              </button>
              <a
                href={`https://github.com/${PROFILE.githubUsername}`}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                <Github size={16} /> GITHUB
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-console"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <div className="console-head">
              <span><TerminalSquare size={15} /> control-plane</span>
              <span className="console-live"><span /> LIVE</span>
            </div>
            <div className="console-body">
              <div><span className="muted">01</span><span className="cyan">identity</span><span>network_developer</span></div>
              <div><span className="muted">02</span><span className="cyan">focus</span><span>sdn · automation</span></div>
              <div><span className="muted">03</span><span className="cyan">security</span><span>enabled</span></div>
              <div><span className="muted">04</span><span className="cyan">control</span><span>programmable</span></div>
              <div><span className="muted">05</span><span className="cyan">status</span><span className="green">online</span></div>
              <div className="console-divider" />
              <div className="console-route">
                <span>client</span><ChevronRight size={13} />
                <span>api</span><ChevronRight size={13} />
                <span>controller</span><ChevronRight size={13} />
                <span>network</span>
              </div>
            </div>
          </motion.div>
        </section>

        <nav className="tabs" aria-label="Portfolio sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? 'active' : ''}
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <Panel activeTab={activeTab} />

        <footer>
          <div>
            <CheckCircle2 size={15} />
            <span>Built for networks, systems and security.</span>
          </div>
          <span>© {new Date().getFullYear()} Amirhossein</span>
        </footer>
      </div>
    </main>
  )
}
