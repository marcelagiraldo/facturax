import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeModule = () => {
  return (
    <SafeAreaView className='flex bg-secondary h-full'>
      <StatusBar hidden={false} style='dark'/>
      <Text className='text-6xl text-white'>Principal</Text>
    </SafeAreaView>
  )
}

export default HomeModule