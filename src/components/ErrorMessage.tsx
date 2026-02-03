import { RefreshCw } from "lucide-preact";

interface ErrorMessageProps {
	message: string;
	onRetry: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
	return (
		<div class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
			<div class="text-center max-w-md">
				<div class="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
					<RefreshCw class="w-8 h-8 text-red-600 dark:text-red-400" />
				</div>
				<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
					Unable to Load Data
				</h2>
				<p class="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
				<button
					type={"button"}
					onClick={onRetry}
					class="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto"
				>
					<RefreshCw class="w-4 h-4" />
					<span>Try Again</span>
				</button>
			</div>
		</div>
	);
}
