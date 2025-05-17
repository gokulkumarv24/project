"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trophy, Award, AlignCenterVertical as Certificate, Medal } from "lucide-react";

export function AchievementsSection() {
  // Map icon type to component
  const iconComponents = {
    trophy: Trophy,
    certificate: Certificate,
    award: Award,
    medal: Medal,
  };

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Achievements</h2>
          <p className="text-muted-foreground">
            Recognition, certifications, and milestones that showcase my capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = iconComponents[achievement.icon];
            
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardDescription className="flex flex-col gap-1">
                      <span>{achievement.issuer}</span>
                      <span>{achievement.date}</span>
                      {achievement.credential && (
                        <span className="text-xs mt-1">
                          Credential ID: {achievement.credential}
                        </span>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}