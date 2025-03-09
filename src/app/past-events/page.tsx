"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/pastEvents.module.css";

const events = [
  {
    title: "Tech Intern Panel",
    image: "/assets/internPanel.jpg",
    link: "https://www.youtube.com/watch?v=QCv7cdQSb6w&t=1s",
  },
  {
    title: "uOttaHack 7",
    image: "/assets/uOttaHack7Team.jpg",
    link: "https://2025.uottahack.ca",
  },
  {
    title: "uOttaHack 6",
    image: "/assets/uOttaHack6Team.jpg",
    link: "https://2024.uottahack.ca",
  },
  {
    title: "uOttaHack 5",
    image: "/assets/uOttaHack5Team.jpg",
    link: "https://2023.uottahack.ca",
  },
  {
    title: "CUSEC 2025",
    image: "/assets/cusec2025.png",
    link: "https://2025.cusec.net/",
  },
];

export default function PastEvents() {
  const [index, setIndex] = useState(0);

  // Slide to the next or previous event
  const slideGallery = (direction: "next" | "prev") => {
    const newIndex =
      direction === "next"
        ? (index + 1) % events.length
        : (index - 1 + events.length) % events.length;
    setIndex(newIndex);
  };

  // Auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      slideGallery("next");
    }, 5000);
  
    return () => clearInterval(intervalId);
  }, [index, slideGallery]);

  return (
    <div className={styles.pastEventsContainer}>
      <h1 className={styles.title}>Past Events</h1>

      <div className={styles.sliderContainer}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {events.map((event, i) => (
            <div key={i} className={styles.slide}>
              <Link href={event.link}>
                <div className={styles.eventImageWrapper}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={500}
                    height={300}
                    className={styles.eventImage}
                  />
                </div>
                <h3 className={styles.eventTitle}>{event.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.navigation}>
        <button onClick={() => slideGallery("prev")}>◀ Prev</button>
        <button onClick={() => slideGallery("next")}>Next ▶</button>
      </div>
    </div>
  );
}