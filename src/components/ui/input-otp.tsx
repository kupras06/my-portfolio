import { RiSubtractLine } from "@remixicon/react";
import { OTPInput, OTPInputContext } from "input-otp";
import type { ComponentProps } from "preact";
import { cn } from "@/lib/utils";

function InputOTP({
	className,
	containerClassName,
	...props
}: ComponentProps<typeof OTPInput> & {
	containerClassName?: string;
}) {
	return (
		<OTPInput
			data-slot="input-otp"
			containerClassName={cn(
				"cn-input-otp flex items-center has-disabled:opacity-50",
				containerClassName,
			)}
			spellCheck={false}
			class={cn("disabled:cursor-not-allowed", className)}
			{...props}
		/>
	);
}

function InputOTPGroup({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="input-otp-group"
			class={cn(
				"has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive rounded-4xl has-aria-invalid:ring-[3px] flex items-center",
				className,
			)}
			{...props}
		/>
	);
}

function InputOTPSlot({
	index,
	className,
	...props
}: ComponentProps<"div"> & {
	index: number;
}) {
	const inputOtpContext = useContext(OTPInputContext);
	const { char, hasFakeCaret, isActive } = inputOtpContext?.slots[index] ?? {};

	return (
		<div
			data-slot="input-otp-slot"
			data-active={isActive}
			class={cn(
				"bg-input/30 border-input data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive size-9 border-y border-r text-sm transition-all outline-none first:rounded-l-4xl first:border-l last:rounded-r-4xl data-[active=true]:ring-[3px] relative flex items-center justify-center data-[active=true]:z-10",
				className,
			)}
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<div class="pointer-events-none absolute inset-0 flex items-center justify-center">
					<div class="animate-caret-blink bg-foreground h-4 w-px duration-1000 bg-foreground h-4 w-px" />
				</div>
			)}
		</div>
	);
}

function InputOTPSeparator({ ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="input-otp-separator"
			class="[&_svg:not([class*='size-'])]:size-4 flex items-center"
			role="separator"
			{...props}
		>
			<RiSubtractLine />
		</div>
	);
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
