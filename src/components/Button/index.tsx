import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
	onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button className="bg-primary px-4 py-2 rounded-md text-white" {...props}>
			{children}
		</button>
	);
};

export default Button;
