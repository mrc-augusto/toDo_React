import React from "react"
import  { Icon } from "../icon"
import type { VariantProps } from "class-variance-authority"
import  { buttonVariants } from "./button-variants"
import { buttonIconVariants } from "./button-icon-variants"
import { buttonTextVariants } from "./button-text-variants"
import { Text } from "../text"

interface ButtonProps extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>, VariantProps<typeof buttonVariants>{
  icon?: React.ComponentProps<typeof Icon>['svg']
}

export function Button({
  variant, 
  size, 
  disabled,
  className, 
  children, 
  icon: IconComponent,
  ...props
}: ButtonProps){
  return (
    <button className={buttonVariants({variant, size, disabled, className})} {...props}>
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={buttonIconVariants({variant,size})}
        />
      )}
      <Text 
        variant={"body-md-bold"} 
        className={buttonTextVariants({variant})}
      >
        {children}
      </Text>
    </button>
  )
}