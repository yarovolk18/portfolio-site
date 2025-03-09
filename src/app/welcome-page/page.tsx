import Waveform from "@/components/Waveform";
import Typewriter from "@/components/typewriter";
import styles from "@/styles/welcomePage.module.css"; // Import styles

export default function WelcomePage() {
  return (
    <main className={styles.container}>
      <Typewriter text="Hi, I'm Yaro" textSize="text-7xl typewriter" speed={100} />
      
      <div className={styles.waveformContainer}>
        <Waveform />
      </div>
      
      <Typewriter text="Welcome to my Portfolio :)" textSize="text-4xl typewriter" speed={200} />
    </main>
  );
}
