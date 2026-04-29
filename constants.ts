import { Github, Linkedin, Mail } from 'lucide-react';
import { NavLink, Project, SkillCategory, SocialLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: '#home', href: '#home' },
  { label: '#projects', href: '#projects' },
  { label: '#skills', href: '#skills' },
  { label: '#about', href: '#about' },
  { label: '#contact', href: '#contact' },
];

export const HERO_DATA = {
  name: "Pawan Kumar Pandey",
  role: "software engg.",
  subRole: "full-stack developer.",
  tagline: "He turns vision into scalable products engineered with clean code.",
  status: "Open for new opportunities",
  resumeUrl: "/Pawan_kumar.pdf"
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'HireUNex– Job Portal',
    description: 'A full-stack job portal built with React, Node.js, Express, MongoDB, and Clerk. Features secure role-based authentication, job listings, applications, and live dashboards. Improved application-tracking efficiency by 30% for 50+ test users.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Postman', 'Clerk'],
    imageUrl: '/HireUNex.png',
    liveUrl: 'https://hire-u-nex-client.vercel.app/',
    githubUrl: 'https://github.com/mantu01714/HireUNex'
  },
  {
    id: '2',
    title: 'E-Commerce Website',
    description: 'Developed a Full-Stack E-commerce Website for Online Product Sales and Management. Features product listings, cart management, user authentication, and an admin dashboard for managing inventory and orders.',
    techStack: ['HTML5', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
    imageUrl: '/asset3.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/Pawan94580'
  },
  {
    id: '3',
    title: 'Real-Time Chat App',
    description: 'Developed a Real-Time Chat Application using the MERN Stack with Socket.IO for Instant Messaging. Supports private and group chats, live message delivery, user authentication, and a responsive UI for seamless communication.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO'],
    imageUrl: '/vdev.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/Pawan94580'
  },
  {
    id: '4',
    title: 'AlgoVision - DSA Visualization Platform',
    description: 'Interactive platform built with React, JavaScript, and TailwindCSS to visualize core DSA concepts like sorting, searching, trees, and graphs. Includes real-time animations using Framer Motion and step-by-step algorithm walkthroughs for intuitive learning.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'react.js', 'Vercel', 'Tailwind CSS'],
    imageUrl: '/Algovision.png',
    liveUrl: 'https://algo-vision-dsa.vercel.app/',
    githubUrl: 'https://github.com/mantu01714/AlgoVision'
  },
  {
    id: '5',
    title: 'Smart Weather App',
    description: 'Responsive weather dashboard built with HTML, CSS, and JavaScript using the OpenWeatherMap API. Features geolocation-based weather, city search, 5-day forecast, real-time map view, dynamic charts, light/dark themes, and searchable history for an improved user experience.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
    imageUrl: '/SmartWeather.png',
    liveUrl: 'https://sensational-crostata-ce2ac5.netlify.app/',
    githubUrl: 'https://github.com/Vansh12970/VanshProtfolio'
  },
  {
    id: '6',
    title: 'AI Summarizer - Text Compression Tool',
    description: 'Built an AI-powered text summarization app using the HuggingFace Inference API to generate concise summaries from long text. Designed a clean and responsive UI with smooth interactions, supporting multiple summary lengths and one-click copy functionality for better usability.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'HuggingFace Inference API'],
    imageUrl: '/Summerizar.png',
    liveUrl: 'https://summarizer-web.vercel.app/',
    githubUrl: 'https://github.com/mantu01714/summarizer-web'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['C++', 'MySQL', 'HTML5', 'CSS', 'JavaScript']
  },
  {
    title: 'Frontend Development',
    skills: ['React', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Tools',
    skills: ['GitHub', 'VS Code']
  },
  {
    title: 'Core CS',
    skills: ['Data Structures & Algorithms']
  },
  {
    title: 'Soft Skills',
    skills: ['Teamwork', 'Leadership', 'Problem-Solving', 'Adaptability']
  }
];


export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Github', url: 'https://github.com/Pawan94580', icon: Github },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/pawan-pandey-540a94266', icon: Linkedin },
];

// Separate link for the left sidebar message icon
export const CONTACT_LINK = {
  platform: 'Message',
  url: '#contact',
  icon: Mail
};