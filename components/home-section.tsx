"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

export function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-[100vh] flex items-center justify-center py-24 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl opacity-50 dark:bg-purple-500/20"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Hi, I&apos;m{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-purple-500">
                  Gokul Kumar V
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              A passionate <span className="font-medium text-foreground">software engineer</span> and <span className="font-medium text-foreground">cybersecurity enthusiast</span>{" "}
              dedicated to building innovative, secure, and user-friendly applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button asChild size="lg" className="gap-2">
                <Link href="#projects">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="/resume.pdf" download>
                  Download Resume <Download className="h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a 
                  href="https://github.com/gokulkumarv24"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a 
                  href="https://linkedin.com/in/gokul-kumar-v-236a24217"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Gokul Kumar V - Software Engineer"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Scroll down</span>
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1 h-1 bg-primary rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}