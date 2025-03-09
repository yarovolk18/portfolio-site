"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Waveform from "@/components/Waveform";
import styles from "@/styles/journey.module.css"; // Import styles

const experiences = [
  {
    title: "Director & Advisor",
    company: "@uOttaHack",
    link:"https://www.uottahack.ca",
    location: "Ottawa, ON, Canada | June 2022  – June 2024 – Present",
    details: [
      "Led a team of 30+ organizers to execute a hackathon with 700+ students, 30+ mentors, and 25+ companies.",
      "Developed the uOttaHack website, live site, and uOttaApp, maintaining 20+ repositories.",
      "Raised over $60K annually through sponsorships and grew the event’s Instagram following to 2.4K.",
      "Defined and executed product roadmaps, enhancing hacker experiences through user feedback integration.",
      "Facilitated collaborations that fostered team dynamics and bonding, strengthening community engagement and increasing brand visibility.",
      "Advised on crucial outreach initiatives, teaching the fundamental pillars of sponsorship and budgeting.",
    ],
  },
  {
    title: "DevSecOps & Software Engineer Intern",
    company: "@General Dynamics",
    link:"https://gdmissionsystems.ca/",
    location: "Ottawa, ON, Canada | 2022",
    details: [
      "Created elegant UX/UI designs using SCSS/CSS and reduced site lag by 80% using asynchronous C# functions.",
      "Deployed Collaboard using K3S (Kubernetes) for improved scalability on a RHEL Linux Server.",
      "Utilized AWS to develop a cloud-based deployment and replace on-prem solutions with CI/CD pipelines.",
      "Built security trackers into Docker containers using Palo Alto Cloud Compute (Twistlock) on a RHEL Linux Server.",
      "Developed a web app from scratch to map GD facilities and display 25+ new floor plans.",
      "Spearheaded GitLab restructuring for a 100+ person IT team, leading bi-weekly sprints and ensuring GRC compliance.",
    ],
  },
  {
    title: "BI & Data Engineering Consultant",
    company: "@CRU Adjusters",
    link: "https://cruadjusters.com/",
    location: "Toronto, ON, Canada | September 2023 – Present",
    details: [
      "Proposed and implemented a Data Crosswalk for Microsoft 365 Dynamics to reduce Data Scatter.",
      "Developed and managed key BI Reporting and Analytics solutions for CRU Group’s claims operations.",
      "Created custom solutions using Python, SQLite, SQL Server, and Power BI to enhance the Insurance Adjustment process.",
      "Automated payroll processing with Python & Cron jobs, reducing financial overhead and improving reporting accuracy.",
      "Led improvement initiatives to streamline operations, saving over 60 hours/week for a 10-person team.",
      "Developed an ETL pipeline to collect data into an MSSQL database, eliminating manual adjustment calculations.",
      "Automated payroll processing with Python and Cron jobs, reducing financial overhead and enhancing reporting accuracy.",
    ],
  },
  {
    title: "Cybersecurity Simulation Intern",
    company: "@IBM Cyberrange",
    link:"https://www.uottawa.ca/faculty-engineering/spaces/cyber-range",
    location: "University of Ottawa | March 2024 – September 2024",
    details: [
      "Enhanced simulation realism using psychological and technological approaches.",
      "Collaborated with faculty and SMEs to design content tailored to cybersecurity training.",
      "Developed and maintained simulation environments for the uOttawa CyberRange, supporting 200+ professionals.",
      "Implemented psychological and tech methods to improve the realism and immersion of training scenarios.",
    ],
  },
  {
    title: "Co-Founder",
    company: "@VaporWare Games",
    link:"https://vapor-ware-site.vercel.app/",
    location: "Ottawa, ON, Canada | Jan 2024 – Present",
    details: [
      "Developed a 2D horror survival game using Godot Engine, GDScript, C#, and Python.",
      "Managed a cross-functional team of developers and designers, ensuring alignment with development goals.",
      "Crafted an immersive atmosphere and suspenseful storytelling elements within the Godot Engine’s framework.",
      "Led the design and implementation of in-game features, enhancing player engagement and gameplay mechanics.",
    ],
  },
  {
    title: "VP Communications & Competitor",
    company: "@CUDB",
    link:"https://www.instagram.com/carletondragonboat/",
    location: "Ottawa, ON, Canada | May 2024 – Present",
    details: [
      "Served as VP of Communications, overseeing team communications and media outreach.",
      "Actively participated in 5+ races during the 2024 season, contributing to the team's victory in the Ottawa League.",
      "Coordinated with team members to maintain a strong public presence and promote team events.",
    ],
  },
];


export default function Journey() {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.journeyWrapper}>
      <h1 className={styles.title}>My Journey</h1>
      {/* Timeline Navigation (Company Names) */}
      <div className={styles.timeline}>
        {experiences.map((exp, i) => (
          <button
            key={i}
            className={`${styles.companyButton} ${i === index ? styles.active : ""}`}
            onClick={() => setIndex(i)}
          >
            {exp.company}
          </button>
        ))}
      </div>

      {/* Full-Screen Experience Section */}
      <motion.section
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className={`${styles.experienceCard} ${styles.fullScreen} relative overflow-hidden`}
      >
        {/* Waveform Background */}
        <div className={styles.waveformBackground}>
          <Waveform />
        </div>
        

        {/* Content on Top */}
        <div className="relative z-10 p-6">
          <h2 className={styles.experienceTitle}>
            {experiences[index].title}{" "}
            <Link href={experiences[index].link} className={styles.highlight} target="_blank">
              {experiences[index].company}
            </Link>
          </h2>
          <p className={styles.location}>{experiences[index].location}</p>
          <ul className={styles.details}>
            {experiences[index].details.map((point, k) => (
              <li key={k}>{point}</li>
            ))}
          </ul>     
        </div>
      </motion.section>
    </div>
  );
}


