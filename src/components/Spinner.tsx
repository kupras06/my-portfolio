export function LoadingSpinner() {
	return (
		<div class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
			<div class="text-center">
				<div class="relative w-16 h-16 mx-auto mb-4">
					<div class="absolute top-0 left-0 w-full h-full border-4 border-blue-200 dark:border-blue-800 rounded-full" />
					<div class="absolute top-0 left-0 w-full h-full border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
				</div>
				<p class="text-gray-600 dark:text-gray-300">
					Loading portfolio data...
				</p>
			</div>
		</div>
	);
}
