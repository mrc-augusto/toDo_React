import { cva } from "class-variance-authority";


export const badgeTextVariants = cva('', {
  variants:{
    variant:{
      none: '',
      primary: 'text-green-base',
      secondary: 'text-pink-base',
    }
  },
  defaultVariants:{
    variant: 'primary',
  }
})