import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const ProductModule = () => {
  return (
    <View className='flex bg-secondary h-full'>
      <StatusBar hidden={false} style='dark'/>
      <Text className='text-6xl text-white'>Productos</Text>
    </View>
  )
}

export default ProductModule