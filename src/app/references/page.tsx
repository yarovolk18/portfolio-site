"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/resumeReference.module.css"; // Import styles

const referencesFilePath = "/assets/References - Iaroslav (Yaro) Volkov.pdf";

export default function References() {
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

      <h1 className={styles.title}>References</h1>
      <p className={styles.text}>Here are some references from my past experiences:</p>

      {isMobile ? (
        // Mobile users get a download button
        <a href={referencesFilePath} download className={styles.downloadButton}>
          📥 Download References
        </a>
      ) : (
        // Desktop users see the embedded PDF
        <iframe src={referencesFilePath} className={styles.pdfViewer}></iframe>
      )}
    </main>
  );
}
