import { Text } from './components/text'
import './index.css'


export function  App() {
  return (
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
  )
}


