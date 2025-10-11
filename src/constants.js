// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import neon from './assets/tech_logo/neon.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import Brainybeam from './assets/company_logo/brainybeam.jpeg';
import tss from './assets/company_logo/tss.jpeg';

// Education Section Logo's
import marwadi from './assets/education_logo/marwadi.jpeg';
import sarvoday from './assets/education_logo/sarvoday.png';
import kailash from './assets/education_logo/kailash.png';

// Project Section Logo's
import disease from "./assets/work_logo/disease.jpg";
import saas from "./assets/work_logo/saas.png";
import passop from "./assets/work_logo/passop.png";
import weather from "./assets/work_logo/weather.jpg";
import travels from "./assets/work_logo/wanderlust.png";
import ecommerce from "./assets/work_logo/ecommerce.png";
import webAnalyzer from "./assets/work_logo/web analyzer.png";

//certificate section logo
import openweaver from "./assets/certificate_logo/openweaver.png";
import dbms from "./assets/certificate_logo/Dbms.png";
import frontend from "./assets/certificate_logo/front end.png";
import cloud from "./assets/certificate_logo/cloud.png";
import aws from "./assets/certificate_logo/aws.png";
import figma from "./assets/certificate_logo/figma.png";


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Neon', logo: neon },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: Brainybeam,
      role: "Fullstack Developer",
      company: "Brainybeam Info-Tech PVT LTD",
      date: "May 26 - June-24",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
      ],
    },
    {
      id: 1,
      img: tss,
      role: "Python Developer Intern",
      company: "TSS Consultancy Pvt Ltd",
      date: "Jan 25 - May 25 ",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "Python",
        "scarpy",
        "git",
        "SQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: marwadi,
      school: "B.Tech Marwadi University, Rajkot",
      date: "Sept 2022 - Present",
      grade: "9.08 CGPA",
      desc: "I completed my Bachelor's degree in Information Technology from Marwadi University College, Rajkot. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at B.Tech College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Information Technology)",
    },
    {
      id: 1,
      img: sarvoday,
      school: "Sarvoday, Rajkot",
      date: "Apr 2019 - March 2021",
      grade: "65.07%",
      desc: "I completed my class 12 education from Sarvoday School, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: kailash,
      school: "Kailash school, Rajkot",
      date: "Apr 2012 - March 2018",
      grade: "77.3%",
      desc: "I completed my class 10 education from kailash School, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Weather-app",
      description:
       "API-based web app built using HTML, CSS, and JavaScript. Displays weather based on user's location or search input. Shows relevant weather images dynamically. Minimalist UI, fully responsive and mobile-friendly.",
      image: weather,
      tags:  ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/shpatel123/Weather-App",
      webapp: "https://shpatel123.github.io/Weather-App/",
    },
    {
      id: 1,
      title: "Grocery Website",
      description:
        "Built E-commerce food order website. In this website i create product and seller webpage. Authentication for both admin and user use jwt token, cookies and session. Uses MongoDB for data storage. User also can add product to cart and checkout then payment.",
      image: ecommerce,
      tags: ["React.js", "Node.js","Express.js", "Tailwind CSS", "MongoDB", "Cloud service"],
      github: "https://github.com/shpatel123/Grocery-Website",
      webapp: "https://grocery-website-frontend-h5p9.onrender.com/",
    },
    {
      id: 2,
      title: "Web Accessibility Analyzer",
      description:
        "A comprehensive full-stack web application that automatically scans websites for accessibility issues and provides detailed reports with actionable insights. Built to help developers create more inclusive web experiences.",
      image: webAnalyzer,
      tags: ["React.js", "Tailwind CSS", "Firebase", "Node.js", "Express.js"],
      github: "https://github.com/shpatel123/Web-Accessibility-Analyzer/tree/master",
      webapp: "https://web-accessibility-analyzer-2.onrender.com",
    },
    {
      id: 3,
      title: "Wanderlust Travel Website",
      description:
        "Full-stack travel website built with Node.js and Express. Implements CRUD features for travel listings. Responsive frontend using Bootstrap. Integrates cloud services and third-party APIs.",
      image: travels,
      tags: ["Node.js", "Express", "MongoDB", "Bootstrap", "API", "Cloud service"],
      github: "https://github.com/shpatel123/Wanderlust-Website",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "AI Saas Platform",
      description:
        "Full stack website where user can use AI features like instagram caption generator, email writer, resume review, image generator etc. Built with React for frontend and Node.js with Express for backend. Integrated various AI APIs to provide functionalities.",
      image: saas,
      tags:  [ "React.js", "Node.js", "Express.js", "Neon (PostgreSQL)", "Clerk Authentication"],
      github: "https://github.com/shpatel123/QuickAI",
      webapp: "https://quickai-frontend-omgr.onrender.com/",
    },
    {
      id: 5,
      title: "Disease-predictor",
      description:
        "Predicts disease based on symptoms using machine learning. Recommends appropriate drugs from dataset. Built with Flask and integrated with Google Gemini API. Uses Random Forest classifier for prediction.",
      image: disease,
      tags:["Python", "Machine Learning", "Flask"],
      github: "https://github.com/shpatel123/disease-prediction-",
      webapp: "https://webversedigital.com/",
    },
  ];  

export const certificates = [
  {
    id: 1,
    title: "Web Development Intern",
    issuer: "Openweaver",
    date: "12 Oct 2023",
    image: openweaver,
  },
  {
    id: 2,
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS",
    date: "16 July 2025",
    image: cloud,
  },
  {
    id: 3,
    title: "Database with SQL",
    issuer: "Oracle Academy",
    date: "23 Sep 2023",
    image: dbms,
  },
  {
    id: 4,
    title: "Front End Development",
    issuer: "Infosys",
    date: "30 March 2024",
    image: frontend,
  },
  {
    id: 5,
    title: "AWS Academy Machine Learning",
    issuer: "AWS",
    date: "22 Feb 2025",
    image: aws,
  },
  {
    id: 6,
    title: "Figma Training",
    issuer: "Udemy",
    date: "19 June 2025",
    image: figma,
  },
];