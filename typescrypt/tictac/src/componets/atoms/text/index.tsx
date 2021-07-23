import React from "react";

type TextSize = "xs" | "base" | "xl" | "5xl";

export interface TextProps {
  loading?: boolean;
  size?: TextSize;
}

export function Text({
  children,
  size = "base",
}: TextProps & React.HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <p className={`text-${size}`}>{children}</p>;
}
