import React, { useCallback, useRef } from 'react'
import { makeStyledComponent } from 'native-base/lib/typescript/utils/styled'
import { ScrollView } from 'react-native-gesture-handler'
import TaskItem from './task-item'

const StyledScrollView = makeStyledComponent(ScrollView)

interface TaskItemData {
  id: string
  subject: string
  done: boolean
}

interface TaskListProps {
  data: Array<TaskItemData>
  editingItemId: string | null
  onToggleItem: (item: TaskItemData) => void
  onChangeSubject: (item: TaskItemData, newSubject: string) => void
  onFinishEditing: (item: TaskItemData) => void
  onPressLabel: (item: TaskItemData) => void
  onRemoveItem: (item: TaskItemData) => void
}

export default function TaskList({
  data,
  editingItemId,
  onToggleItem,
  onChangeSubject,
  onFinishEditing,
  onPressLabel,
  onRemoveItem
}: TaskListProps) {
  const refScrollView = useRef<ScrollView>(null)
  return (
    <StyledScrollView ref={refScrollView} w="full">
      {data.map((item) => (
        <TaskItem isDone={item.done} isEditing={false} subject={item.subject} />
      ))}
    </StyledScrollView>
  )
}
