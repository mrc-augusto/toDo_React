import type { ComponentProps, FC } from 'react'
import type{VariantProps} from 'class-variance-authority'
import {iconVariants} from './icons-variants'

interface IconProps extends ComponentProps<'svg'>, VariantProps<typeof iconVariants>{
  svg: FC<ComponentProps<'svg'>>
}

export function Icon({svg: SvgComponent, animate, className,...props}: IconProps){
  return <SvgComponent {...props} className={iconVariants({animate, className})}/>
}