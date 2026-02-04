import {
	RiArrowLeftSLine,
	RiArrowRightSLine,
	RiMoreLine,
} from "@remixicon/react";
import type { ComponentProps } from "preact";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Pagination({ className, ...props }: ComponentProps<"nav">) {
	return (
		<nav
			aria-label="pagination"
			data-slot="pagination"
			class={cn("mx-auto flex w-full justify-center", className)}
			{...props}
		/>
	);
}

function PaginationContent({ className, ...props }: ComponentProps<"ul">) {
	return (
		<ul
			data-slot="pagination-content"
			class={cn("gap-1 flex items-center", className)}
			{...props}
		/>
	);
}

function PaginationItem({ ...props }: ComponentProps<"li">) {
	return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
	isActive?: boolean;
} & Pick<ComponentProps<typeof Button>, "size"> &
	ComponentProps<"a">;

function PaginationLink({
	className,
	isActive,
	size = "icon",
	...props
}: PaginationLinkProps) {
	return (
		<Button
			variant={isActive ? "outline" : "ghost"}
			size={size}
			class={cn(className)}
			nativeButton={false}
			render={
				<a
					aria-current={isActive ? "page" : undefined}
					data-slot="pagination-link"
					data-active={isActive}
					{...props}
				/>
			}
		/>
	);
}

function PaginationPrevious({
	className,
	text = "Previous",
	...props
}: ComponentProps<typeof PaginationLink> & { text?: string }) {
	return (
		<PaginationLink
			aria-label="Go to previous page"
			size="default"
			class={cn("pl-2!", className)}
			{...props}
		>
			<RiArrowLeftSLine data-icon="inline-start" />
			<span class="hidden sm:block">{text}</span>
		</PaginationLink>
	);
}

function PaginationNext({
	className,
	text = "Next",
	...props
}: ComponentProps<typeof PaginationLink> & { text?: string }) {
	return (
		<PaginationLink
			aria-label="Go to next page"
			size="default"
			class={cn("pr-2!", className)}
			{...props}
		>
			<span class="hidden sm:block">{text}</span>
			<RiArrowRightSLine data-icon="inline-end" />
		</PaginationLink>
	);
}

function PaginationEllipsis({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			aria-hidden={true}
			data-slot="pagination-ellipsis"
			class={cn(
				"size-9 items-center justify-center [&_svg:not([class*='size-'])]:size-4 flex items-center justify-center",
				className,
			)}
			{...props}
		>
			<RiMoreLine />
			<span class="sr-only">More pages</span>
		</span>
	);
}

export {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
};
