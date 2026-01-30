import styles from "./page.module.css";

const projects = [
  {
    title: "Cafe Website",
    description:
      "A fully functional cafe website with an interactive UI, menus, and responsive layout.",
    github: "https://github.com/ProgrammerMuhammadMubashir/Cafe-Website",
  },
  {
    title: "Chat Corner",
    description:
      "A Socket-IO -based chat application focused on real-time messaging and backend logic.",
    github: "https://github.com/ProgrammerMuhammadMubashir/Chat-Corner",
  },
  {
    title: "My Writings",
    description:
      "A personal writing portfolio showcasing creative and technical articles.",
    github: "https://github.com/ProgrammerMuhammadMubashir/MyWritings",
  },

];

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.header}>
        <h1>Projects</h1>
        <p>A few things I’ve built while learning and experimenting.</p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
