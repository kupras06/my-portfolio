import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-preact";

const Footer = () => (
	<footer class="py-16 px-6">
		<div class="max-w-4xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				class="text-center"
			>
				<h2 class="text-2xl md:text-3xl font-light mb-4 text-foreground">
					Let's work together
				</h2>
				<p class="text-muted-foreground mb-8 max-w-md mx-auto">
					I'm always open to discussing new projects, creative ideas, or
					opportunities to be part of your vision.
				</p>

				<div class="flex items-center justify-center gap-4 mb-12">
					<a
						href="https://github.com/kupras06"
						target="_blank"
						rel="noopener noreferrer"
						class="p-3 rounded-full border border-border hover:border-foreground hover:bg-secondary transition-all duration-300"
						aria-label="GitHub"
					>
						<Github class="w-5 h-5" />
					</a>
					<a
						href="https://www.linkedin.com/in/kupras06/"
						target="_blank"
						rel="noopener noreferrer"
						class="p-3 rounded-full border border-border hover:border-foreground hover:bg-secondary transition-all duration-300"
						aria-label="LinkedIn"
					>
						<Linkedin class="w-5 h-5" />
					</a>
					<a
						href="mailto:prash8669@gmail.com"
						class="p-3 rounded-full border border-border hover:border-foreground hover:bg-secondary transition-all duration-300"
						aria-label="Email"
					>
						<Mail class="w-5 h-5" />
					</a>
				</div>

				<div class="pt-8 border-t border-border">
					<p class="text-sm text-muted-foreground">
						© {new Date().getFullYear()} Prashanth Kumar. Built with passion.
					</p>
				</div>
			</motion.div>
		</div>
	</footer>
);

export default Footer;
