import type { ComponentProps } from 'react';
import { Text } from '@/components/text';
import {badgeVariants} from './badge-variants'
import { badgeTextVariants } from './badge-text-variants';
import type {  VariantProps } from 'class-variance-authority';
import {cx} from 'class-variance-authority';
import { Skeleton } from '../skeleton';
import { badgeSkeletonVariants } from './badge-skeleton-variants';


interface BadgeProps extends ComponentProps<'div'>, VariantProps<typeof badgeVariants>{
  loading?: boolean
}

export function Badge({
  variant,
  size,
  className,
  children,
  loading,
  ...props
}: BadgeProps){
  if (loading){
    return <Skeleton 
      rounded='full'
      className = {cx(
        badgeVariants({variant: 'none'}),
        badgeSkeletonVariants({size}),
        className
      )}
    />
  }
  return(
    <div className={badgeVariants({variant, size, className})} {...props}>
      <Text className={badgeTextVariants({variant})} variant='body-sm-bold'>{children}</Text>
    </div>
  )
}