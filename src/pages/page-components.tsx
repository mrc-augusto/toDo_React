import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { ButtonIcon } from "@/components/buttton-icon";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { Icon } from "@/components/icon";
import { InputCheckbox } from "@/components/input-checkbox";
import { InputText } from "@/components/input-text";
import { Skeleton } from "@/components/skeleton";
import { Text } from "@/components/text";
import TrashIcon from '@/assets/icons/trash.svg?react'
import CheckIcon from '@/assets/icons/check.svg?react'
import PencilIcon from '@/assets/icons/pencil.svg?react'
import PlusIcon from '@/assets/icons/plus.svg?react'
import SpinnerIcon from '@/assets/icons/spinner.svg?react'
import XIcon from '@/assets/icons/x.svg?react'

export function PageComponents(){
  return (
    <Container>
      <div className='grid gap-5 p-6'>
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
          <Badge loading>5</Badge>
        </div>

        <div className='flex gap-2'>
          <Button variant='primary' size='md' icon={PlusIcon}>
            Adicionar
          </Button>
        </div>

        <div className='flex gap-2'>
          <ButtonIcon variant='primary' icon={PlusIcon}/>
          <ButtonIcon variant='secondary' icon={PlusIcon}/>
          <ButtonIcon variant='tertiary' icon={PlusIcon}/>
          <ButtonIcon icon={TrashIcon} loading/>
        </div>

        <div className='flex gap-2'>
          <InputText/>
        </div>

        <div className='flex gap-2'>
          <InputCheckbox/>
          <InputCheckbox loading/>
        </div>

        <div className='flex gap-2'>
          <Card size='md'>Eu sou um Card</Card>
        </div>

        <div className='space-y-2'>
          <Skeleton className='h-6'/>
          <Skeleton className='h-6 '/>
          <Skeleton className='h-6 w-96'/>
        </div>

      </div>
    </Container>
  )
}
  