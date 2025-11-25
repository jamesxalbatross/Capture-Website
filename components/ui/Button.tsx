import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transform shadow-sm hover:shadow-md";
  
  const variants = {
    primary: "bg-albatross-green text-white hover:bg-[#2D7A5F] hover:shadow-lg hover:shadow-albatross-green/30 focus:ring-albatross-green",
    secondary: "bg-albatross-yellow text-albatross-black hover:bg-[#FAD675] hover:shadow-lg hover:shadow-albatross-yellow/30 focus:ring-albatross-yellow",
    outline: "border-2 border-albatross-green text-albatross-green hover:bg-albatross-green hover:text-white focus:ring-albatross-green",
    dark: "bg-albatross-black text-white hover:bg-gray-800 hover:shadow-lg focus:ring-gray-800",
    ghost: "bg-transparent text-albatross-black hover:bg-gray-100 shadow-none hover:shadow-none",
    white: "bg-white text-albatross-green hover:bg-gray-50 hover:shadow-lg focus:ring-white",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-5 text-lg",
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};