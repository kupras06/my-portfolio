import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-preact";

const projects = [
  {
    name: "Tauri DB Connector",
    description: "A desktop application connector for databases built with Tauri and TypeScript.",
    language: "TypeScript",
    url: "https://github.com/kupras06/tauri-db-connector",
  },
  {
    name: "Wagon Value API",
    description: "A Python-based API service for wagon valuation and data management.",
    language: "Python",
    url: "https://github.com/kupras06/wagon-value-api",
  },
  {
    name: "Quippix App",
    description: "A modern web application showcasing full-stack development skills.",
    language: "TypeScript",
    url: "https://github.com/kupras06/quippix-app",
  },
  {
    name: "My Portfolio",
    description: "Personal portfolio website built with modern web technologies.",
    language: "TypeScript",
    url: "https://github.com/kupras06/my-portfolio",
  },
];

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  Python: "bg-yellow-500",
  JavaScript: "bg-yellow-400",
};

const Projects = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-12">
            Featured Projects
          </h2>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group block p-6 bg-card border border-border rounded-lg hover:shadow-card-hover hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-3 h-3 rounded-full ${languageColors[project.language] || "bg-gray-400"}`}
                      />
                      <span className="text-sm text-muted-foreground">
                        {project.language}
                      </span>
                    </div>
                  </div>
                  <Github className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <a
              href="https://github.com/kupras06?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>View all 32 repositories</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
