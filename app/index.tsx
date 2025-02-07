import { View, Text,useWindowDimensions, ScrollView, Image, SafeAreaView, Button,Pressable} from 'react-native'
import { Link, router } from 'expo-router'
import { StatusBar } from "expo-status-bar";
import logo from '../assets/facturax.png'

const Index = () => {
  const {width,height} = useWindowDimensions()
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar hidden={false} style='light'/> 
      {/* Sección superior */}
      <View className="flex-1 items-center justify-center bg-[#003B73] rounded-b-2xl">
        <Image style={{width:200,height:240}} source={logo}/>
      </View>

      {/* Sección inferior */}
      <View className="flex-1 items-center justify-center">
        <Pressable className="bg-[#4A90E2] p-4 rounded-lg w-[200px] items-center" onPress={()=>router.push('/login')}>
          <Text className="text-white text-lg font-bold">Iniciar Sesión</Text>
        </Pressable>
        <Pressable className="bg-[#4A90E2] p-4 rounded-lg w-[200px] items-center mt-12" onPress={()=>router.push('/register')}>
          <Text className="text-white text-lg font-bold">Registrarse</Text>
        </Pressable>
      </View>
    </SafeAreaView>


    /* <View>
       <Text className='text-4xl text-red-600'>Index</Text>
      <Link href='/client'>
        <Text className='rounded p-4 bg-slate-200 text-5xl'>
          Profile
        </Text>
      </Link> 
    </View> */
    /* <ScrollView> 
      <StatusBar hidden={false} style='light'/>    
      <SafeAreaView className="items-center justify-center bg-[#003B73] rounded-b-2xl" style={{width,height:height/2}} >
        <Image style={{width:200,height:240}} source={logo}/>
      </SafeAreaView>  
      <View className="flex-1 justify-center items-center w-full mt-36">
      
      <Pressable className="bg-[#4A90E2] p-4 rounded-lg w-[200px] items-center" onPress={() =>alert('¡Presionado!') }>
        <Text className="text-white text-lg font-bold">Iniciar Sesión</Text>
      </Pressable>

      <Pressable className="bg-[#4A90E2] p-4 rounded-lg w-[200px] items-center mt-12" onPress={() => alert('¡Presionado!')}>
        <Text className="text-white text-lg font-bold">Registrarse</Text>
      </Pressable>

      </View>
      
    </ScrollView> */
    
  )
}

export default Index

