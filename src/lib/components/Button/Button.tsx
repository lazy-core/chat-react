import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  ...props
}) => {
  return (
    <button
      type="button" // Default to type="button" unless overridden
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;