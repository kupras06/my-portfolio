"use client";

import type { ComponentProps } from "preact";

import { cn } from "@/lib/utils";

function Label({ className, ...props }: ComponentProps<"label">) {
	return (
		<label
			data-slot="label"
			class={cn(
				"gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
				className,
			)} background
			htmlFor={'new'}
			{...props}
		/>
	);
}

export { Label };
