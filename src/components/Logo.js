import styles from './Logo.module.css';

const Logo = () => (
  <img
    className={styles.logo}
    src="./assets/images/logo_netconomy_neu_weisz.png" 
    alt="netconomy neu wisz logo" 
    role="banner"
  />
);

export default Logo;