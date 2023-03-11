// src/components/AppBar/AppBar.jsx

import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/movies" className={styles.navLink}>
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
