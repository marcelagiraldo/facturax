import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const RegisterModule = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} className='bg-blue-500'>
      <StatusBar hidden={false} style='dark'/>
      <Text style={{color:'white'}}>Estamos en registro</Text>
    </SafeAreaView>
  )
}

export default RegisterModule