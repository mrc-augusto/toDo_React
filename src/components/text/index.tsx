import { createElement, type ReactNode, type JSX } from "react";
import type { VariantProps} from 'class-variance-authority'
import { textVariants } from "./text-variants";


interface TextProps extends VariantProps<typeof textVariants>{
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: ReactNode
}

export function Text({as = 'span', variant, className, children, ...props}: TextProps){
  return createElement(
    as,
    {
      className: textVariants({variant, className}),
      ...props
    },
    children
  )
}