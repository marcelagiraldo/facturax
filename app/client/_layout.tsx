import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const ClientLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} className='bg-blue-500'>
      <Text style={{color:'white'}}>Estamos con los clientes</Text>
    </SafeAreaView>
  )
}

export default ClientLayout