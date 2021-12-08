import React from 'react'
import AnimatedColorBox from '../components/animated-color-box'
import {
  Box,
  Icon,
  Image,
  ScrollView,
  Text,
  useColorModeValue,
  VStack
} from 'native-base'
import Masthead from '../components/masthead'
import Navbar from '../components/navbar'
import LinkButton from '../components/link-button'
import { Feather } from '@expo/vector-icons'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about-masthead.png')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/ilan.png')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full">
            This is a React Native app that I built to learn and practice. You
            can watch tutorial on this website.
          </Text>
          <LinkButton
            colorScheme="purple"
            size="lg"
            borderRadius="full"
            href="https://github.com/craftzdog/react-native-animated-todo"
            leftIcon={
              <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
            }
          >
            <Text fontSize="md" color="white">
              View on GitHub
            </Text>
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen
