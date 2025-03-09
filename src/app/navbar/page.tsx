import styles from '@/styles/navbar.module.css';
import { FaHome, FaUser, FaMap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Desktop navbar */}
      {/* <ul className={styles.desktopNavbar}>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#journey">Journey</a>
        <a href="#experience">Experience</a>
        <a href="#past-events">Events</a>
      </ul> */}

      {/* Mobile navbar */}
      <ul className={styles.mobileNavbar}>
        <li><a href="#home"><FaHome size={30} /></a></li>
        <li><a href="#about"><FaUser size={30} /></a></li>
        <li><a href="#journey"><FaMap size={30} /></a></li>
        <li><a href="#experience"><FaBriefcase size={30} /></a></li>
        <li><a href="#past-events"><FaCalendarAlt size={30} /></a></li>
      </ul>
    </nav>
  );
}
