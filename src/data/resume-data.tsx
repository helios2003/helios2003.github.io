import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ankit Dash",
  initials: "AD",
  location: "Mumbai, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/Mumbai,+Maharashtra/@19.0822507,72.8811862,11z/data=!3m1!4b1!4m6!3m5!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!8m2!3d19.0759837!4d72.8776559!16zL20vMDR2bXA?entry=ttu",
  about: "Software Engineer working in Web Development, Gen AI",
  summary: "Hello, I am Ankit, currently in my final year of undergraduate studies at NIT Karnataka. I have a strong interest in developing scalable backend systems and have experience in creating full-stack applications. I have also worked with Machine Learning, particularly in Natural Language Processing and Generative AI. Presently, my interests include Computer Networking, DevOps, and Distributed Systems. I am always seeking new and exciting opportunities to advance my skills and contribute to innovative projects.",
  avatarUrl: "/ankit-1.jpg",
  personalWebsiteUrl: ".",
  contact: {
    email: "ankitdash2019[at]gmail[dot]com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/helios2003",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ankitdash/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/_Ankit_Dash_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "National Institute of Technology Karnataka (Surathkal)",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      start: "Dec 2021",
      end: "May 2025",
    },
  ],
  work: [
    {
      company: "Zeal AI",
      link: "https://hellozeal.ai/",
      badges: ["San Francisco, USA (Remote)"],
      title: "Software Engineering Intern",
      logo: JojoMobileLogo,
      start: "Dec 2024",
      end: "Present",
      description: "• Scraped multiple American websites hosting different events and enhanced the RAG enabling accurate responses and information display.\n• Handling the migration of the frontend (40,000+ lines of code) from React to NextJS improving performance \n• Tech Stack: Selenium, PostgreSQL, NextJS."
    },
    {
      company: "MACS-G Solutions",
      link: "https://www.macs-g.com",
      badges: ["Dubai, UAE (Remote)"],
      title: "Full Stack Developer",
      logo: JojoMobileLogo,
      start: "Mar 2024",
      end: "Nov 2024",
      description: "• Designed a webcam monitoring system that will identify the violations of safety precautions by workers in petrochemical factories and report, log them accordingly.\n• Added the mechanism to fine-tune YOLOv7 and RetinaNet object detection models and developed a ML pipeline for batch processing of the video and image data \n• Helped in building a mechanism where the user can upload, annotate, train and infer directly from the browser. \n• Tech Stack: FastAPI, React, Tensorflow, MongoDB."
    },
    {
      company: "Google Summer of Code - Postman",
      link: "https://summerofcode.withgoogle.com/programs/2024/projects/AJcg3hZ5",
      badges: ["Barcelona, Spain (Remote)"],
      title: "Open Source Developer",
      logo: ClevertechLogo,
      start: "Jun 2024",
      end: "Sep 2024",
      description:
      "• Automated generation of custom Open Graph images and tags for AsyncAPI studio enhancing user experience. \n• Utilized SSR, Edge runtime and CDNs to achieve sub 5 second latency for Open Graph crawlers.\n• Wrote unit tests for the feature added and made fixes to the testing pipeline of the repository. \n• Merged more than 10 pull requests and committed more than 1000 lines of code to production.\n• Tech Stack: NextJS, AsyncAPI, Vercel, Jest."
    },
    {
      company: "Turing Bell",
      link: "https://www.linkedin.com/posts/yash-tak-20881b103_b2b-saas-generative-ai-activity-7095391947791495169-I7eI/",
      badges: ['Bangalore, India (Remote)'],
      title: "Artificial Intelligence Intern",
      logo: NSNLogo,
      start: "Sep 2023",
      end: "Oct 2023",
      description: "• Facilitated the development of the conversation summarization module utilizing the GPT-3.5 and Langchain, aiding in evaluating the efficacy of the AI Sales Assistant and improving response accuracy for user queries. \n• Contributed to the frontend by building the website’s navigation system in React.\n• Tech Stack: Langchain (Python), React."
    },
  ],

  skills: [
    ["Languages",  ["Javascript", "Typescript", "Go", "Python", "C++", "C"]],
    ["Frameworks", ["NextJS", "React", "Node.js", "Express", "Flask", "FastAPI", "Tensorflow"]],
    ["Databases", ["PostgreSQL", "MongoDB", "Redis", "MySQL"]],
    ["Tools", ["Git", "Docker", "Kubernetes", "Kafka", "RabbitMQ", "Jupyter Notebook"]],
  ],
  projects: [
    {
      title: "Nebula-Nest",
      techStack: [
        "Node.js",
        "PostgreSQL",
        "AWS S3",
        "RabbitMQ",
        "Docker",
      ],
      description:
        "Platform as a Service (PaaS) system that deploys front-end apps from a GitHub URL in under 10 minutes",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/helios2003/Nebula-Nest",
      },
    },
    {
      title: "Andromeda",
      techStack: [
        "Python", "NLTK", "MERN stack", "Docker"
      ],
      description:
        "A multithreaded search engine that efficiently indexes and retrieves documents using an inverted index and BM-25 algorithm in MongoDB",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://github.com/helios2003/Andromeda",
      },
    },
    {
      title: "Epidemiology",
      techStack: [
        "Python", "Pandas", "networkx"
      ],
      description: "Simulating disease outbreak using models like SIARD and comparing the effectiveness of different vaccination strategies",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://github.com/helios2003/Epidemiology",
      },
    },
    {
      title: "Twitter Feed Filter",
      techStack: ["Python", "Go", "bs4"],
      description:
        "Twitter Feed Filtering System for improved relevance and reduction of irrelevant tweets using unsupervised NLP Techniques",
      logo: MonitoLogo,
      link: {
        label: "twitter feed filter",
        href: "https://github.com/helios2003/Twitter-Feed-Filter",
      },
    },
    {
      title: "Word Rush",
      techStack: ["MERN Stack", "Websockets"],
      description:
        "A real-time multiplayer Wordle like game where players compete to guess a hidden word within a limited number of attempts",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://github.com/helios2003/Word-Rush",
      },
    },
    {
      title: "FastCask DB",
      techStack: ["C++", "Catch2", "CMake"],
      description:
        "Implementation of Bitcask, a high-performance key-value store, in C++ for efficient data storage and retrieval",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://github.com/helios2003/FastCask-DB",
      },
    },
    {
      title: "Wall Wreckers",
      techStack: ["C++", "SFML", "CMake"],
      description:
        "An Atari Breakout Game implemented in pure C++ using SFML which can be played in the browser",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://github.com/helios2003/Wall-Wreckers",
      },
    },
    {
      title: "Dino Game",
      techStack: ["Pygame", "Python", "OOPS"],
      description:
        "A replica of Chrome's Dinosaur Game using Pygame which can be played in the browser",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/helios2003/Dino-Game",
      },
    },
  ],
  blogs: [
    {
      title: "Hierarchical Navigable Small Worlds Algorithm (HNSW)",
      link: {
        href: "https://ankitdash.hashnode.dev/hierarchical-navigable-small-worlds-algorithm-hnsw"
      },
      description: "Working of different types of similarity algorithms and implementation of HNSW using skip lists and covering it's use cases, advantages and disadvantages."
    }
  ]
} as const;
