
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CoffeeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "large";
}

export function CoffeeButton({
  children,
  className,
  variant = "primary",
  size = "default",
  ...props
}: CoffeeButtonProps) {
  return (
    <button
      className={cn(
        "font-raleway font-medium rounded-md transition-all duration-300 transform hover:scale-105",
        variant === "primary" 
          ? "bg-coffee-dark text-white hover:bg-coffee-medium" 
          : "bg-coffee-cream text-coffee-dark hover:bg-coffee-accent",
        size === "default" 
          ? "px-6 py-3 text-sm" 
          : "px-8 py-4 text-base",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
