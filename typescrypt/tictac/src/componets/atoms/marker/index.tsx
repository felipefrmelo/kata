import React from "react";

type MarkerType = number | string;

export interface MarkerProps {
  value?: MarkerType;
}

export function Marker({
  value,
  ...props
}: MarkerProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="text-5xl h-14 w-14 justify-center items-center rounded-sm flex bg-yellow-500"
    >
      {value}
    </button>
  );
}
