import type { VariantProps } from "class-variance-authority";
import { cardVariants } from "./card-variants";
import type { ComponentProps, JSX } from "react";
import React from "react";

interface CardProps extends VariantProps<typeof cardVariants>, ComponentProps<'div'> {
  as?: keyof JSX.IntrinsicElements
}


export function Card({
  as='div', 
  size, 
  children,
  className,
  ...props
}: CardProps){
  return React.createElement(
    as,
    {
      className: cardVariants({size, className}),
      ...props
    },
    children
  )
}