import { useState } from "preact/hooks";
import type { SkillData } from "../data";

interface SkillsProps {
	data: SkillData;
}
export default function Skills({ data }: SkillsProps) {
	const categories = Object.keys(data);
	const [activeCategory, setActiveCategory] = useState(
		categories[0] || "Frontend",
	);
	const skillCategories = data;
	return (
		<section id="skills" class="py-20 bg-white dark:bg-slate-900">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16">
					<h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
						Technical Skills
					</h2>
					<p class="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
						A comprehensive toolkit built through years of hands-on experience
						and continuous learning
					</p>
				</div>

				<div class="flex flex-wrap justify-center gap-4 mb-12">
					{Object.keys(skillCategories).map((category) => (
						<button
							type={"button"}
							key={category}
							onClick={() => setActiveCategory(category)}
							class={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
								activeCategory === category
									? "bg-gradient-primary text-white shadow-lg"
									: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
							}`}
						>
							{category}
						</button>
					))}
				</div>

				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{skillCategories[activeCategory as keyof typeof skillCategories].map(
						(skill) => (
							<div
								key={skill.name}
								class="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl card-hover"
							>
								<div class="flex justify-between items-center mb-3">
									<h4 class="text-lg font-semibold text-slate-900 dark:text-white">
										{skill.name}
									</h4>
									<span class="text-sm text-slate-600 dark:text-slate-400">
										{skill.level}%
									</span>
								</div>
								<div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
									<div
										class={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
										style={{ width: `${skill.level}%` }}
									/>
								</div>
							</div>
						),
					)}
				</div>

				<div class="mt-16 text-center">
					<div class="inline-flex items-center space-x-8 p-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl">
						<div class="text-center">
							<div class="text-3xl font-bold text-slate-700 dark:text-slate-300">
								15+
							</div>
							<div class="text-sm text-slate-600 dark:text-slate-400">
								Technologies
							</div>
						</div>
						<div class="text-center">
							<div class="text-3xl font-bold text-slate-700 dark:text-slate-300">
								3+
							</div>
							<div class="text-sm text-slate-600 dark:text-slate-400">
								Years Learning
							</div>
						</div>
						<div class="text-center">
							<div class="text-3xl font-bold text-slate-700 dark:text-slate-300">
								100+
							</div>
							<div class="text-sm text-slate-600 dark:text-slate-400">
								Hours Weekly
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
