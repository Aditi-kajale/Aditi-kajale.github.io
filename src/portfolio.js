/* === portfolio.js === */
/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // optional animation
import umassLogo from "./assets/images/Umass.png";
import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaDatabase,
  FaProjectDiagram,
  FaTasks,
  FaCogs,
  FaBrain,
  FaLeaf
} from "react-icons/fa";
import { SiC, SiCplusplus, SiSpringboot, SiPytorch, SiTensorflow, SiScikitlearn, SiNumpy, SiPandas, SiRedux, SiMysql, SiMongodb, SiRedis, SiJunit } from "react-icons/si";


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
// Blog Section
const blogSection = {
  title: "Blogs",
  subtitle: "Sharing insights and learnings from my projects and research.",
  displayMediumBlogs: "false", // Set true to display Medium blogs
  display: false // Set true if you want to show this section
};

// Talk Section
const talkSection = {
  title: "Talks",
  subtitle: emoji("I love sharing knowledge 💬"),
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcasts 🎙️"),
  subtitle: "I occasionally discuss AI and tech topics.",
  podcasts: [],
  display: false
};


// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Aditi-kajale",
  linkedin: "https://www.linkedin.com/in/aditi-kajale/",
  gmail: "kajaleaditi01@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "AI/ML Engineer & Full Stack Developer",
  skills: [
    emoji("⚡ Build intelligent AI/ML solutions including NLP pipelines and Transformer-based models"),
    emoji("⚡ Develop full-stack web applications with responsive front-end and robust back-end systems"),
    emoji("⚡ Fine-tune pre-trained models (BERT, BART) for domain-specific applications"),
    emoji("⚡ Optimize large-scale data workflows and enhance performance using caching, multithreading, and database tuning")
  ],
  softwareSkills: [
  // Programming Languages
  { skillName: "C", icon: "SiC", color: "#A8B9CC" },
  { skillName: "C++", icon: "SiCplusplus", color: "#00599C" },
  { skillName: "Python", icon: "FaPython", color: "#3776AB" },
  { skillName: "Java", icon: "FaJava", color: "#E76F00" },
  { skillName: "JavaScript", icon: "FaJs", color: "#F7DF1E" },
  { skillName: "HTML", icon: "FaHtml5", color: "#E34F26" },
  { skillName: "CSS", icon: "FaCss3Alt", color: "#1572B6" },

  // Databases
  { skillName: "MySQL", icon: "SiMysql", color: "#4479A1" },
  { skillName: "MongoDB", icon: "SiMongodb", color: "#47A248" },
  { skillName: "Redis", icon: "SiRedis", color: "#DC382D" },
  { skillName: "SQL Server", icon: "FaDatabase", color: "#CC2927" },

  // Frameworks & Tools
  { skillName: "React", icon: "FaReact", color: "#61DAFB" },
  { skillName: "Redux", icon: "SiRedux", color: "#764ABC" },
  { skillName: "Spring Boot", icon: "SiSpringboot", color: "#6DB33F" },
  { skillName: "Transformer Models", icon: "FaBrain", color: "#FF6F00" },
  { skillName: "PyTorch", icon: "SiPytorch", color: "#EE4C2C" },
  { skillName: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00" },
  { skillName: "Scikit-learn", icon: "SiScikitlearn", color: "#F7931E" },
  { skillName: "NumPy", icon: "SiNumpy", color: "#013243" },
  { skillName: "Pandas", icon: "SiPandas", color: "#150458" },
  { skillName: "Model Fine-tuning", icon: "FaCogs", color: "#808080" },
  { skillName: "Linux", icon: "FaLinux", color: "#FCC624" },
  { skillName: "Git", icon: "FaGitAlt", color: "#F05032" },
  { skillName: "GitHub", icon: "FaGithub", color: "#181717" },
  { skillName: "Agile Development", icon: "FaTasks", color: "#6DB33F" },
  { skillName: "SDLC", icon: "FaProjectDiagram", color: "#5C6BC0" },
  { skillName: "REST APIs", icon: "FaCogs", color: "#4285F4" },
  { skillName: "JUnit", icon: "SiJunit", color: "#25A162" }
],

  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Massachusetts Amherst",
      logo: umassLogo,
      subHeader: "Master of Science in Computer Science",
      duration: "Expected Graduation: May 2027",
      desc: "Specializing in AI and ML",
      descBullets: [
        "Coursework: Machine Learning, Advanced Natural Language Processing, Computer and Network Security"
      ]
    },
    {
      schoolName: "MKSSS's Cummins College of Engineering for Women, Pune",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0a/MKSSS_Cummins_College_of_Engineering_for_Women_logo.png",
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "2019 – 2023",
      desc: "Graduated with distinction; core focus on data structures, algorithms and software development."
    }
  ]
};

