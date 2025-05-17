"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-xl mb-6 text-muted-foreground">
            I am a Computer Science student specializing in Cybersecurity at SRM Institute of Science and Technology, passionate about building innovative solutions that are both functional and secure.
          </p>
          <p className="text-muted-foreground">
            With expertise spanning Machine Learning, Web Development, and Cybersecurity, I approach each project with a focus on creating robust, user-friendly applications. I constantly strive to expand my knowledge and stay up-to-date with the latest technologies and security practices.
          </p>
        </motion.div>

        <Tabs defaultValue={skillCategories[0].id} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.skills.map((skill) => (
                  <Card key={skill.name}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                      <CardDescription>
                        {getSkillLevelLabel(skill.level)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Progress value={skill.level * 10} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function getSkillLevelLabel(level: number): string {
  if (level >= 9) return "Expert";
  if (level >= 7) return "Advanced";
  if (level >= 5) return "Intermediate";
  return "Beginner";
}