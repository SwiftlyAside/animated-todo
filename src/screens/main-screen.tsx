import shortid from 'shortid'
import React, { useCallback, useState } from 'react'
import { useColorModeValue, VStack } from 'native-base'
import AnimatedColorBox from '../components/animated-color-box'

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Программирование',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Разработка игр',
    done: false
  }
]

export default function MainScreen() {
  const [data, setData] = useState(initialData)
  const [editingItemId, setEditingItemId] = useState<string | null>(null)

  const handleToggleTaskItem = useCallback((item, newSubject) => {
    setData(prevData => {
      const newData = [...prevData]
      const itemIndex = prevData.indexOf(item)
      newData[itemIndex] = {
        ...item,
        subject: newSubject
      }
      return newData
    })
  }, [])

  const handleFinishEditingTaskItem = useCallback(() => {
    setEditingItemId(null)
  }, [])

  const handlePressTaskItemLabel = useCallback((item) => {
    setEditingItemId(item.id)
  }, [])

  const handleRemoveItem = useCallback((item) => {
    setData(prevData => {
      return prevData.filter(i => i !== item)
    })
  }, [])

  return (
    <AnimatedColorBox flex={1} bg={useColorModeValue('warmGray.50', 'primary.900')} w='full'>
      <div>Masthead</div>
      <VStack flex={1} space={1} bg={useColorModeValue('warmGray.50', 'primary.900')} mt='-20px'
              borderTopLeftRadius='20px' borderTopRightRadius='20px' pt='20px'>
        <div>TaskList</div>
      </VStack></AnimatedColorBox>
  )
}