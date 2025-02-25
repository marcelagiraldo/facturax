import { View, Text,useWindowDimensions, ScrollView, Image, SafeAreaView,Pressable} from 'react-native'
import { Link, router } from 'expo-router'
import { StatusBar } from "expo-status-bar";
import logo from '../assets/facturax.png'

const Index = () => {
  const {width,height} = useWindowDimensions()
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style='light'/> 
      {/* Sección superior */}
      <View className="flex-1 items-center justify-center bg-[#003B73] rounded-2xl">
        <Image style={{width:200,height:240}} source={logo}/>
      </View>

      {/* Sección inferior */}
      <View className="flex-1 items-center justify-center">
        <Link asChild href={'/login'}>
          <Pressable className="bg-[#4A90E2] p-4 rounded-lg w-[200px] items-center">
            <Text className="text-white text-lg font-bold">Iniciar Sesión</Text>
          </Pressable>
        </Link>
        <Link asChild href={'/register'}>
          <Pressable className="bg-[#4A90E2] p-4 rounded-lg w-[200px] items-center mt-12">
            <Text className="text-white text-lg font-bold">Registrarse</Text>
          </Pressable>
        </Link>  
          
      </View>
    </SafeAreaView>    
  )
}

export default Index
