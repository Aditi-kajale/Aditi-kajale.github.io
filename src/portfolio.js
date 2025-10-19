/* === portfolio.js === */
/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // optional animation

// Splash Screen
const splashScreen = {
  enabled: false, // disable splash screen for testing
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Aditi Kajale",
  title: "Hi! I'm Aditi",
  subTitle: emoji(
    "Graduate Computer Science student specializing in Artificial Intelligence and Machine Learning, with hands-on experience in Machine Learning, NLP and Software Development"
    ),
  resumeLink:
    "https://drive.google.com/file/d/1JcnYn57bVvWOGsBuxRVxhmMFuiMnzl9G/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Aditi-kajale",
  linkedin: "https://www.linkedin.com/in/aditi-kajale/",
  gmail: "aditi.kajale@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "Full Stack Developer exploring modern technologies",
  skills: [
    emoji("⚡ Build responsive Front-end / UI for web and mobile apps"),
    emoji("⚡ Develop RESTful APIs with Node.js and Express"),
    emoji("⚡ Integrate third-party services (Firebase / AWS / APIs)")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Massachusetts Amherst",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/UMass_Amherst_logo.svg",
      subHeader: "Master of Science in Computer Science",
      duration: "Sep 2023 – May 2025",
      desc: "Graduate coursework in AI, Distributed Systems, and Cloud Computing.",
      descBullets: [
        "Graduate Teaching Assistant for Advanced Web Development",
        "Research in NLP-driven Knowledge Graphs"
      ]
    },
    {
      schoolName: "MKSSS's Cummins College of Engineering for Women, Pune",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0a/MKSSS_Cummins_College_of_Engineering_for_Women_logo.png",
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "2018 – 2022",
      desc: "Graduated with distinction; core focus on software development and data structures."
    }
  ]
};

// Tech Stack Section
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend / Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "80%" },
    { Stack: "Programming", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

// Work Experience Section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Veritas Technologies LLC",
      companylogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/0c/Veritas_Technologies_logo.svg",
      date: "May 2024 – Aug 2024",
      desc: "Worked on cloud-native data management systems, improving scalability and performance."
    },
    {
      role: "Software Developer Intern",
      company: "L3Cube Pune",
      companylogo:
        "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/google.svg",
      date: "Jan 2022 – May 2022",
      desc: "Developed NLP-driven applications for document summarization and semantic similarity."
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: false
};

// Big Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "Notable academic and professional projects",
  projects: [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      projectName: "AI-Powered Resume Analyzer",
      projectDesc:
        "A web app that analyzes resumes and provides feedback using NLP.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/Aditi-kajale/resume-analyzer" }
      ]
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Node.js_logo.svg",
      projectName: "Job Portal Application",
      projectDesc:
        "Developed a MERN stack portal for job applications with JWT-based authentication.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/Aditi-kajale/job-portal" }
      ]
    }
  ],
  display: true
};

// Achievements Section
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Awards, certifications, and recognitions earned over my career.",
  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Certified by Amazon Web Services for foundational cloud knowledge.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://aws.amazon.com/certification/"
        }
      ]
    }
  ],
  display: true
};



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume below",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let’s connect about roles or collaborations in AI, ML, and Software!",
  number: "+1 (413) 315-1082",
  email_address: "kajaleaditi01@gmail.com"
};



const isHireable = true;

// === EXPORTS ===
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  
  contactInfo,
  isHireable,
  resumeSection
};
