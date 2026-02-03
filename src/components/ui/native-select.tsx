import { RiArrowDownSLine } from "@remixicon/react";
import type { ComponentProps } from "preact";
import { cn } from "@/lib/utils";

type NativeSelectProps = Omit<ComponentProps<"select">, "size"> & {
	size?: "sm" | "default";
};

function NativeSelect({
	className,
	size = "default",
	...props
}: NativeSelectProps) {
	return (
		<div
			class={cn(
				"group/native-select relative w-fit has-[select:disabled]:opacity-50",
				className,
			)}
			data-slot="native-select-wrapper"
			data-size={size}
		>
			<select
				data-slot="native-select"
				data-size={size}
				class="border-input bg-input/30 placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 w-full min-w-0 appearance-none rounded-4xl border py-1 pr-8 pl-3 text-sm transition-colors select-none focus-visible:ring-[3px] aria-invalid:ring-[3px] data-[size=sm]:h-8 outline-none disabled:pointer-events-none disabled:cursor-not-allowed"
				{...props}
			/>
			<RiArrowDownSLine
				class="text-muted-foreground top-1/2 right-3.5 size-4 -translate-y-1/2 pointer-events-none absolute select-none"
				aria-hidden="true"
				data-slot="native-select-icon"
			/>
		</div>
	);
}

function NativeSelectOption({ ...props }: ComponentProps<"option">) {
	return <option data-slot="native-select-option" {...props} />;
}

function NativeSelectOptGroup({
	className,
	...props
}: ComponentProps<"optgroup">) {
	return (
		<optgroup
			data-slot="native-select-optgroup"
			class={cn(className)}
			{...props}
		/>
	);
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
