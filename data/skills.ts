export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-10
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 9 },
      { name: "JavaScript", level: 8 },
      { name: "TypeScript", level: 7 },
      { name: "C/C++", level: 6 },
      { name: "SQL", level: 8 },
      { name: "HTML/CSS", level: 8 }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    skills: [
      { name: "React", level: 8 },
      { name: "Next.js", level: 7 },
      { name: "TailwindCSS", level: 9 },
      { name: "Redux", level: 7 },
      { name: "Framer Motion", level: 6 }
    ]
  },
  {
    id: "backend",
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 8 },
      { name: "Express", level: 7 },
      { name: "MongoDB", level: 7 },
      { name: "PostgreSQL", level: 6 },
      { name: "Firebase", level: 7 }
    ]
  },
  {
    id: "machinelearning",
    name: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow", level: 8 },
      { name: "scikit-learn", level: 7 },
      { name: "NLP", level: 6 },
      { name: "Computer Vision", level: 6 },
      { name: "Data Analysis", level: 8 }
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    skills: [
      { name: "Network Security", level: 8 },
      { name: "Penetration Testing", level: 7 },
      { name: "Malware Analysis", level: 7 },
      { name: "Cryptography", level: 6 },
      { name: "Security Auditing", level: 6 }
    ]
  },
  {
    id: "devops",
    name: "DevOps & Tools",
    skills: [
      { name: "Git", level: 9 },
      { name: "Docker", level: 7 },
      { name: "AWS", level: 6 },
      { name: "CI/CD", level: 6 },
      { name: "Linux", level: 8 }
    ]
  }
];