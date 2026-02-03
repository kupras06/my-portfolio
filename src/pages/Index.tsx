import About from "@/components/portfolio/About";
import Certifications from "@/components/portfolio/Certifications";
import Footer from "@/components/portfolio/Footer";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import Resume from "@/components/portfolio/Resume";
import Skills from "@/components/portfolio/Skills";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";

const Index = () => (
	<main class="min-h-screen bg-background text-foreground antialiased">
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

export default Index;
