import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          Company Logo
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/clothes">Clothes</Link>
        <Link href="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
