import projectPortal from '../../public/project subsmission.png';
import Ionarc from "../../public/ionarc.png";
import scrapper from "../../public/scrapper.png";

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
    tag:"Freelancing",
    title: "Front-end developer",
    description:
      "As a freelance web developer, I've successfully completed a project for IonArc Consultancy, delivering a dynamic website that showcases their services and solutions. This project exemplifies my ability to create immersive, user-friendly web experiences. I'm excited to take on more amazing projects and continue bringing innovative ideas to life.",
    date: "July 2024-present",
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
    title: "IonArc Consultancy Website",
    description:
      "🚀 I crafted a cutting-edge website for IonArc Consultancy as an exciting freelance project! 🌐 This dynamic platform highlights their top-tier cybersecurity services and innovative solutions, ensuring clients stay secure and ahead of the curve. 🔒✨",
    tags: ["React", "Tailwind","Framer Motion","Figma"],
    imageUrl: Ionarc,
    link:"https://ionarc.in/",
    GithubLink:"",
  }, 
  {
    title: "Scrapper/Summarizer",
    description:"🚀 Introducing our Web Scraper and Summarizer Tool! 🚀 Effortlessly extract and summarize content from any URL, export as PDFs 📄, and track your summaries 🗂️. With secure sign-in, clipboard copying 📋, and future API enhancements ⚙️, it's perfect for quick, efficient content management! #WebScraping #ContentSummarization🌐 ",
    tags: ["React", "Tailwind", "Node JS","Express JS", "MongoDB"],
    imageUrl: scrapper,
    link:"",
    GithubLink:"https://github.com/adnan179/Asva_summarizer_assignment",
  },
  {
    title: "College Project Submission portal",
    description:"🚀 Developed a dynamic project submission portal 📁 for students to upload files 📤, access announcements 📢, and streamline project management 🗂️. Included administrator features such as team creation 👥 and updates sharing 🔄 for an efficient and engaging user experience! 🌟",
    tags: ["MERN","Tailwind","firebase","Figma","Postman"],
    imageUrl: projectPortal,
    link:"",
    GithubLink:"https://github.com/adnan179/final_year_project",
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
  "Three JS",
  "GSAP",
] as const;