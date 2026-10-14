
import { useState } from "react";
import "./App.css";

const profile = {
  name: "Ganishetty Dinesh",
  role: "Aspiring Software Engineer",
  location: "India",
  email: "dineshpandh123@gmail.com",
  github: "https://github.com/Dinesh-Ganishetty",
  linkedin: "https://www.linkedin.com/in/ganishetty-dinesh-553152385",
};

const skills = [
  "Java",
  "Python",
  "React",
  "HTML & CSS",
  "Git & GitHub",
  "AI Tools",
];

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    arrow: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    code: <><path d="m8 17-5-5 5-5" /><path d="m16 7 5 5-5 5" /><path d="m14 4-4 16" /></>,
    github: <><path d="M9 19c-5 1.5-5-2.5-7-3" /><path d="M16 22v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S18.6 1.2 16 3a13.4 13.4 0 0 0-7 0C6.4 1.2 5.2 1.5 5.2 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7A3.4 3.4 0 0 0 9 18.1V22" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7" /><path d="M8 7v.01" /><path d="M12 17v-7h4a3 3 0 0 1 3 3v4" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    sparkle: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" /><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

export default function App() {
  const [following, setFollowing] = useState(false);
  const [activeSkill, setActiveSkill] = useState("");

  return (
    <main className="portfolio-page" id="home">
      <div className="background-grid" />
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <header className="top-nav">
        <a className="brand" href="#home">
          <span className="brand-icon">D.</span>
          <span>PERSONAL<span className="brand-accent">.SPACE</span></span>
        </a>
        <div className="nav-status">
          <span className="online-dot" />
          PROFILE / 2026
        </div>
      </header>

      <section className="profile-layout">
        <div className="intro-content">
          <div className="eyebrow">
            <Icon name="sparkle" size={16} />
            WELCOME TO MY DIGITAL SPACE
          </div>

          <h1 className="hero-title">
            Building ideas.
            <br />
            <span>Learning every day.</span>
          </h1>

          <p className="hero-description">
            I'm a computer science student exploring software development,
            creative technology, and practical solutions to real-world problems.
          </p>

          <div className="intro-status">
            <span className="online-dot" />
            OPEN TO LEARNING &amp; COLLABORATION
          </div>

          <div className="intro-bottom">
            <Icon name="code" size={19} />
            Curiosity in. Creativity out.
          </div>
        </div>

        <div className="card-area">
          <div className="card-aura" />

          <article className="profile-card">
            <div className="card-top">
              <div className="card-label">
                <span className="mini-dot" />
                DEVELOPER PROFILE
              </div>
              <span className="card-index">001 / 026</span>
            </div>

            <div className="identity-section">
              <div className="avatar-wrap">
                <div className="avatar-ring" />
                <div className="avatar">
                  GD<span className="avatar-spark">✳</span>
                </div>
                <span className="avatar-online" />
              </div>

              <div className="identity-text">
                <span className="identity-kicker">HELLO, I'M</span>
                <h2>{profile.name}</h2>
                <p>{profile.role}</p>
              </div>
            </div>

            <div className="location-line">
              <Icon name="pin" size={15} />
              <span>{profile.location}</span>
              <span className="location-divider">/</span>
              <span>Computer Science</span>
            </div>

            <div className="card-separator" />

            <div className="skills-heading">
              <div>
                <span className="section-label">MY TOOLKIT</span>
                <h3>Skills &amp; technologies</h3>
              </div>
              <span className="skills-count">
                {String(skills.length).padStart(2, "0")}
              </span>
            </div>

            <div className="skills-list">
              {skills.map((skill, index) => (
                <button
                  type="button"
                  key={skill}
                  className={`skill-chip ${activeSkill === skill ? "skill-active" : ""}`}
                  style={{ "--skill-index": index }}
                  onClick={() =>
                    setActiveSkill((current) => current === skill ? "" : skill)
                  }
                  aria-pressed={activeSkill === skill}
                >
                  <span className="skill-indicator" />
                  {skill}
                </button>
              ))}
            </div>

            <div className="skill-feedback" aria-live="polite">
              {activeSkill ? (
                <>
                  <Icon name="check" size={14} />
                  {activeSkill} selected
                </>
              ) : (
                "Choose a skill to highlight it"
              )}
            </div>

            <div className="card-separator card-separator-bottom" />

            <div className="card-bottom">
              <div className="social-group">
                <a className="social-button" href={profile.github}
                  target="_blank" rel="noopener noreferrer"
                  aria-label="GitHub" title="GitHub">
                  <Icon name="github" />
                </a>
                <a className="social-button" href={profile.linkedin}
                  target="_blank" rel="noopener noreferrer"
                  aria-label="LinkedIn" title="LinkedIn">
                  <Icon name="linkedin" />
                </a>
                <a className="social-button" href={`mailto:${profile.email}`}
                  aria-label="Email" title="Email">
                  <Icon name="mail" />
                </a>
              </div>

              <button
                type="button"
                className={`follow-button ${following ? "is-following" : ""}`}
                onClick={() => setFollowing((current) => !current)}
                aria-pressed={following}
              >
                {following ? (
                  <><Icon name="check" size={15} /> Following</>
                ) : (
                  <>Follow <Icon name="arrow" size={15} /></>
                )}
              </button>
            </div>

            <div className="card-watermark" aria-hidden="true">GD.</div>
            <div className="card-reflection" />
          </article>

          <div className="floating-note note-top">
            <span className="note-icon"><Icon name="sparkle" size={16} /></span>
            <span>
              <strong>Always curious</strong>
              <small>NEVER STOP LEARNING</small>
            </span>
          </div>

          <div className="floating-note note-bottom">
            <span className="note-live" />
            <span>
              <strong>Currently exploring</strong>
              <small>CODE · IDEAS · TECHNOLOGY</small>
            </span>
          </div>
        </div>
      </section>

      <footer className="page-footer">
        <div className="footer-brand">
          <span className="footer-mark">D.</span>
          {profile.name}
        </div>
        <span className="footer-caption">
          DESIGNED WITH REACT <span>✳</span> BUILT TO LEARN
        </span>
        <a className="footer-contact" href={`mailto:${profile.email}`}>
          Say hello <Icon name="arrow" size={14} />
        </a>
      </footer>
    </main>
  );
}
