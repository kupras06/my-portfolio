import { Code, Heart } from "lucide-preact";

export default function Footer() {
	return (
		<footer class="bg-slate-900 text-white py-12">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<div class="flex items-center justify-center space-x-2 mb-4">
						<span>Made with</span>
						<Heart class="w-4 h-4 text-red-500 fill-current" />
						<span>and</span>
						<Code class="w-4 h-4 text-slate-400" />
						<span>by a passionate developer</span>
					</div>
					<p class="text-slate-400 mb-6">
						Building the future of web development, one line of code at a time.
					</p>
					<div class="border-t border-slate-800 pt-6">
						<p class="text-slate-500 text-sm">
							© {new Date().getFullYear()} Portfolio. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
