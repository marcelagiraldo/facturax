import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Link, router } from 'expo-router'

const LoginModule = () => {
  return (
    <SafeAreaView className='bg-slate-400 h-full'>
        <StatusBar hidden={false} style='dark'/>
        <Text>Bienvenido al Login</Text>
        <View className="items-center justify-center rounded-b-2xl h-full">
            <Link asChild href={''}>
                <Pressable className="bg-[#4A90E2] p-4 rounded-lg w-[200px] items-center mt-12" onPress={()=>router.push('/product')}>
                    <Text className="text-white text-lg font-bold">Productos</Text>
                </Pressable>
            </Link>
            <Link asChild href={''}>
                <Pressable className="bg-[#4A90E2] p-4 rounded-lg w-[200px] items-center mt-12" onPress={()=>router.push('/client')}>
                    <Text className="text-white text-lg font-bold">Clientes</Text>
                </Pressable>
            </Link>
            <Link asChild href={''}>
                <Pressable className="bg-[#4A90E2] p-4 rounded-lg w-[200px] items-center mt-12" onPress={()=>router.push('/bill')}>
                    <Text className="text-white text-lg font-bold">Facturas</Text>
                </Pressable>
            </Link>
        </View>

    </SafeAreaView>
  )
}

export default LoginModule