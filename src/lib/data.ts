import projectPortal from '../../public/project subsmission.png';
import Ionarc from "../../public/ionarc.png";
import scrapper from "../../public/scrapper.png";
import linkedin from "../../public/Linkedin_revamp_design.png";
import morningBuddy from "../../public/morning_buddy_thumbnail.png";

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
  {
    tag: "Github community GITAM",
    title: "UI/UX Designer and Community Builder for GitHub GITAM Community",
    description:
      "Led the design of innovative projects and case studies that enhanced the learning experience for students. Spearheaded workshops and dynamic events while collaborating with a team to educate and empower students on GitHub’s tools, fostering a strong culture of collaboration, learning, and growth within the college community.",
    date: "July 2023 - April 2024",
  },
] as const;

export const projectsData = [
  {
    title: "LinkedIn Home Page Refresh",
    description:
      "🚀 Implemented a fresh, user-focused redesign of LinkedIn’s homepage. Streamlined navigation, enhanced visual hierarchy, and improved accessibility for a smoother, more engaging user experience. Focused on subtle yet impactful design changes to elevate functionality and usability. 🔒✨",
    tags: ["Figma"],
    imageUrl: linkedin,
    link:"",
    GithubLink:"",
    dribbbleLink:"https://dribbble.com/shots/24944391-LinkedIn-Home-Page-Refresh",
  },
  {
    title: "Morning Buddy",
    description:
      "🚀 Designed and developed a sleek, user-friendly news app focused on delivering quick, categorized news updates. The immersive interface ensures users can easily browse breaking stories across various categories, with a visually engaging design for an enhanced reading experience. 🔒✨",
    tags: ["Figma"],
    imageUrl: morningBuddy,
    link:"",
    GithubLink:"",
    dribbbleLink:"https://dribbble.com/shots/24895816-Morning-Buddy",
  },
  {
    title: "IonArc Consultancy Website",
    description:
      "🚀Crafted a cutting-edge website for IonArc Consultancy as an exciting freelance project! 🌐 This dynamic platform highlights their top-tier cybersecurity services and innovative solutions, ensuring clients stay secure and ahead of the curve. 🔒✨",
    tags: ["React", "Tailwind","Framer Motion","Figma"],
    imageUrl: Ionarc,
    link:"https://ionarc-website.vercel.app/",
    GithubLink:"",
    dribbbleLink:"",
  }, 
  {
    title: "Scrapper/Summarizer",
    description:"🚀 Introducing our Web Scraper and Summarizer Tool! 🚀 Effortlessly extract and summarize content from any URL, export as PDFs 📄, and track your summaries 🗂️. With secure sign-in, clipboard copying 📋, and future API enhancements ⚙️, it's perfect for quick, efficient content management! #WebScraping #ContentSummarization🌐 ",
    tags: ["React", "Tailwind", "Node JS","Express JS", "MongoDB"],
    imageUrl: scrapper,
    link:"",
    GithubLink:"https://github.com/adnan179/Asva_summarizer_assignment",
    dribbbleLink:"",
  },
  {
    title: "College Project Submission portal",
    description:"🚀 Developed a dynamic project submission portal 📁 for students to upload files 📤, access announcements 📢, and streamline project management 🗂️. Included administrator features such as team creation 👥 and updates sharing 🔄 for an efficient and engaging user experience! 🌟",
    tags: ["MERN","Tailwind","firebase","Figma","Postman"],
    imageUrl: projectPortal,
    link:"",
    GithubLink:"https://github.com/adnan179/final_year_project",
    dribbbleLink:"",
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