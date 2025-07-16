export const portfolioData = {
  personal: {
    name: "Mohammed Hasnain",
    location: "Hyderabad, Telangana, India",
    email: "Mohdhasnain1544@gmail.com",
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
    portfolio: "https://your-portfolio.com",
    greeting: "Hey, I'm Mohammed 👋",
    title: "Full Stack Developer Portfolio"
  },
  
  education: {
    degree: "B.E. in Computer Science",
    institution: "Lords Institute of Engineering & Technology (LIET), Telangana",
    duration: "Nov 2022 – Jun 2026",
    gpa: "Add if above 7.5"
  },

  skills: {
    languages: ["JavaScript", "Python"],
    frontend: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "REST APIs", "WebSockets"],
    database: ["MongoDB", "PostgreSQL", "MySQL"],
    others: ["Git", "JWT", "Flask", "Figma", "Render"]
  },

  projects: [
    {
      name: "JobReady – Resume Feedback Platform",
      liveDemo: "https://your-demo-link.com",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      description: [
        "Developed a full-stack platform offering resume reviews for job seekers.",
        "Enabled structured feedback for raw resumes; increased user shortlisting success by ~25%.",
        "Built RESTful APIs and integrated advanced semantic suggestions.",
        "Designed clean, responsive UI with Tailwind CSS and React.js."
      ]
    },
    {
      name: "Skin Disease Detection Using Deep Learning",
      technologies: ["TensorFlow", "MobileNet", "Python", "Flask", "React", "HAM10000"],
      description: [
        "Trained a MobileNet CNN model to classify 7 skin diseases using transfer learning.",
        "Achieved over 69% validation accuracy on HAM10000 dataset.",
        "Built a user-friendly interface and Flask backend for real-time diagnosis.",
        "Targeted early screening in remote and underserved regions."
      ]
    }
  ],

  experience: [
    {
      title: "Full Stack Developer Intern",
      company: "Accendia Technologies",
      location: "Hyderabad, India",
      duration: "Jan 2025 – Jun 2025",
      responsibilities: [
        "Built modules for a project management app for a Canadian client using React & MongoDB.",
        "Led API integration, component logic, and team collaboration using Git."
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Ram Innovative Infotech",
      location: "Hyderabad, India", 
      duration: "Nov 2024 – Dec 2024",
      responsibilities: [
        "Designed responsive websites and reduced page load time by ~15%.",
        "Collaborated with senior developers on client API integration and UI/UX improvements."
      ]
    }
  ],

  certifications: [
    "Google Cloud Computing Foundation – CloudSkillsBoost",
    "Full Stack Web Development – Udemy",
    "100xDevs Web Dev Bootcamp – 100xDevs"
  ],

  achievements: [
    {
      title: "Organizer, TorqueTalk – Telangana's Biggest Autofest at LIET",
      date: "Feb 2025",
      description: "Led event with 5,000+ attendees, 15+ sponsors, and 30+ volunteers."
    },
    {
      title: "Finalist, Hack the Verse",
      description: "National Hackathon at CMRTC"
    },
    {
      title: "President, Artigenz Club – LIET, CSE",
      description: ""
    },
    {
      title: "Participant, HackPix",
      description: "National Hackathon at LIET"
    }
  ]
};