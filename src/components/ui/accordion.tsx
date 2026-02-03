import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
	return (
		<AccordionPrimitive.Root
			data-slot="accordion"
			class={cn(
				"overflow-hidden rounded-2xl border flex w-full flex-col",
				className,
			)}
			{...props}
		/>
	);
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
	return (
		<AccordionPrimitive.Item
			data-slot="accordion-item"
			class={cn("data-open:bg-muted/50 not-last:border-b", className)}
			{...props}
		/>
	);
}

function AccordionTrigger({
	className,
	children,
	...props
}: AccordionPrimitive.Trigger.Props) {
	return (
		<AccordionPrimitive.Header class="flex">
			<AccordionPrimitive.Trigger
				data-slot="accordion-trigger"
				class={cn(
					"**:data-[slot=accordion-trigger-icon]:text-muted-foreground gap-6 p-4 text-left text-sm font-medium hover:underline **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50",
					className,
				)}
				{...props}
			>
				{children}
				<RiArrowDownSLine
					data-slot="accordion-trigger-icon"
					class="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
				/>
				<RiArrowUpSLine
					data-slot="accordion-trigger-icon"
					class="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
				/>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

function AccordionContent({
	className,
	children,
	...props
}: AccordionPrimitive.Panel.Props) {
	return (
		<AccordionPrimitive.Panel
			data-slot="accordion-content"
			class="data-open:animate-accordion-down data-closed:animate-accordion-up px-4 text-sm overflow-hidden"
			{...props}
		>
			<div
				class={cn(
					"pt-0 pb-4 [&_a]:hover:text-foreground h-(--accordion-panel-height) data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4",
					className,
				)}
			>
				{children}
			</div>
		</AccordionPrimitive.Panel>
	);
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
