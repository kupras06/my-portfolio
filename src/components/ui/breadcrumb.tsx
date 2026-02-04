import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { RiArrowRightSLine, RiMoreLine } from "@remixicon/react";
import type { ComponentProps } from "preact";
import { cn } from "@/lib/utils";

function Breadcrumb({ className, ...props }: ComponentProps<"nav">) {
	return (
		<nav
			aria-label="breadcrumb"
			data-slot="breadcrumb"
			class={cn(className)}
			{...props}
		/>
	);
}

function BreadcrumbList({ className, ...props }: ComponentProps<"ol">) {
	return (
		<ol
			data-slot="breadcrumb-list"
			class={cn(
				"text-muted-foreground gap-1.5 text-sm sm:gap-2.5 flex flex-wrap items-center wrap-break-word",
				className,
			)}
			{...props}
		/>
	);
}

function BreadcrumbItem({ className, ...props }: ComponentProps<"li">) {
	return (
		<li
			data-slot="breadcrumb-item"
			class={cn("gap-1.5 inline-flex items-center", className)}
			{...props}
		/>
	);
}

function BreadcrumbLink({
	className,
	render,
	...props
}: useRender.ComponentProps<"a">) {
	return useRender({
		defaultTagName: "a",
		props: mergeProps<"a">(
			{
				className: cn("hover:text-foreground transition-colors", className),
			},
			props,
		),
		render,
		state: {
			slot: "breadcrumb-link",
		},
	});
}

function BreadcrumbPage({ className, ...props }: ComponentProps<"link">) {
	return (
		<link
			data-slot="breadcrumb-page"
			aria-disabled="true"
			aria-current="page"
			class={cn("text-foreground font-normal", className)}
			{...props}
		/>
	);
}

function BreadcrumbSeparator({
	children,
	className,
	...props
}: ComponentProps<"li">) {
	return (
		<li
			data-slot="breadcrumb-separator"
			role="presentation"
			aria-hidden="true"
			class={cn("[&>svg]:size-3.5", className)}
			{...props}
		>
			{children ?? <RiArrowRightSLine />}
		</li>
	);
}

function BreadcrumbEllipsis({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			data-slot="breadcrumb-ellipsis"
			role="presentation"
			aria-hidden="true"
			class={cn(
				"size-5 [&>svg]:size-4 flex items-center justify-center",
				className,
			)}
			{...props}
		>
			<RiMoreLine />
			<span class="sr-only">More</span>
		</span>
	);
}

export {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
};
