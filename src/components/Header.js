import Logo from './Logo';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Logo />
  </header>
);

export default Header;