import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        &copy; 2023 Your Company Name. All rights reserved.
      </div>
      <div className={styles.footerRight}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/clothes">Clothes</Link>
        <Link href="/signup">Signup</Link>
      </div>
    </footer>
  );
};

export default Footer;
