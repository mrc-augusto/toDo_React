import { cva } from "class-variance-authority";

export const buttonTextVariants = cva('', {
  variants:{
    variant:{
      primary: 'text-gray-400'
    }
  },
  defaultVariants:{
    variant: 'primary'
  }
})