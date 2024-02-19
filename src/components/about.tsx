"use client";
import React, { useEffect } from 'react';
import SectionHeading from './sectionHeading';
import { motion  } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView("About",0.75);
  return (
    <motion.section className='max-w-[45rem] text-center leading-8 
    scroll-mt-28 mb-28'
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.175}}
    id="about"
    ref={ref}>
      <SectionHeading >About Me</SectionHeading>
      <p className='text-[1rem] mb-3 leading-9 text-justify'>
      Envision a second-year student captivated by a YouTube video on <span className='font-medium text-blue-500'>web development</span>—a pivotal moment in my journey at <span className='font-medium text-blue-500'>GITAM University, Bangalore.</span> From that spark, I embarked on a relentless pursuit of knowledge, devouring front-end tutorials and embracing formal education with <span className='font-medium text-blue-500'>Meta's</span> Coursera course. Crafting websites became my passion, leading me to serve on the <span className='font-medium text-blue-500'>UI/UX design team</span>  in my college's vibrant GitHub community. Beyond screens, I find inspiration in pushing boundaries at the gym, liberating bike rides, kitchen experiments, and untamed treks. As a fourth-year BTech student, I'm eager to transition into professional web development, ready to infuse enthusiasm and skills into creating impactful digital experiences.
      </p>
    </motion.section>
  )
}
