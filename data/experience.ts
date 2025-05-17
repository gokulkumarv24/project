export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "mindplm",
    role: "Data Science Intern",
    company: "MindPLM",
    location: "Remote",
    period: "June 2024 - September 2024",
    description: "Led a team of interns to develop ML models for predictive maintenance in industrial equipment. Implemented data pipelines and created interactive dashboards for monitoring system performance.",
    skills: ["Python", "TensorFlow", "Pandas", "SQL", "Data Visualization", "Machine Learning"]
  },
  {
    id: "cybertech",
    role: "Cybersecurity Research Assistant",
    company: "University Research Lab",
    location: "Chennai, India",
    period: "January 2024 - May 2024",
    description: "Conducted research on advanced persistent threats (APTs) and contributed to the development of an intrusion detection system using machine learning algorithms.",
    skills: ["Network Security", "Python", "Machine Learning", "Threat Analysis", "Wireshark", "Linux"]
  },
  {
    id: "webdev",
    role: "Web Development Freelancer",
    company: "Self-Employed",
    location: "Remote",
    period: "September 2023 - December 2023",
    description: "Designed and developed responsive websites for small businesses and startups, focusing on modern design principles and performance optimization.",
    skills: ["React", "Next.js", "TailwindCSS", "JavaScript", "UI/UX Design", "Responsive Design"]
  }
];