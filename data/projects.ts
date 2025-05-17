export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "ai-assistant",
    title: "AI Personal Assistant (SaaS)",
    description: "A full-stack SaaS solution that leverages LLMs to provide personalized assistance for various tasks including email drafting, content creation, and calendar management.",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "NextAuth.js", "TailwindCSS"],
    githubUrl: "https://github.com/gokulkumarv24/ai-assistant",
    demoUrl: "https://ai-assistant-demo.vercel.app",
    image: "https://images.pexels.com/photos/7232487/pexels-photo-7232487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true
  },
  {
    id: "malware-extension",
    title: "Malware Detection Chrome Extension",
    description: "A browser extension that uses machine learning to detect and prevent malware downloads, phishing attempts, and other security threats in real-time.",
    technologies: ["JavaScript", "TensorFlow.js", "Chrome Extension API", "Python", "ML"],
    githubUrl: "https://github.com/gokulkumarv24/malware-detector",
    demoUrl: "https://chrome.google.com/webstore",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: true
  },
  {
    id: "linkedin-generator",
    title: "LinkedIn Post Generator Tool",
    description: "An AI-powered tool that generates engaging LinkedIn posts based on user inputs, industry trends, and best practices for maximum engagement.",
    technologies: ["React", "GPT-3", "Firebase", "NLP", "TailwindCSS"],
    githubUrl: "https://github.com/gokulkumarv24/linkedin-generator",
    demoUrl: "https://linkedin-post-gen.netlify.app",
    image: "https://images.pexels.com/photos/267482/pexels-photo-267482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false
  },
  {
    id: "data-visualization",
    title: "Interactive Data Visualization Dashboard",
    description: "A comprehensive dashboard for visualizing complex datasets through interactive charts, graphs, and maps with filtering and drill-down capabilities.",
    technologies: ["D3.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/gokulkumarv24/data-viz-dashboard",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false
  },
  {
    id: "cybersec-lab",
    title: "Virtual Cybersecurity Lab",
    description: "A virtualized environment for cybersecurity training and testing, featuring vulnerable systems, attack vectors, and defensive mechanisms.",
    technologies: ["Docker", "Kubernetes", "Python", "Bash", "Kali Linux", "Metasploit"],
    githubUrl: "https://github.com/gokulkumarv24/cybersec-lab",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false
  },
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A scalable e-commerce solution with product management, user authentication, shopping cart, and payment processing capabilities.",
    technologies: ["Next.js", "MongoDB", "Stripe API", "Redux", "TailwindCSS"],
    githubUrl: "https://github.com/gokulkumarv24/e-commerce",
    demoUrl: "https://e-shop-demo.vercel.app",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    featured: false
  }
];