// Tech Stack Section
const techStack = {
  viewSkillBars: false,
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
      role: "Member of Technical Staff",
      company: "D.E. Shaw & Co.",
      companylogo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/D.E._Shaw_%26_Co._Logo.png",
      date: "Jul 2023 – Jul 2025",
      descBullets: [
        "Designed full-stack solutions for critical workflows in large financial systems, achieving 80% faster API responses and 85% increase in user efficiency.",
        "Engineered an advanced regex-based search for secure note management with Redis caching, slashing search time by 75%.",
        "Integrated '@' annotation support for attachment references in notes with automated hyperlinking and retrieval.",
        "Implemented thread-safe Usage Auditing using concurrent linked queues for in-memory record buffering and batched processing."
      ]
    },
    {
      role: "Natural Language Processing Intern",
      company: "L3 Cube Labs",
      companylogo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/google.svg",
      date: "Sep 2022 – Jul 2023",
      descBullets: [
        "Proposed a two-step fine-tuning on machine-translated NLI and STS datasets, releasing L3Cube-MahaSBERT and L3Cube-HindSBERT with state-of-the-art semantic similarity performance.",
        "Developed L3Cube-IndicSBERT, the first multilingual sentence representation model for 10 major Indic languages.",
        "Achieved 403k+ downloads for L3Cube-IndicSBERT, 14k+ for L3Cube-HindSBERT, and 6k+ for L3Cube-MahaSBERT to date."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Veritas Technologies LLC",
      companylogo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Veritas_Technologies_logo.svg",
      date: "Sep 2022 – Jun 2023",
      descBullets: [
        "Built an integrated transformer-based abstractive text summarization engine using BART.",
        "Fine-tuned models on novel data, achieving a 30% increase in ROUGE scores."
      ]
    },
    {
      role: "Technology Developer Intern",
      company: "D.E. Shaw & Co.",
      companylogo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/D.E._Shaw_%26_Co._Logo.png",
      date: "May 2022 – Jul 2022",
      descBullets: [
        "Developed a full-stack AOP solution to track user activity on the Compensation Portal handling sensitive data, optimizing response time to 20ms.",
        "Designed proof-of-concept UI components for portal performance visualization and usage analytics to support load forecasting."
      ]
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
      image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Stock_market_icon.svg",
      projectName: "NSE BSE Arbitrage Recommendation System",
      projectDesc:
        "Built a web-based trade recommendation system using the Yahoo Finance API to detect BSE–NSE arbitrage opportunities in Nifty 50 stocks, enabling real-time email alerts and improving trading efficiency.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/Aditi-kajale/NSE-BSE-Arbitrage-Recommendation-System" }
      ]
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/0/05/NLP_icon.svg",
      projectName: "TESSA: the 4-in-1 Text Analytics Engine",
      projectDesc:
        "Engineered an integrated NLP platform leveraging Transformer architecture for Abstractive Text Summarization, improving ROUGE-L and content coherence scores by 30% through model fine-tuning and data optimization.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/Aditi-kajale/TESSA" }
      ]
    }
  ],
  display: true
};


// Achievements Section
const achievementSection = {
  title: emoji("Achievements & Publications 🏆"),
  subtitle: "Awards, research papers, and recognitions earned over my career.",
  achievementsCards: [
    // Publications
    {
      title: "Research Paper:  L3Cube-IndicSBERT: A simple approach for learning cross-lingual sentence representations using multilingual BERT",
      subtitle: "Published in ACL Anthology",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Springer_logo.png",
      imageAlt: "ACL Logo",
      footerLink: [
        {
          name: "View Paper",
          url: "https://aclanthology.org/2023.paclic-1.16.pdf"
        }
      ]
    },
    {
      title: "Research Paper: Topic Entity Summary Sentiment Analyzer (TESSA): The 4-in-1 Text Analysis Toolkit",
      subtitle: "Published at IEEE",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/81/ACL_Logo.png",
      imageAlt: "IEEE Logo",
      footerLink: [
        {
          name: "View Paper",
          url: "https://ieeexplore.ieee.org/document/11070849"
        }
      ]
    },
    {
      title: "Research Paper: L3Cube-MahaSBERT and HindSBERT: Sentence BERT Models and Benchmarking BERT Sentence Representations for Hindi and Marathi",
      subtitle: "Published at Springer",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/69/IEEE_Logo.png",
      imageAlt: "Springer Logo",
      footerLink: [
        {
          name: "View Paper",
          url: "https://link.springer.com/chapter/10.1007/978-3-031-37963-5_82"
        }
      ]
    },

    // Awards & Recognitions
    {
      title: "The Citi Corp Hackathon Winner",
      subtitle: "Won the apprenticeship project hackathon by securing 1st position.",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Citi_Logo.svg",
      imageAlt: "Citi Logo",
      footerLink: []
    },
    {
      title: "WeTech Goldman Sachs Global Mentorship Award",
      subtitle: "Won the WeTech Goldman Sachs Mentorship Award to only 50 recipients all over India.",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Goldman_Sachs_Logo.svg",
      imageAlt: "Goldman Sachs Logo",
      footerLink: []
    },
    {
      title: "Flipkart Girls Wanna Code 4.0",
      subtitle: "Selected as one of the top 200 participants out of 9,700 applicants.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Flipkart_logo.svg",
      imageAlt: "Flipkart Logo",
      footerLink: []
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


// Twitter Section
const twitterDetails = {
  userName: "aditi_kajale",
  display: false
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable,
  resumeSection,
  twitterDetails
};

