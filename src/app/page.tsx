import { motion } from "framer-motion";
import Waveform from "@/components/Waveform";
import Typewriter from "@/components/typewriter";
import Header from "./header/page";
import AboutMe from "./about-me/page";
import WelcomePage from "./welcome-page/page";
import Journey from "./my-journey/page";
import Experience from "./experience/page";
import PastEvents from "./past-events/page";
import ContactMe from "./get-in-touch/page";
import Footer from "./footer/page";
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <main>
      <Navbar/> 
      <section id=""><Header/></section>
      <section id=""><WelcomePage/></section>
      <section id="about"><AboutMe/></section>
      <section id="journey"><Journey/></section>
      <section id="experience"><Experience/></section>
      <section id="past-events"><PastEvents/></section>
      <section id="contact"><ContactMe/></section>
      <section id=""><Footer/></section> 
          
    </main>
  );
}

