import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Cloud,
  Code,
  Database,
  Github,
  Linkedin,
  Monitor,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experience, projects, skills } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

function getProjectImage(id: string) {
  return PlaceHolderImages.find((img) => img.id === id);
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}

const HeroSection = () => (
  <section id="home" className="py-20 md:py-32 bg-secondary">
    <div className="container mx-auto px-4 text-center">
      <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-4">
        Crafting Resilient & Efficient Systems
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground mb-8">
        I'm Debjoti Mallick, SRE/DevOps at IBM, building resilient, observable,
        and automated cloud-native systems on Kubernetes and OpenShift.
      </p>
      <div className="flex justify-center gap-4 mb-8">
        <Button asChild size="lg">
          <Link href="#projects">
            View Projects <ArrowRight className="ml-2" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="#contact">
            Contact Me <Send className="ml-2" />
          </Link>
        </Button>
      </div>
      <div className="flex justify-center gap-6">
        <Link
          href="https://github.com/debjotimallick/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <Github className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
        </Link>
        <Link
          href="https://linkedin.com/in/debjoti-mallick/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
        </Link>
      </div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
        Work Experience
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
        {experience.map((item, index) => (
          <div key={index} className="mb-12 flex items-center w-full">
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
              }`}
            >
              <div
                className={`p-6 bg-card rounded-lg shadow-md ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
              >
                <h3 className="font-headline text-xl font-bold text-primary">
                  {item.role}
                </h3>
                <p className="font-semibold">{item.company}</p>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.period}
                </p>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bg-background p-1 rounded-full">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? "pl-8 text-left" : "pr-8 text-right"
              }`}
            >
              {/* This space is for alignment */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const skillIcons: { [key: string]: React.ReactNode } = {
  "Languages & Runtimes": <Code />,
  "Cloud & DevOps": <Cloud />,
  "Monitoring & Observability": <Monitor />,
  "Databases & Storage": <Database />,
};

const SkillsSection = () => (
  <section id="skills" className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category} className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-md">
                {skillIcons[skillCategory.category] || <Code />}
              </div>
              <CardTitle className="font-headline">
                {skillCategory.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {skillCategory.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const projectImage = getProjectImage(project.image_id);
          return (
            <Card key={project.title} className="flex flex-col overflow-hidden">
              {projectImage && (
                <div className="aspect-w-3 aspect-h-2 w-full">
                  <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover"
                    data-ai-hint={projectImage.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-4">
                <Button asChild variant="ghost" size="sm">
                  <Link
                    href={project.repo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2" />
                    Source
                  </Link>
                </Button>
                {project.live_url && (
                  <Button asChild size="sm">
                    <Link
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
