import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-8">
            About
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
            <p>
              I'm a passionate{" "}
              <span className="text-foreground">Full Stack Developer</span>{" "}
              with experience since 2021 in building user-friendly applications 
              that solve real problems.
            </p>
            
            <p>
              I enjoy working with{" "}
              <span className="text-foreground">Remix, Next.js, Vue, FastAPI</span>,
              and other modern frameworks to craft reliable, high-performance solutions.
            </p>
            
            <p>
              Currently exploring{" "}
              <span className="text-foreground">Elixir & Phoenix</span>{" "}
              for backend development. Always learning, always building.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
