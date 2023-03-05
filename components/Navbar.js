import Link from "next/link";
import styles from "../src/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.justLogo}>
          <Link href="/">
            <img src="/logo.png" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <Link className={styles.links_text} href="/">
                Home
                <div className={styles.lights_off}></div>
              </Link>
            </li>
            <li>
              <Link className={styles.links_text} href="/">
                About
                <div className={styles.lights_off}></div>
              </Link>
            </li>
            <li>
              <Link className={styles.links_text} href="/">
                Projects
                <div className={styles.lights_off}></div>
              </Link>
            </li>
            <li>
              <Link className={styles.links_text} href="/">
                Contact
                <div className={styles.lights_off}></div>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.empty_box}></div>
      </div>
    </>
  );
}
