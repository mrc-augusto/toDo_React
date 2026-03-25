import { cva } from "class-variance-authority";

  export const buttonIconIconVariants = cva('transition', {
    variants:{
      variant:{
        primary: 'fill-white',
        secondary: 'fill-pink-dark group-hover:fill-white',
        tertiary: 'fill-gray-300 group-hover:fill-gray-400'
      },
      size:{
        sm: 'w-4 h-4'
      }
    },
    defaultVariants:{
      variant: 'primary',
      size: 'sm'
    }
  })