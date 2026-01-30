import styles from "./page.module.css";

import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className={styles.about}>
      <section className={styles.container}>
        {/* HEADER */}
        <header className={styles.header}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.subtitle}>
            Full Stack Web Developer • Lahore, Pakistan
          </p>
        </header>

        {/* MAIN CONTENT */}
        <section className={styles.content}>
          <p>
            I’m <strong>Muhammad Mubashir</strong>, a Full Stack Web Developer with
            over <strong>2 years of hands-on experience</strong> building
            self-driven projects from scratch. I focus on creating clean,
            functional, and user-friendly web applications where both design and
            logic matter equally.
          </p>

          <p>
            My journey into web development has been shaped by curiosity,
            consistency, and learning by building. I enjoy turning ideas into
            real products — from structuring backend APIs to refining frontend
            interactions with attention to UI/UX and performance.
          </p>

          <p>
            Most of my experience comes from independently building real-world
            projects, which has strengthened my problem-solving skills and given
            me a practical understanding of modern web development workflows.
          </p>
          <p>
As matter of fact, I am self learned developer.But my dedication toward learning has paved ways of  success in real world of Technology.

            </p>
        </section>

        {/* QUICK FACTS */}
        <section className={styles.facts}>
          <h2 className={styles.sectionTitle}>Quick Facts</h2>
          <ul className={styles.factList}>
            <li>2+ years of project-based experience</li>
            <li>Strong focus on UI/UX and clean architecture</li>
            <li>Comfortable across frontend and backend</li>
            <li>Enjoy building real, usable products</li>
          </ul>
        </section>

        {/* PROJECTS */}
        <section className={styles.projects}>
          <h2 className={styles.sectionTitle}>Selected Work</h2>
          <ul className={styles.projectList}>
            <li>Café Website — Responsive, UI-focused multi-page site</li>
            <li>Chat Corner — Real-time chat app with authentication</li>
            <li>Weather Vibe — Clean weather app with live data</li>
            <li>Todo App — Full-stack React, Express & MongoDB</li>
            <li>My Writings — CMS built with Next.js</li>
          </ul>
        </section>

        {/* TECH STACK */}
        <section className={styles.stack}>
          <h2 className={styles.sectionTitle}>Tech Stack</h2>

          <div className={styles.stackGrid}>
            <div>
              <h3>Frontend</h3>
              <p>HTML, CSS, JavaScript, React, Next.js</p>
            </div>

            <div>
              <h3>Backend</h3>
              <p>Node.js, Express.js, REST APIs</p>
            </div>

            <div>
              <h3>Database</h3>
              <p>MongoDB</p>
            </div>

            <div>
              <h3>Tools</h3>
              <p>Git, GitHub, Figma, Tailwind, Bootstrap</p>
            </div>
          </div>
        </section>



    <section className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Let’s Connect</h2>
      <p className={styles.contactSubtitle}>
        Have an idea, project, or just want to say hi?  
        I’m always open to meaningful conversations.
      </p>

      <div className={styles.contactGrid}>
        <a
          href="https://github.com/ProgrammerMuhammadMubashir"
          target="_blank"
          className={styles.contactCard}
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.instagram.com/programmermuhammadmubashir/"
          target="_blank"
          className={styles.contactCard}
        >
          <FaInstagram />
          <span>Instagram</span>
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61585587162794"
          target="_blank"
          className={styles.contactCard}
        >
          <FaFacebook />
          <span>Facebook</span>
        </a>

        <a
          href="mailto:itismubashiratcode@gmail.com"
          className={styles.contactCard}
        >
          <FaEnvelope />
          <span>Email</span>
        </a>

        <a
          href="https://www.fiverr.com/s/7YbKbvW"
          target="_blank"
          className={styles.contactCard}
        >
          <FaBriefcase />
          <span>Fiverr</span>
        </a>
      </div>
    </section>



        {/* FOOTER NOTE */}
        <footer className={styles.footer}>
          <p>
            I believe in consistency over motivation, quality over hype, and
            building things that genuinely help people.
          </p>
        </footer>
      </section>
    </main>
  );
}
