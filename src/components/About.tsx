import { Code, Coffee, Users, Zap } from "lucide-preact";
import type { AboutData } from "../data";

interface AboutProps {
	data: AboutData;
}
export default function About({ data }: AboutProps) {
	const highlights = [
		{
			icon: <Code class="w-8 h-8" />,
			title: "Clean Code",
			description:
				"Writing maintainable, scalable, and efficient code following best practices",
		},
		{
			icon: <Zap class="w-8 h-8" />,
			title: "Performance",
			description:
				"Optimizing applications for speed, accessibility, and user experience",
		},
		{
			icon: <Users class="w-8 h-8" />,
			title: "Collaboration",
			description:
				"Working effectively in teams using modern development workflows",
		},
		{
			icon: <Coffee class="w-8 h-8" />,
			title: "Innovation",
			description:
				"Constantly learning new technologies and exploring creative solutions",
		},
	];

	return (
		<section id="about" class="py-20 bg-slate-50 dark:bg-slate-800">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16">
					<h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
						About Me
					</h2>
					<p class="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
						{data.summary}
					</p>
				</div>

				<div class="grid md:grid-cols-2 gap-12 items-center mb-20">
					<div>
						<h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
							My Journey
						</h3>
						<div class="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
							{data.journey.map((paragraph) => (
								<p key={paragraph.id}>{paragraph.text}</p>
							))}
						</div>
					</div>

					<div class="relative">
						<div class="relative z-10 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg">
							<img
								src={data.picture}
								alt="Developer workspace"
								class="w-full h-64 object-cover rounded-lg mb-6"
							/>
							<div class="grid grid-cols-2 gap-4 text-center">
								<div>
									<div class="text-2xl font-bold text-slate-700 dark:text-slate-300">
										{data.experience.years}+
									</div>
									<div class="text-sm text-slate-600 dark:text-slate-400">
										Years Experience
									</div>
								</div>
								<div>
									<div class="text-2xl font-bold text-slate-700 dark:text-slate-300">
										{data.experience.projects}+
									</div>
									<div class="text-sm text-slate-600 dark:text-slate-400">
										Projects Completed
									</div>
								</div>
							</div>
						</div>
						<div class="absolute -top-4 -right-4 w-full h-full bg-gradient-primary rounded-2xl -z-10" />
					</div>
				</div>

				<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{highlights.map((highlight) => (
						<div
							key={highlight.title}
							class="text-center p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md card-hover"
						>
							<div class="text-slate-700 dark:text-slate-300 mb-4 flex justify-center">
								{highlight.icon}
							</div>
							<h4 class="text-xl font-semibold text-slate-900 dark:text-white mb-3">
								{highlight.title}
							</h4>
							<p class="text-slate-600 dark:text-slate-300 leading-relaxed">
								{highlight.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
