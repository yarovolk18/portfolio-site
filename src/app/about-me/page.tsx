import Image from "next/image";
import Link from "next/link";
import Waveform from "@/components/Waveform"; // Import waveform component
import styles from "@/styles/aboutMe.module.css";

export default function AboutMe() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>About Me</h1>

      {/* Content Layout */}
      <div className={styles.content}>
        {/* Left: Image Section */}
        <div className={styles.imageContainer}>
          <Image
            src="/assets/intern_panel_single_cropped.jpg"
            width={600}
            height={600}
            alt="Speaking at an event"
            className="rounded-lg"
          />
        </div>

        {/* Right: Text & Stats Section */}
        <div className={styles.textContainer}>
          {/* Stats Section */}
          <div className={styles.statsContainer}>
            <StatCard title="Experience" value="3+ Years" subtitle="Working Experience" />
            <StatCard title="Students Connected" value="2000+" subtitle="Across North America" />
            <StatCard title="Projects" value="15+" subtitle="Complete" />
          </div>

          {/* About Text */}
          <p className="text-lg text-gray-300">
            I'm a 3rd-year Computer Science student at the University of Ottawa with a passion for leadership, technology & teaching.
          </p>

          <p className="text-lg text-gray-300">
            As Co-Director & Developer of <Link href="https://uottahack.ca" className={styles.glowLink}>uOttaHack</Link>, Canada’s 2nd largest Hackathon, I led a team of 30 to execute incredible events in 2023, 2024 & 2025.
          </p>

          <p className="text-lg text-gray-300">
            I’ve worked at the <Link href="https://cyberrange.ca" className={styles.glowLink}>Cyberrange</Link> lab (a collaboration between IBM & uOttawa) on cybersecurity training simulations & interned at <Link href="https://gdmissionsystems.ca/" className={styles.glowLink}>General Dynamics</Link>, deploying AWS infrastructure & K3S for cloud-based solutions.
          </p>

          <p className="text-lg text-gray-300">
            Currently, I’m a BI & Data Engineering Consultant at <Link href="https://cruadjusters.com/" className={styles.glowLink}>CRU Group</Link> & advisor at <Link href="https://uottahack.ca" className={styles.glowLink}>uOttaHack</Link> & <Link href="https://www.instagram.com/uottawasesa/" className={styles.glowLink}>SESA</Link>.
          </p>

          <p className="text-lg text-gray-300">
            Outside of tech, I enjoy teaching, powerlifting, dragonboat, playing guitar & speedcubing!
          </p> 

          {/* Call-to-Action Button */}
          <div className="flex justify-center">
            <Link href="#contact" className={styles.button}>
              Let’s Talk
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

// Define TypeScript Props Interface
interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
}

function StatCard({ title, value, subtitle }: StatCardProps) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statText}>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-sm">{subtitle}</p>
      </div>

      {/* Move Waveform below text */}
      <div className={styles.waveformContainer}>
        <Waveform />
      </div>
    </div>
  );
}