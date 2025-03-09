"use client";

import { motion } from "framer-motion";

import Waveform from "@/components/Waveform"; // Import waveform component
import styles from "@/styles/experience.module.css"; // Import styles
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const categories = [
  {
    title: "Frontend",
    skills: [
      "HTML", "CSS", "JavaScript", "TailWind", "Next.js",
      "React.js", "Express.js", "BootStrap",
    ],
  },
  {
    title: "Backend",
    skills: [
      "PostgreSQL", "MongoDB", "NoSQL", "Flask", "Python",
      "Firebase", "SPROCs", "Java",
    ],
  },
  {
    title: "Project Management",
    skills: [
      "Agile", "Scrum",  "Risk Mitigation",
      "Finance", "Team Dynamics", "Jira", "GRC Compliance", "Asana",
    ],
  },
  {
    title: "Business Intelligence",
    skills: [
      "ETL", "Numpy & Pandas", "REST API", "PowerBI", "Selenium",
      "Power Automate", "Excel",  "MS Dynamics",
    ],
  },
  {
    title: "DevOps",
    skills: [
      "Docker", "Docker Compose", "CI/CD", "Kubernetes",
      "PowerShell", "Bash", "Perl", "Python",
    ],
  },
  {
    title: "Embedded",
    skills: [
      "C++", "C", "Assembly", "QNX", "UNIX",
      "FPGA", "MACOS", "Arduino",
    ],
  },
];

export default function Experience() {

  return (
    <div className={styles.experienceWrapper}>
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.grid}>
        {categories.map((category, i) => (
          <motion.div key={i} whileHover="hover" className={styles.experienceCard}>
              <div className={styles.waveformBackground}>
                <Waveform />
              </div>

            {/* Content on Top */}
            <h1>{category.title}</h1>
            {/* Bullet Points in Two Columns */}
            <div className={styles.skillsGrid}>
              {category.skills.map((skill, j) => (
                <span key={j} className={styles.skillItem}><IoCheckmarkDoneCircle/> {skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
