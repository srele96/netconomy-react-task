import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faXing } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <Logo />
    <hr className={styles.hrSeparator} />
    <div className={styles.footerListGroupWrap}>
      {/* 
        links weren't provided and only one page was required and react
        requires href to be provided so i made them all point to / 
      */}
      <ul className={styles.footerListGroup}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Portfolio</a>
        </li>
      </ul>
      <ul className={styles.footerListGroup}>
        <li>
          <a href="/">Industries</a>
        </li>
        <li>
          <a href="/">References</a>
        </li>
        <li>
          <a href="/">Partnerships</a>
        </li>
      </ul>
      <ul className={styles.footerListGroup}>
        <li>
          <a href="/">Careers</a>
        </li>
        <li>
          <a href="/">Locations</a>
        </li>
        <li>
          <a href="/">Imprints</a>
        </li>
      </ul>
    </div>
    <div className={styles.copyrightSocialsWrapper}>
      <span className={styles.copyright}>© 2021 NETCONOMY</span>
      <div className={styles.socials}>
        <a href="/" className={styles.social}>
          <FontAwesomeIcon icon={faFacebookF}/>
        </a>
        <a href="/" className={styles.social}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="/" className={styles.social}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="/" className={styles.social}>
          <FontAwesomeIcon icon={faXing} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;