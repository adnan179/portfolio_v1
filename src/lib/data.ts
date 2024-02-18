import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import spacex from '../../public/spacex.png';
import projectPortal from '../../public/project subsmission.png';
import plantracx from '../../public/plantracx.png';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "UI/UX Designer At college's Github community ",
    description:
      "GitHub Community Leadership: Served as a core team member and UI/UX designer, contributing to web and app design projects within the college GitHub community, while also showcasing effective organizational and leadership skills through successful planning and management of various events, including the design of an events app and a community website, demonstrating versatility in design and project execution.",
    date: "2023-present",
  },
  {
    title: "React Application Quality Analyst at Reverr",
    description:
      "Conducted extensive testing of Reverr's React JS website, identifying design flaws and ensuring functionality, while authoring comprehensive test cases and maintaining high-quality code standards through collaboration with the development team, all while deepening my understanding of web development.",
    date: "July 2023 - November 2023",
  },
] as const;

export const projectsData = [
  {
    title: "College Project Submission portal",
    description:
      "Developed a dynamic project submission portal for students to upload files, access announcements, and streamline project management, with administrator features including team creation and updates sharing.",
    tags: ["React", "node JS", "Tailwind","express","MongoDB","firebase","Figma"],
    imageUrl: projectPortal,
    link:"https://github.com/adnan179/final_year_project",
  },
  {
    title: "Spacex",
    description:
      "SpaceX: Your ultimate online resource for comprehensive information on space missions, capsules, dragons, and more.",
    tags: ["React", "Next.js", "Tailwind","Framer Motion","Figma"],
    imageUrl: spacex,
    link:"https://www.figma.com/file/BLjNR8mIJW3W5aWNjoA44D/spacex?type=design&node-id=0%3A1&mode=design&t=Hz29iX6cFejhpom8-1",
  },
  {
    title: "Plantracx",
    description:
      "Revolutionizing fitness journeys with an all-in-one platform: Plan, Track, Achieve, and Inspire!",
    tags: ["Figma","Next.js","React", "MongoDB", "Tailwind", "node JS","Framer motion"],
    imageUrl: plantracx,
    link:"https://www.figma.com/file/q3vNcATh0biKGBbhq5rQkg/fitness-app?type=design&node-id=0%3A1&mode=design&t=Fc4ak7CKZEOHlgPq-1",
  },
  
  
  
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Framer Motion",
] as const;