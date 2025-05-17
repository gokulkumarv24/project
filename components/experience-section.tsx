"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground">
            My professional journey in tech, including internships and freelance work.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-border transform md:-translate-x-1/2"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 
                  ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" 
                  : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute w-4 h-4 rounded-full bg-primary border-4 border-background top-6 z-10 
                              left-[-8px] md:left-auto md:right-[-8px] 
                              md:left-auto md:right-[-8px]"></div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex md:flex-row items-start gap-2">
                    <span>{experience.role}</span>
                  </CardTitle>
                  <CardDescription>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}