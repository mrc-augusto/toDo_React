import type { VariantProps } from "class-variance-authority";
import { containerVariants } from "./container-variants";
import type { ComponentProps, JSX } from "react";
import React from "react";

interface ContainerProps extends VariantProps<typeof containerVariants>, ComponentProps<'div'>{
  as?: keyof JSX.IntrinsicElements
}

export function Container({
  as='div',
  className,
  children, 
  ...props
}: ContainerProps){
  return React.createElement(
    as,
    {
      className: containerVariants({size: 'md', className}),
      ...props
    },
    children
  )
}