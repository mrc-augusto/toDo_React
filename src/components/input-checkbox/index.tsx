import type { ComponentProps } from "react";
import { type VariantProps } from "class-variance-authority";
import { inputCheckboxVariants } from "./input-checkbox-variants";
import { inputCheckboxWrapperVariants } from "./input-checkbox-wrapper-variants";
import { inputCheckboxIconVariants } from "./input-checkbox-icon-variants";
import { Icon } from "../icon";
import CheckIcon from '@/assets/icons/check.svg?react'
import { Skeleton } from "../skeleton";

interface InputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>,
Omit<ComponentProps<'input'>, 'size' | 'disabled'> {
  loading?: boolean
}

export function InputCheckbox({
  variant,
  size,
  className,
  disabled,
  loading,
  ...props
}: InputCheckboxProps){
  if(loading){
    return <Skeleton
      rounded='sm'
      className={inputCheckboxVariants({variant: 'none', size})}
    />
  }

  return(
    <label className={inputCheckboxWrapperVariants({className})}>
      <input
        type='checkbox'
        className={inputCheckboxVariants({variant, size, disabled})}
        {...props}
      />
      <Icon svg={CheckIcon} className={inputCheckboxIconVariants({ size })}/>
    </label>
  )
}