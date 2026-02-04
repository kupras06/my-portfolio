import {
	RiCheckboxCircleLine,
	RiCloseCircleLine,
	RiErrorWarningLine,
	RiInformationLine,
	RiLoaderLine,
} from "@remixicon/react";
import { useTheme } from "next-themes";
import type { CSSProperties } from "preact";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = "system" } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps["theme"]}
			class="toaster group"
			icons={{
				success: <RiCheckboxCircleLine class="size-4" />,
				info: <RiInformationLine class="size-4" />,
				warning: <RiErrorWarningLine class="size-4" />,
				error: <RiCloseCircleLine class="size-4" />,
				loading: <RiLoaderLine class="size-4 animate-spin" />,
			}}
			style={
				{
					"--normal-bg": "var(--popover)",
					"--normal-text": "var(--popover-foreground)",
					"--normal-border": "var(--border)",
					"--border-radius": "var(--radius)",
				} as CSSProperties
			}
			toastOptions={{
				classNames: {
					toast: "cn-toast",
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
