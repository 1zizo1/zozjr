"use client";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';


// Dynamically import all components with SSR: false to avoid rendering them during SSR
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const AboutSection = dynamic(() => import("./components/homepage/about"), { ssr: false });
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });
const Education = dynamic(() => import("./components/homepage/education"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact"), { ssr: false });


export default function Home() {
async function getData() {
  const res = await fetch(`https://dev.to/api/articles/me/all`,{
    headers:{
      "api-key":process.env.API_KEY
    }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  return filtered;
};
useEffect(() => {
  getData()
}, [])

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  )
};