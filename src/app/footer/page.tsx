import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "@/styles/footer.module.css"; // Import CSS Module

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/yaro-volkov" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/uottahack" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Iaroslav Volkov. All rights reserved.
      </p>
    </footer>
  );
}


// <nav className={styles.nav}>
//         <Link href="#">Home</Link>
//         <Link href="#about">About Me</Link>
//         <Link href="#journey">My Journey</Link>
//         <Link href="#experience">Experience</Link>
//         <Link href="#past-events">Past Events</Link>
//         {/* <Link href="#contact">Get in Touch</Link> */}
//       </nav>