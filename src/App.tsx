import './index.css'
import { Text } from './components/text/text'
import { Icon } from './components/icon/icon'
import TrashIcon from './assets/icons/trash.svg?react'
import CheckIcon from './assets/icons/check.svg?react'
import PencilIcon from './assets/icons/pencil.svg?react'
import PlusIcon from './assets/icons/plus.svg?react'
import SpinnerIcon from './assets/icons/spinner.svg?react'
import XIcon from './assets/icons/x.svg?react'
import { Badge } from './components/badge/badge'


export function  App() {
  return (
    <div className='grid gap-3 p-6'>
      <div className='flex flex-col gap-2'>
        <Text variant='body-sm-bold' className='text-pink-base'>
          Olá
        </Text>
        <Text variant='body-sm-bold' className='text-pink-base'>
          Olá
        </Text>
        <Text variant='body-md-bold' className='text-pink-base'>
          Olá
        </Text>
      </div>

      <div className='flex gap-1'>
        <Icon svg={TrashIcon} className='fill-green-base'/>
        <Icon svg={PencilIcon} className='fill-green-base'/>
        <Icon svg={CheckIcon} className='fill-green-base'/>
        <Icon svg={PlusIcon} className='fill-green-base'/>
        <Icon svg={SpinnerIcon} animate className='fill-green-base'/>
        <Icon svg={XIcon} className='fill-green-base'/>
      </div>

      <div className='flex gap-2'>
        <Badge variant = 'secondary'>2</Badge>
        <Badge variant = 'primary'>2 de 5</Badge>
      </div>




    </div>
  )
}
