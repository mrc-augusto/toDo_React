import { cva } from "class-variance-authority";

export const buttonIconVariants = cva('transition', {
  variants:{
    variant:{
      primary: 'fill-pink-base'
    },
    size:{
      md: 'w-5 h-5'
    }
  },
  defaultVariants:{
    variant: 'primary',
    size: 'md'
  }
})