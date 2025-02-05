import { View, Text,useWindowDimensions, ScrollView, Image, SafeAreaView, Button} from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from "expo-status-bar";
import logo from '../assets/facturax.png'

const Index = () => {
  const {width,height} = useWindowDimensions()
  return (
    /*<View>
       <Text className='text-4xl text-red-600'>Index</Text>
      <Link href='/profile'>
        <Text className='rounded p-4 bg-slate-200 text-5xl'>
          Profile
        </Text>
      </Link> 
    </View>*/
    <ScrollView> 
      <StatusBar hidden={false} />    
      <SafeAreaView className="items-center justify-center bg-[#003B73] rounded-b-2xl" style={{width,height:height/2}} >
        <Image style={{width:200,height:240}} source={logo}/>
      </SafeAreaView>  
      {/* <View >
        <Link href=''>
          <Button title='Iniciar'/>
        </Link>
      </View> */}
    </ScrollView> 
    
  )
}

export default Index

