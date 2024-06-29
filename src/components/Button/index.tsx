import { FC } from "react";

export type ButtonProps = React.FC<HTMLButtonElement> & {
	children: React.ReactNode;
	onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ children, ...props }) => {
	return <button {...props}>{children}</button>;
};

export default Button;
