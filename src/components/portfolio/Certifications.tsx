import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-preact";

const certifications = [
  {
    title: "Google IT Automation with Python",
    issuer: "Coursera",
    date: "July 2020",
    url: "https://coursera.org/share/674c670c1291c014549f04032f4df14d",
  },
  {
    title: "Python For Everybody Specialization",
    issuer: "Coursera",
    date: "July 2020",
    url: "https://coursera.org/share/e4e77764107ad0bf5b13843477c53175",
  },
  {
    title: "Infosys Certified Software Programmer",
    issuer: "InfyTQ",
    date: "June 2020",
    url: "https://drive.google.com/file/d/1DuzEKsBtZi15b8qzkOfgXDK1pS4hFqU7/view",
  },
];

const Certifications = () => {
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
            Certifications
          </h2>

          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 p-5 bg-background border border-border rounded-lg hover:shadow-card-hover hover:border-accent/50 transition-all duration-300"
              >
                <div className="p-3 bg-secondary rounded-full">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
