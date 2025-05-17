export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credential?: string;
  icon: "trophy" | "certificate" | "award" | "medal";
}

export const achievements: Achievement[] = [
  {
    id: "secure-tool-expo",
    title: "Winner – SECURE TOOL EXPO",
    issuer: "National Cybersecurity Association",
    date: "February 2025",
    description: "First place in the national cybersecurity tool development competition for creating an innovative solution for endpoint protection.",
    icon: "trophy"
  },
  {
    id: "html5-apps",
    title: "HTML5 Apps with JavaScript",
    issuer: "Skillsoft",
    date: "November 2024",
    description: "Professional certification covering advanced JavaScript techniques, responsive design principles, and modern web application architecture.",
    credential: "SKILL-JS-2024-8742",
    icon: "certificate"
  },
  {
    id: "dbms-advanced",
    title: "DBMS Advanced Course",
    issuer: "Scaler",
    date: "August 2024",
    description: "Comprehensive course on database management systems covering SQL, NoSQL, indexing, query optimization, and database design principles.",
    credential: "SCALER-DB-2024-12458",
    icon: "certificate"
  },
  {
    id: "hackathon-ml",
    title: "Runner Up - AI/ML Hackathon",
    issuer: "TechFest International",
    date: "July 2024",
    description: "Developed an AI-powered solution for real-time language translation using computer vision and natural language processing.",
    icon: "medal"
  },
  {
    id: "cyber-challenge",
    title: "Top 5% - National Cyber Challenge",
    issuer: "Cybersecurity Excellence Foundation",
    date: "March 2024",
    description: "Recognized for exceptional performance in solving complex cybersecurity challenges including network penetration testing and vulnerability analysis.",
    icon: "award"
  }
];