import projectPortal from '../../public/project subsmission.png';
import nestseek from "../../public/nestseek.png";
import dental from "../../public/dental-admin-dashboard.png";

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
    tag:"Github Community",
    title: "UI/UX Designer At college's Github community ",
    description:
      "GitHub Community Leadership: Served as a core team member and UI/UX designer, contributing to web and app design projects within the college GitHub community, while also showcasing effective organizational and leadership skills through successful planning and management of various events, including the design of an events app and a community website, demonstrating versatility in design and project execution.",
    date: "2023-present",
  },
  {
    tag: "Reverr",
    title: "React Application Quality Analyst at Reverr",
    description:
      "Conducted extensive testing of Reverr's React JS website, identifying design flaws and ensuring functionality, while authoring comprehensive test cases and maintaining high-quality code standards through collaboration with the development team, all while deepening my understanding of web development.",
    date: "July 2023 - November 2023",
  },
] as const;

export const projectsData = [
  {
    title: "College Project Submission portal",
    description:"🚀 Developed a dynamic project submission portal 📁 for students to upload files 📤, access announcements 📢, and streamline project management 🗂️. Included administrator features such as team creation 👥 and updates sharing 🔄 for an efficient and engaging user experience! 🌟",
    tags: ["React", "node JS", "Tailwind","express","MongoDB","firebase","Figma"],
    imageUrl: projectPortal,
    link:"https://github.com/adnan179/final_year_project",
  },
  {
    title: "NestSeek",
    description:"🏡 NestSeek is a real estate platform that allows sellers to upload and manage property listings 🏘️, enables buyers to view detailed property information 📋 and contact sellers 📞, and provides a feature for users to post and find roommate requests 👫 based on their preferences. 🌟",
    tags: ["React", "Tailwind", "Node JS","Express JS", "MongoDB", "Firebase", "JWT"],
    imageUrl: nestseek,
    link:"https://github.com/adnan179/Nestseek",
  },
  {
    title: "Dental management Dashboard",
    description:
      "🦷 Introducing our Dental Admin Dashboard! 🌟Manage appointments, track attendance, and monitor finances effortlessly. Stay organized with inventory management and vendor tracking. Elevate your dental practice to new heights of efficiency and success! 💼💡",
    tags: ["React", "Next.js", "Tailwind","Framer Motion","Figma"],
    imageUrl: dental,
    link:"",
  }, 
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Firebase",
  "SQL",
  "Redux",
  "Reactflow",
  "Restful API",
  "Postman",
  "Figma",
  "Python",
  "Framer Motion",
] as const;