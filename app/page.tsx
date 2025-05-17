import { HomeSection } from "@/components/home-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { AchievementsSection } from "@/components/achievements-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}