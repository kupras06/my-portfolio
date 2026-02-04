import { RiLoaderLine } from "@remixicon/react";
import type { ComponentProps } from "preact";
import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: ComponentProps<"svg">) {
	return (
		<RiLoaderLine
			role="status"
			aria-label="Loading"
			class={cn("size-4 animate-spin", className)}
			{...props}
		/>
	);
}

export { Spinner };
