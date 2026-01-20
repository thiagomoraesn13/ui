import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium " +
          "bg-primary text-white hover:bg-primary-hover transition-colors",
        className,
      )}
    />
  );
}
