"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const NavbarContent = ({ mounted, scrolled, activeSection }: { 
  mounted: boolean;
  scrolled: boolean;
  activeSection: string;
}) => (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
      scrolled
        ? "bg-background/80 backdrop-blur-md shadow-sm"
        : "bg-transparent"
    )}
  >
    <div className="container flex items-center justify-between">
      <Link
        href="#home"
        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500"
      >
        Gokul Kumar
      </Link>

      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              mounted && activeSection === link.href.substring(1)
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button
          asChild
          className="hidden md:flex"
          variant="secondary"
        >
          <Link href="#contact">
            Contact Me
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden rounded-full"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>
                Explore the different sections of my portfolio.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  asChild
                  variant="ghost"
                  className={cn(
                    "justify-start",
                    mounted && activeSection === link.href.substring(1)
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </motion.header>
);

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
    
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section) => {
          const sectionId = section.getAttribute("id") || "";
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
          }
        });

        setScrolled(window.scrollY > 20);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Return a consistent initial state for server-side rendering
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-background">
        <div className="container flex items-center justify-between">
          <Link href="#home" className="text-2xl font-bold">
            Gokul Kumar
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9" />
            <Button variant="secondary" className="hidden md:flex">
              Contact Me
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return <NavbarContent mounted={mounted} scrolled={scrolled} activeSection={activeSection} />;
}