import React from "react"
import  { Icon } from "../icon"
import  { buttonIconVariants } from "./button-icon-variants"
import type { VariantProps } from "class-variance-authority"
import { buttonIconIconVariants } from "./button-icon-icon-variants"


interface ButtonIconProps extends VariantProps<typeof buttonIconVariants>, Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>{
  icon: React.ComponentProps<typeof Icon>['svg']
}

export function ButtonIcon({
  variant, 
  size,
  disabled,
  className,
  icon,
  ...props
}: ButtonIconProps){
  return(
    <button 
      className={buttonIconVariants({
        variant,
        size, 
        disabled, 
        className})}
        {...props}
      >
        <Icon svg={icon} className={buttonIconIconVariants({variant, size})}/>
    </button>
  )
}