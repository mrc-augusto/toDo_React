import type { ComponentProps } from 'react';
import { Text } from '@/components/text';
import {badgeVariants} from './badge-variants'
import { badgeTextVariants } from './badge-text-variants';
import type { VariantProps } from 'class-variance-authority';


interface BadgeProps extends ComponentProps<'div'>, VariantProps<typeof badgeVariants>{}

export function Badge({
  variant,
  size,
  className,
  children,
  ...props
}: BadgeProps){
  return(
    <div className={badgeVariants({variant, size, className})} {...props}>
      <Text className={badgeTextVariants({variant})} variant='body-sm-bold'>{children}</Text>
    </div>
  )
}