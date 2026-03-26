import type { VariantProps } from "class-variance-authority";
import { skeletonVariants } from "./skeleton-variants";
import type { ComponentProps } from "react";

interface SkeletonProps extends VariantProps<typeof skeletonVariants>, ComponentProps<'div'>{}

export function Skeleton({
  className, 
  rounded, 
  ...props
}: SkeletonProps){
  return <div className={skeletonVariants({rounded, className})} {...props}/>
}