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
  subTitle: "Full Stack Developer exploring modern technologies",
  skills: [
    emoji("⚡ Build responsive Front-end / UI for web and mobile apps"),
    emoji("⚡ Develop RESTful APIs with Node.js and Express"),
    emoji("⚡ Integrate third-party services (Firebase / AWS / APIs)")
  ],
  softwareSkills: [
  // Programming Languages
  { skillName: "C", fontAwesomeClassname: "fas fa-code" },
  { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
  { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
  { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
  { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
  { skillName: "HTML", fontAwesomeClassname: "fab fa-html5" },
  { skillName: "CSS", fontAwesomeClassname: "fab fa-css3-alt" },

  // Databases
  { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "NoSQL (MongoDB)", fontAwesomeClassname: "fas fa-database" },
  { skillName: "SQL Server", fontAwesomeClassname: "fas fa-database" },
  { skillName: "Redis", fontAwesomeClassname: "fas fa-database" },

  // Frameworks & Tools
  { skillName: "React", fontAwesomeClassname: "fab fa-react" },
  { skillName: "Redux", fontAwesomeClassname: "fas fa-sync-alt" },
  { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
  { skillName: "Transformer Models", fontAwesomeClassname: "fas fa-robot" },
  { skillName: "Pandas", fontAwesomeClassname: "fas fa-table" },
  { skillName: "PyTorch", fontAwesomeClassname: "fas fa-brain" },
  { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
  { skillName: "Scikit-learn", fontAwesomeClassname: "fas fa-project-diagram" },
  { skillName: "NumPy", fontAwesomeClassname: "fas fa-square-root-alt" },
  { skillName: "Model Fine-tuning", fontAwesomeClassname: "fas fa-cogs" },
  { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
  { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
  { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
  { skillName: "Agile Development", fontAwesomeClassname: "fas fa-tasks" },
  { skillName: "SDLC", fontAwesomeClassname: "fas fa-project-diagram" },
  { skillName: "REST APIs", fontAwesomeClassname: "fas fa-network-wired" },
  { skillName: "JUnit", fontAwesomeClassname: "fas fa-vial" }
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

