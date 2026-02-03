import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-preact";

const Hero = () => (
	<section class="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative">
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			class="text-center max-w-3xl"
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.2, duration: 0.6 }}
				class="mb-8"
			>
				<img
					src="https://avatars.githubusercontent.com/u/24810500?v=4"
					alt="Prashanth Kumar"
					class="w-28 h-28 rounded-full mx-auto border-4 border-background shadow-card-hover object-cover"
				/>
			</motion.div>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.6 }}
				class="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-4"
			>
				Full Stack Software Engineer
			</motion.p>

			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4, duration: 0.6 }}
				class="text-5xl md:text-7xl font-light tracking-tight mb-6 text-foreground"
			>
				Prashanth Kumar
			</motion.h1>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.6 }}
				class="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
			>
				Crafting user-friendly applications with modern frameworks. Currently
				building at{" "}
				<a
					href="https://www.briq.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-foreground border-b border-accent hover:border-foreground transition-colors"
				>
					Briq
				</a>
			</motion.p>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6, duration: 0.6 }}
				class="flex items-center justify-center gap-4 mt-8"
			>
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
			</motion.div>
		</motion.div>

		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1.2, duration: 0.6 }}
			class="absolute bottom-12"
		>
			<motion.div
				animate={{ y: [0, 8, 0] }}
				transition={{
					repeat: Number.POSITIVE_INFINITY,
					duration: 2,
					ease: "easeInOut",
				}}
			>
				<ArrowDown class="w-5 h-5 text-muted-foreground" />
			</motion.div>
		</motion.div>
	</section>
);

export default Hero;
