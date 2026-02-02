import { motion } from "framer-motion";
import { FileText, ExternalLink, Download } from "lucide-preact";

const OVERLEAF_LINK = "https://www.overleaf.com/read/mnqmxvmvqtyr#8ffbfa";

const Resume = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
            Resume
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            View my complete professional background and experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href={OVERLEAF_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-card border border-border rounded-2xl p-8 md:p-12 hover:border-foreground/30 hover:shadow-card-hover transition-all duration-300 max-w-md w-full"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 rounded-full bg-secondary group-hover:bg-accent/20 transition-colors duration-300">
                <FileText className="w-8 h-8 text-foreground" />
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">View Resume</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Hosted on Overleaf • Always up-to-date
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                <span>Open in Overleaf</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Download className="w-4 h-4 text-muted-foreground" />
            </div>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground mt-6"
        >
          Click to view • Use the download button in Overleaf to save as PDF
        </motion.p>
      </div>
    </section>
  );
};

export default Resume;
