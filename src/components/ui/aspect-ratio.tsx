import type { ComponentProps, CSSProperties } from "preact";
import { cn } from "@/lib/utils";

function AspectRatio({
	ratio,
	className,
	...props
}: ComponentProps<"div"> & { ratio: number }) {
	return (
		<div
			data-slot="aspect-ratio"
			style={
				{
					"--ratio": ratio,
				} as CSSProperties
			}
			class={cn("relative aspect-(--ratio)", className)}
			{...props}
		/>
	);
}

export { AspectRatio };
