import type { ComponentProps } from "preact";
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="skeleton"
			class={cn("bg-muted rounded-xl animate-pulse", className)}
			{...props}
		/>
	);
}

export { Skeleton };
