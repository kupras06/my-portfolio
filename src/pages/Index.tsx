import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Certifications from "@/components/portfolio/Certifications";
import Resume from "@/components/portfolio/Resume";
import Footer from "@/components/portfolio/Footer";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Resume />
      <Footer />
    </main>
  );
};

export default Index;
