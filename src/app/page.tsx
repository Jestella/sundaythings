import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Sunday Things Logo"
          width={180}
          height={37}
          priority
        />
        <h4>SUNDAY THINGS</h4>
        <p>I&apos;m coming soon!</p>
      </div>
    </main>
  );
}
