import { ButtonIcon } from "@/components/buttton-icon";
import { Card } from "@/components/card";
import { InputCheckbox } from "@/components/input-checkbox";
import { Text } from "@/components/text";
import TrashIcon from '@/assets/icons/trash.svg?react'
import PencilIcon from '@/assets/icons/pencil.svg?react'
import CheckIcon from '@/assets/icons/check.svg?react'
import XIcon from '@/assets/icons/x.svg?react'
import { useState } from "react";
import { InputText } from "@/components/input-text";

export function TaskItem(){
  const [isEditing, setIsEditing] = useState(false)

  function handleEditTask(){
    setIsEditing(true)
  }

  function handleCancelEditTask(){
    setIsEditing(false)
  }


  return(
    <Card size='md' className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckbox/>
          <Text className="flex-1">🛍️ Fazer as compras da semana</Text>
          <ButtonIcon icon={TrashIcon} variant='tertiary'/>
          <ButtonIcon icon={PencilIcon} variant='tertiary' onClick={handleEditTask}/>
        </>
      ) : (
        <>
          <InputText className="flex-1"/>
          <ButtonIcon icon={XIcon} variant='secondary' onClick={handleCancelEditTask}/>
          <ButtonIcon icon={CheckIcon} variant='primary'/>
        </>
      )}
      
    </Card>
    
  )
}