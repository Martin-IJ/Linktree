import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  className,
  disabled = false,
  variant = "primary",
}) => {
  const baseClasses = `px-5 py-2.5 text-sm font-medium rounded-lg focus:ring-4 focus:outline-none`;
  const variantClasses = {
    primary:
      "text-white bg-default hover:bg-default-light focus:ring-primary-300 transition ease-in-out duration-300",
    secondary:
      "text-default bg-white border border-default hover:bg-default-extraLight focus:ring-transparent transition ease-in-out duration-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
