import { cva } from "class-variance-authority";

export const badgeVariants =cva('inline-flex item-center justify-center rounded-full', {
  variants:{
    variant:{
      primary: 'bg-green-light',
      secondary: 'bg-pink-light',
    },
    size:{
      sm: 'py-0.5 px-2'
    }
  },
  defaultVariants:{
    variant: 'primary',
    size: 'sm'
  }
})