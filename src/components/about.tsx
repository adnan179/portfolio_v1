"use client";
import React, { useEffect } from 'react';
import SectionHeading from './sectionHeading';
import { motion  } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView("About",0.75);
  return (
    <motion.section className='max-w-[45rem] text-center leading-8 
    scroll-mt-28'
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.175}}
    id="about"
    ref={ref}>
      <SectionHeading >About Me</SectionHeading>
      <p className='text-[1rem] mb-3 leading-9 text-justify'>
        Imagine a second-year student, stumbling upon a 
        <span className="font-medium"> YouTube video about web development</span> 
        and being instantly captivated. That was me, at a pivotal moment in my academic journey at 
        <span className="font-medium"> GITAM University, Bangalore.</span>
        From that serendipitous encounter, I've been on an unyielding quest for knowledge. I delved into YouTube playlists, 
        devouring front-end development tutorials with fervor. Soon after, I eagerly embraced formal education, enrolling in 
        <span> Meta's front-end development</span> course on Coursera. Online learning became my ally, guiding me through the labyrinth of full-stack development.
        The art of crafting websites, meticulously weaving code and design, became my fervent passion. I proudly serve as a member of the 
        <span className="font-medium"> UI/UX design team</span> in my college's vibrant <span className="font-medium"> GitHub community</span>.
        Beyond the screens and code editors, I find inspiration in diverse pursuits. From pushing boundaries at the gym to liberating bike rides, 
        from experimenting in the kitchen to exploring untamed trails during treks—these experiences fuel my creativity and zest for life.
        Fourth-year BTech student at GITAM University, Bangalore. Eager to transition into web development professionally. 
        Ready to bring enthusiasm and skills to create impactful digital experiences.
      </p>
    </motion.section>
  )
}
