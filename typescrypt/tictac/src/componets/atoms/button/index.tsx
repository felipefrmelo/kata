import React from "react";
import { Spinner } from "../spinner";

export interface ButtonProps {
  loading?: boolean;
}

export function Button({
  loading = false,
  children,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button
        {...props}
        type="button"
        className="inline-flex items-center 
        px-4 py-2 border border-transparent 
        text-base leading-6 font-medium
        rounded-md text-white
        bg-indigo-600
        hover:bg-indigo-500
        focus:border-bg-indigo-700 
        active:bg-indigo-700
        transition
        ease-in-out
        duration-150"
        disabled={loading}
      >
        {children}
      </button>
    </span>
  );
}
