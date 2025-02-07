import { View, Text,SafeAreaView, Image,ScrollView} from 'react-native'
import React from 'react'
import logo from '../../assets/facturax.png'

const Login = () => {
  return (
    <ScrollView> 
        <SafeAreaView className='flex-1 bg-gray-100'>
            <View className="flex-1 items-center justify-center bg-[yellow] rounded-b-2xl">
                <Text>Hola Soy LOGIN</Text>
                <Image style={{width:200,height:240}} source={logo}/>
            </View>
            <View className="flex-1 items-center justify-center bg-[blue] rounded-b-2xl">
                <Text>Hola Soy LOGIN</Text>
                <Image style={{width:200,height:240}} source={logo}/>
            </View>
            <View className="flex-1 items-center justify-center bg-[yellow] rounded-b-2xl">
                <Text>Hola Soy LOGIN</Text>
                <Image style={{width:200,height:240}} source={logo}/>
            </View>
            <View className="flex-1 items-center justify-center bg-[blue] rounded-b-2xl">
                <Text>Hola Soy LOGIN</Text>
                <Image style={{width:200,height:240}} source={logo}/>
            </View>
            <View className="flex-1 items-center justify-center bg-[yellow] rounded-b-2xl">
                <Text>Hola Soy LOGIN</Text>
                <Image style={{width:200,height:240}} source={logo}/>
            </View>
            <View className="flex-1 items-center justify-center bg-[blue] rounded-b-2xl">
                <Text>Hola Soy LOGIN</Text>
                <Image style={{width:200,height:240}} source={logo}/>
            </View>
            <View className="flex-1 items-center justify-center bg-[yellow] rounded-b-2xl">
                <Text>Hola Soy LOGIN</Text>
                <Image style={{width:200,height:240}} source={logo}/>
            </View>

        </SafeAreaView>
    </ScrollView> 
  )
}

export default Login