import type { ComponentProps } from "react";
import { type VariantProps } from "class-variance-authority";
import { inputCheckboxVariants } from "./input-checkbox-variants";
import { inputCheckboxWrapperVariants } from "./input-checkbox-wrapper-variants";
import { inputCheckboxIconVariants } from "./input-checkbox-icon-variants";
import { Icon } from "../icon";
import CheckIcon from '@/assets/icons/check.svg?react'

interface InputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>,
Omit<ComponentProps<'input'>, 'size' | 'disabled'> {}

export function InputCheckbox({
  size,
  className,
  disabled,
  ...props
}: InputCheckboxProps){
  return(
    <label className={inputCheckboxWrapperVariants({className})}>
      <input
        type='checkbox'
        className={inputCheckboxVariants({size, disabled})}
        {...props}
      />
      <Icon svg={CheckIcon} className={inputCheckboxIconVariants({ size })}/>
    </label>
  )
}