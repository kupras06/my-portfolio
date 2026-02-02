import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Next.js",
      "Remix",
      "Node.js",
      "Python",
      "FastAPI",
      "Django",
    ],
  },
  {
    title: "Currently Learning",
    skills: ["Elixir", "Phoenix", "Go", "Flutter"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "Git", "Firebase", "Google Cloud", "MongoDB", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-12">
            Skills & Technologies
          </h2>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-medium mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground hover:border-accent hover:shadow-card transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
