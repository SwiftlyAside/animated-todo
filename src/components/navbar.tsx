import React from 'react'
import { HStack, IconButton } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { useCallback } from 'react'
import { Feather } from '@expo/vector-icons'

const Navbar = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>()
  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer()
  }, [navigation])

  return (
    <HStack w="full" h={40} alignItems="center" alignContent="center" p={4}>
      <IconButton
        onPress={handlePressMenuButton}
        borderRadius={100}
        _icon={{
          as: Feather,
          name: 'menu',
          size: 6,
          color: 'white'
        }}
      />
    </HStack>
  )
}

export default Navbar
