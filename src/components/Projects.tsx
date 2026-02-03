import { ArrowRight, ExternalLink, Github } from "lucide-preact";
import type { ProjectData } from "../data";

interface ProjectsProps {
	data: ProjectData[];
}
export default function Projects({ data }: ProjectsProps) {
	const featuredProjects = data.filter((project) => project.featured);
	const otherProjects = data.filter((project) => !project.featured);

	return (
		<section id="projects" class="py-20 bg-slate-50 dark:bg-slate-800">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16">
					<h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
						Featured Projects
					</h2>
					<p class="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
						A showcase of my recent work, demonstrating technical skills and
						creative problem-solving
					</p>
				</div>

				{/* Featured Projects */}
				<div class="mb-20">
					<div class="grid lg:grid-cols-2 gap-8">
						{featuredProjects.map((project) => (
							<div
								key={project.title}
								class="group bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden card-hover"
							>
								<div class="relative overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</div>
								<div class="p-8">
									<h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">
										{project.title}
									</h3>
									<p class="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
										{project.description}
									</p>
									<div class="flex flex-wrap gap-2 mb-6">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-300 text-sm rounded-full"
											>
												{tech}
											</span>
										))}
									</div>
									<div class="flex items-center space-x-4">
										<a
											href={project.liveLink}
											target="_blank"
											rel="noopener noreferrer"
											class="flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
										>
											<ExternalLink class="w-4 h-4" />
											<span>Live Demo</span>
										</a>
										<a
											href={project.githubLink}
											target="_blank"
											rel="noopener noreferrer"
											class="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
										>
											<Github class="w-4 h-4" />
											<span>Code</span>
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Other Projects */}
				<div>
					<h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
						More Projects
					</h3>
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{otherProjects.map((project) => (
							<div
								key={project.title}
								class="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 card-hover"
							>
								<img
									src={project.image}
									alt={project.title}
									class="w-full h-40 object-cover rounded-lg mb-4"
								/>
								<h4 class="text-xl font-semibold text-slate-900 dark:text-white mb-3">
									{project.title}
								</h4>
								<p class="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
									{project.description}
								</p>
								<div class="flex flex-wrap gap-1 mb-4">
									{project.technologies.slice(0, 3).map((tech) => (
										<span
											key={tech}
											class="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded"
										>
											{tech}
										</span>
									))}
									{project.technologies.length > 3 && (
										<span class="px-2 py-1 text-slate-500 text-xs">
											+{project.technologies.length - 3} more
										</span>
									)}
								</div>
								<div class="flex items-center justify-between">
									<div class="flex space-x-3">
										<a
											href={project.liveLink}
											target="_blank"
											rel="noopener noreferrer"
											class="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
										>
											<ExternalLink class="w-4 h-4" />
										</a>
										<a
											href={project.githubLink}
											target="_blank"
											rel="noopener noreferrer"
											class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
										>
											<Github class="w-4 h-4" />
										</a>
									</div>
									<ArrowRight class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
