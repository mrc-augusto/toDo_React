import  { type VariantProps, cx } from "class-variance-authority";
// import {cx} from 'class-variance-authority'
import  { inputTextVariants } from "./input-text-variants";
import { textVariants } from "../text/text-variants";


interface InputTextProps extends VariantProps<typeof inputTextVariants
>, Omit<React.ComponentProps<'input'>, 'size'| 'disabled'>{

}

export function InputText({
  size, 
  disabled, 
  className, 
  ...props}: InputTextProps){
    return <input 
      className={cx(
        inputTextVariants({size, disabled}),
        textVariants(),
        className
      )}
      {...props}
    />
}