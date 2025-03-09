"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/resumeReference.module.css"; // Import styles

export default function Resume() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <main className={styles.container}>
      {/* "Go Back" button */}
      <Link href="/" className={styles.goBack}>
        ⬅ Go Back
      </Link>

      <h1 className={styles.title}>Resume</h1>
      <p className={styles.text}>View my resume below:</p>

      {isMobile ? (
        // Mobile users get a download button
        <a
          href="/assets/resume.pdf"
          download
          className={styles.downloadButton}
        >
          📥 Download Resume
        </a>
      ) : (
        // Desktop users see the embedded PDF
        <iframe
          src="/assets/resume.pdf"
          className={styles.pdfViewer}
        ></iframe>
      )}
    </main>
  );
}
