import { useEffect, useState } from "preact/hooks";
import { apiService, type PortfolioData } from "./data";

export function usePortfolioData() {
	const [data, setData] = useState<PortfolioData>(apiService.getFallbackData());
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setError(null);
				const portfolioData = await apiService.fetchPortfolioData();
				setData(portfolioData);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Failed to fetch data");
				setData(apiService.getFallbackData());
			}
		};

		fetchData();
	}, []);

	const refetch = async () => {
		try {
			setError(null);
			const portfolioData = await apiService.fetchPortfolioData();
			setData(portfolioData);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to fetch data");
			setData(apiService.getFallbackData());
		}
	};

	return { data, error, refetch };
}
