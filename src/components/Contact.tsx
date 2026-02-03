import { Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-preact";
import { useState } from "preact/hooks";
import type { PersonalData } from "../data";

interface ContactProps {
	data: PersonalData;
}
export default function Contact({ data }: ContactProps) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
		// Reset form
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	const handleChange = (e: Event) => {
		const target = e.target as HTMLInputElement | HTMLTextAreaElement;
		setFormData((prev) => ({
			...prev,
			[target.name]: target.value,
		}));
	};

	return (
		<section id="contact" class="py-20 bg-white dark:bg-slate-900">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16">
					<h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
						Let's Work Together
					</h2>
					<p class="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
						Ready to bring your ideas to life? Let's discuss how we can create
						something amazing together.
					</p>
				</div>

				<div class="grid lg:grid-cols-2 gap-12">
					{/* Contact Information */}
					<div>
						<h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
							Get In Touch
						</h3>

						<div class="space-y-6 mb-8">
							<div class="flex items-center space-x-4">
								<div class="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
									<Mail class="w-6 h-6 text-slate-700 dark:text-slate-300" />
								</div>
								<div>
									<h4 class="font-semibold text-slate-900 dark:text-white">
										Email
									</h4>
									<p class="text-slate-600 dark:text-slate-300">{data.email}</p>
								</div>
							</div>

							{/* <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">{data.phone}</p>
                </div>
              </div> */}

							<div class="flex items-center space-x-4">
								<div class="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
									<MapPin class="w-6 h-6 text-slate-700 dark:text-slate-300" />
								</div>
								<div>
									<h4 class="font-semibold text-slate-900 dark:text-white">
										Location
									</h4>
									<p class="text-slate-600 dark:text-slate-300">
										{data.location}
									</p>
								</div>
							</div>
						</div>

						<div>
							<h4 class="font-semibold text-slate-900 dark:text-white mb-4">
								Follow Me
							</h4>
							<div class="flex space-x-4">
								<a
									href={data.social.github}
									target="_blank"
									rel="noopener noreferrer"
									class="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
								>
									<Github class="w-5 h-5" />
								</a>
								<a
									href={data.social.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									class="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
								>
									<Linkedin class="w-5 h-5" />
								</a>
								<a
									href={data.social.twitter}
									target="_blank"
									rel="noopener noreferrer"
									class="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
								>
									<Twitter class="w-5 h-5" />
								</a>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div class="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
						<form onSubmit={handleSubmit} class="space-y-6">
							<div class="grid sm:grid-cols-2 gap-6">
								<div>
									<label
										for="name"
										class="block text-sm font-medium text-slate-900 dark:text-white mb-2"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required={true}
										class="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-slate-700 focus:border-transparent transition-colors"
										placeholder="Your Name"
									/>
								</div>
								<div>
									<label
										for="email"
										class="block text-sm font-medium text-slate-900 dark:text-white mb-2"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required={true}
										class="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-slate-700 focus:border-transparent transition-colors"
										placeholder="your@email.com"
									/>
								</div>
							</div>

							<div>
								<label
									for="subject"
									class="block text-sm font-medium text-slate-900 dark:text-white mb-2"
								>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									required={true}
									class="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-slate-700 focus:border-transparent transition-colors"
									placeholder="Project Discussion"
								/>
							</div>

							<div>
								<label
									for="message"
									class="block text-sm font-medium text-slate-900 dark:text-white mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required={true}
									rows={5}
									class="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-slate-700 focus:border-transparent transition-colors resize-none"
									placeholder="Tell me about your project..."
								/>
							</div>

							<button
								type="submit"
								class="w-full bg-gradient-primary text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
							>
								<Send class="w-5 h-5" />
								<span>Send Message</span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
