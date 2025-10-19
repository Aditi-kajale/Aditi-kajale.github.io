/* ======= Portfolio Config for Aditi Kajale ======= */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = { animated: true };

const greeting = {
  username: "Aditi Kajale",
  title: "Hi! I'm Aditi 👋",
  subTitle: emoji(
    "A passionate Software Engineer and Full Stack Developer 🚀 with hands-on experience in Machine Learning, NLP, and scalable Web Applications using Java, Spring Boot, React, and Transformer models."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qewzbGfmzsFn88hykuf0UXlgRVKMxKnE/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Aditi-kajale",
  linkedin: "https://www.linkedin.com/in/aditi-kajale/",
  gmail: "kajaleaditi01@gmail.com",
  googleScholar:
    "https://scholar.google.com/citations?user=vkM2IX0AAAAJ&hl=en",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "FULL STACK SOFTWARE DEVELOPER & MACHINE LEARNING ENTHUSIAST WITH A PASSION FOR BUILDING DATA-DRIVEN APPLICATIONS",
  skills: [
    emoji(
      "⚡ Develop robust full-stack web applications using Java, Spring Boot, React, and REST APIs"
    ),
    emoji(
      "⚡ Build and fine-tune NLP and Transformer-based ML models for real-world use cases"
    ),
    emoji(
      "⚡ Deploy scalable solutions leveraging databases, caching, and modern DevOps tools"
    )
  ],

  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "PyTorch", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-memory" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Massachusetts Amherst",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/6/6f/University_of_Massachusetts_Amherst_seal.svg",
      subHeader: "Master of Science in Computer Science",
      duration: "Aug 2025 – May 2027",
      desc: "Coursework: Machine Learning, Advanced NLP, Computer and Network Security"
    },
    {
      schoolName: "MKSSS Cummins College of Engineering for Women",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/a/a9/MKSSS_Cummins_College_logo.png",
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "Aug 2019 – Jul 2023",
      desc: "GPA: 9.34 / 10 | Coursework: Data Structures, Algorithms, AI, OS, DBMS"
    }
  ]
};

// Tech Stack Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend / Design", progressPercentage: "90%" },
    { Stack: "Backend Development", progressPercentage: "85%" },
    { Stack: "Machine Learning / NLP", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Member of Technical Staff",
      company: "D.E. Shaw & Co.",
      companylogo:
        "https://upload.wikimedia.org/wikipedia/en/d/d2/D.E._Shaw_%26_Co._logo.svg",
      date: "Jul 2023 – Jul 2025",
      desc: "Designed and optimized large-scale financial systems, boosting API performance by 80% and improving efficiency through caching and concurrent data structures."
    },
    {
      role: "Machine Learning Intern",
      company: "Veritas Technologies LLC",
      companylogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Veritas_Technologies_logo.svg",
      date: "Sep 2022 – Jun 2023",
      desc: "Built transformer-based text summarization models (BART) achieving 30% higher ROUGE scores."
    },
    {
      role: "Natural Language Processing Intern",
      company: "L3Cube Labs",
      companylogo:
        "https://avatars.githubusercontent.com/u/86868216?s=200&v=4",
      date: "Sep 2022 – Jul 2023",
      desc: "Developed multilingual SBERT models for Indic languages with over 400k+ downloads on Hugging Face."
    },
    {
      role: "Technology Developer Intern",
      company: "D.E. Shaw & Co.",
      companylogo:
        "https://upload.wikimedia.org/wikipedia/en/d/d2/D.E._Shaw_%26_Co._logo.svg",
      date: "May 2022 – Jul 2022",
      desc: "Created full-stack AOP tracking for compensation systems, reducing latency to 20ms and integrating legacy systems."
    }
  ]
};

// Big Projects
const bigProjects = {
  title: "Projects",
  subtitle: "Here are some projects I've built and contributed to",
  projects: [
    {
      image: "https://cdn-icons-png.flaticon.com/512/3208/3208674.png",
      projectName: "NSE-BSE Arbitrage Recommendation System",
      projectDesc:
        "Web-based trading system detecting arbitrage opportunities in Nifty 50 stocks using Angular, Spring Boot, and MySQL.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Aditi-kajale/NSE-BSE-Arbitrage-Recommendation-System"
        }
      ]
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3039/3039436.png",
      projectName: "TESSA: 4-in-1 Text Analytics Engine",
      projectDesc:
        "Integrated NLP platform leveraging Transformer models (BERT, BART) for text summarization and semantic analysis.",
      footerLink: []
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Awards, publications, and recognitions in ML, NLP, and software development.",
  achievementsCards: [
    {
      title: "Research Publications",
      subtitle:
        "3 research papers published in Springer, ACL Anthology, and IEEE proceedings.",
      image: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
      footerLink: [
        {
          name: "Springer",
          url: "https://link.springer.com/chapter/10.1007/978-3-031-37963-5_82"
        },
        {
          name: "ACL Anthology",
          url: "https://aclanthology.org/2023.paclic-1.16.pdf"
        },
        {
          name: "IEEE",
          url: "https://ieeexplore.ieee.org/document/11070849"
        }
      ]
    },
    {
      title: "WeTech Goldman Sachs Global Mentorship Award",
      subtitle:
        "Received prestigious scholarship awarded to only 50 women engineers across India."
    },
    {
      title: "Citi Corp Hackathon Winner",
      subtitle:
        "Won the apprenticeship project competition securing 1st position."
    },
    {
      title: "Flipkart Girls Wanna Code 4.0",
      subtitle:
        "Selected among top 200 participants from 9,700 applicants."
    }
  ],
  display: true
};

// ====== Added back to fix Netlify build ======
const openSource = {
  showGithubProfile: "true",
  display: false
};
// ============================================

// Contact
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have an idea or collaboration in mind? I’d love to connect and discuss opportunities.",
  number: "+1 4133151082",
  email_address: "kajaleaditi01@gmail.com"
};

const twitterDetails = { userName: "aditi_kajale", display: false };
const isHireable = true;

// Exports
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  openSource, // ✅ added back
  contactInfo,
  twitterDetails,
  isHireable
};
