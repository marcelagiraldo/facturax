import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const CreateclientModule = () => {
  return (
    <SafeAreaView className='flex bg-secondary h-full'>
      <StatusBar hidden={false} style='light'/>
      <Text className='text-6xl text-white'>Crear Clientes</Text>
    </SafeAreaView>
  )
}

export default CreateclientModule