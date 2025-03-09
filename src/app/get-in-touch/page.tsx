'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';
import Waveform from "@/components/Waveform";  
import styles from '@/styles/contactMe.module.css';

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

export default function ContactMe() {
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    message: '',
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current, // Use form reference here
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      );
      console.log('Email sent successfully:', response);
      toast.success('Message sent successfully!'); // ✅ Success Toast
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.success('Message failed to send.'); // ✅ Success Toast
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>

      {/* Flex Container */}
      <div className={styles.flexContainer}>
        {/* Contact Info Section */}
        <div className={styles.contactInfo}>
          {/* Email Card */}
          <motion.div whileHover="hover" className={styles.card}>
            <div className={styles.waveformBackground}>
              <Waveform /> {/* Waveform Background */}
            </div>
            <h2>Email</h2>
            <p>iaroslav.volkov18@gmail.com</p>
            <a href="mailto:iaroslav.volkov18@gmail.com" className={styles.button}>Send Me A Message</a>
          </motion.div>

          {/* Messenger Card */}
          <motion.div whileHover="hover" className={styles.card}>
            <div className={styles.waveformBackground}>
              <Waveform /> {/* Waveform Background */}
            </div>
            <h2>Messenger</h2>
            <p>613-276-7657</p>
            <a href="https://api.whatsapp.com/send?phone=6132767657" className={styles.button}>Send Me A Message</a>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <input 
            type="text" 
            name="user_name" 
            placeholder="Your Full Name" 
            value={formData.user_name} 
            onChange={handleChange} 
            required 
            className={styles.input} 
          />
          <input 
            type="email" 
            name="user_email" 
            placeholder="Your Email" 
            value={formData.user_email} 
            onChange={handleChange} 
            required 
            className={styles.input} 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            className={styles.textarea}
          ></textarea>
          <motion.button whileHover={{ scale: 1.05 }} type="submit" className={styles.submitButton}>Send Message</motion.button>
        </form>
      </div>
    </div>
  );
}
