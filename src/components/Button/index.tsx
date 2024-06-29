// FIXME update to be more friendly for workshop audiences
import React from "react";
import clsxm from "@/utils/clsxm";
import { useRouter } from "next/router";

type Variant = "link" | "outline" | "solid";
type Color =
	| "primary"
	| "secondary"
	| "info"
	| "danger"
	| "warning"
	| "white"
	| "transparent";
type Size = "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variant;
	color?: Color;
	size?: Size;
	href?: string;
}

const baseClasses =
	"inline-flex items-center border border-transparent font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";

const variantClasses: Record<Variant, string> = {
	link: "bg-transparent",
	outline: "bg-transparent border",
	solid: "shadow-sm",
};

const colorClasses: Record<Color, string> = {
	primary: "text-white bg-blue-600 hover:bg-blue-700",
	secondary: "text-white bg-gray-600 hover:bg-gray-700",
	info: "text-white bg-teal-600 hover:bg-teal-700",
	danger: "text-white bg-red-600 hover:bg-red-700",
	warning: "text-white bg-yellow-600 hover:bg-yellow-700",
	white: "text-gray-700 bg-white hover:bg-gray-50 border-gray-300",
	transparent: "text-gray-700 bg-transparent hover:bg-gray-100",
};

const sizeClasses: Record<Size, string> = {
	small: "px-2.5 py-1.5 text-xs",
	medium: "px-3 py-2 text-sm",
	large: "px-4 py-2 text-base",
};

const Button: React.FC<ButtonProps> = ({
	variant = "solid",
	color = "primary",
	size = "medium",
	href,
	className,
	children,
	onClick,
	...props
}) => {
	const router = useRouter();

	const classes = clsxm(
		baseClasses,
		variantClasses[variant],
		colorClasses[color],
		sizeClasses[size],
		className
	);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		href ? router.push(href) : onClick?.(event);
	};

	return (
		<Button className={classes} onClick={handleClick} {...props}>
			{children}
		</Button>
	);
};

export default Button;
