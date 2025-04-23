import React from "react";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <button
    className={`bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 focus:outline-none ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
