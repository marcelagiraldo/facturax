import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const Register = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} className='bg-blue-500'>
      <Text style={{color:'white'}}>Estamos en registro</Text>
    </SafeAreaView>
  )
}

export default Register