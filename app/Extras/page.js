import React from 'react';
import styles from './page.module.css';

const notesData = [
  {
    title: 'HTML Notes',
    description: 'A complete guide to HTML for beginners and intermediates, covering all essential tags and best practices.',
    readLink: 'https://drive.google.com/file/d/1ZFZcHH25Cqz3Z1Gt-dawER-UGTuZlJKa/view?usp=sharing',   // replace with your actual URL
    downloadLink: 'https://drive.google.com/uc?export=download&id=1ZFZcHH25Cqz3Z1Gt-dawER-UGTuZlJKa', // replace with actual PDF path
  },

];

const Extras = () => {
  return (
    <main className={styles.pivot}>
      <h2 className={styles.sectionTitle}>📚 Notes Section</h2>
      <div className={styles.notesContainer}>
        {notesData.map((note, index) => (
          <div key={index} className={styles.noteCard}>
            <h3 className={styles.noteTitle}>{note.title}</h3>
            <p className={styles.noteDesc}>{note.description}</p>
            <div className={styles.noteBtns}>
              <a href={note.readLink} target="_blank" rel="noopener noreferrer" className={styles.readBtn}>
                Read Online
              </a>
              <a href={note.downloadLink} download className={styles.downloadBtn}>
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Extras;