import Link from "next/link";
import { Github, Linkedin, Code, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-12 mt-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Gokul Kumar V</h3>
          <p className="text-muted-foreground text-sm">
            B.Tech in CSE (Cyber Security)<br />
            SRM IST (2022–2026)
          </p>
          <p className="text-muted-foreground text-sm">
            gokulkumarv2024@gmail.com
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Projects", "Experience", "Achievements", "Contact"].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Connect</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link 
                href="https://linkedin.com/in/gokul-kumar-v-236a24217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link 
                href="https://github.com/gokulkumarv24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
            </li>
            <li>
              <Link 
                href="https://leetcode.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Code className="h-4 w-4" />
                <span>LeetCode</span>
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.codechef.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Terminal className="h-4 w-4" />
                <span>CodeChef</span>
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link 
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link 
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
          <p className="text-xs text-muted-foreground pt-4">
            © {new Date().getFullYear()} Gokul Kumar V. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}