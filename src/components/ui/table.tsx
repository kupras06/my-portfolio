import type { ComponentProps } from "preact";

import { cn } from "@/lib/utils";

function Table({ className, ...props }: ComponentProps<"table">) {
	return (
		<div data-slot="table-container" class="relative w-full overflow-x-auto">
			<table
				data-slot="table"
				class={cn("w-full caption-bottom text-sm", className)}
				{...props}
			/>
		</div>
	);
}

function TableHeader({ className, ...props }: ComponentProps<"thead">) {
	return (
		<thead
			data-slot="table-header"
			class={cn("[&_tr]:border-b", className)}
			{...props}
		/>
	);
}

function TableBody({ className, ...props }: ComponentProps<"tbody">) {
	return (
		<tbody
			data-slot="table-body"
			class={cn("[&_tr:last-child]:border-0", className)}
			{...props}
		/>
	);
}

function TableFooter({ className, ...props }: ComponentProps<"tfoot">) {
	return (
		<tfoot
			data-slot="table-footer"
			class={cn(
				"bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
				className,
			)}
			{...props}
		/>
	);
}

function TableRow({ className, ...props }: ComponentProps<"tr">) {
	return (
		<tr
			data-slot="table-row"
			class={cn(
				"hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
				className,
			)}
			{...props}
		/>
	);
}

function TableHead({ className, ...props }: ComponentProps<"th">) {
	return (
		<th
			data-slot="table-head"
			class={cn(
				"text-foreground h-12 px-3 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0",
				className,
			)}
			{...props}
		/>
	);
}

function TableCell({ className, ...props }: ComponentProps<"td">) {
	return (
		<td
			data-slot="table-cell"
			class={cn(
				"p-3 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
				className,
			)}
			{...props}
		/>
	);
}

function TableCaption({ className, ...props }: ComponentProps<"caption">) {
	return (
		<caption
			data-slot="table-caption"
			class={cn("text-muted-foreground mt-4 text-sm", className)}
			{...props}
		/>
	);
}

export {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableHead,
	TableRow,
	TableCell,
	TableCaption,
};
