import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.wrapper}>
      {/* glow blobs */}
      <div className={styles.glow} />
      <div className={styles.glowAlt} />

      {/* glass blur */}
      <div className={styles.blurBG} />

      <section className={styles.content}>
        <h1>404</h1>
        <p>
          Looks like you followed a broken link or typed something that doesn’t
          exist.
        </p>

        <Link href="/" className={styles.homeBtn}>
          Go back home
        </Link>
      </section>
    </main>
  );
}
