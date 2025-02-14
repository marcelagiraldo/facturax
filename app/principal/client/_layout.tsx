import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'
const ClientLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name='createclient'
            options={{
                headerShown:false,
                title:'Crear',
                tabBarIcon:() =>(
                    <AntDesign name="pluscircleo" size={24} color='black'/>
                )
            }}  
        />
        <Tabs.Screen
            name='updateclient'
            options={{
                headerShown:false,
                title:'Editar',
                tabBarIcon:() =>(
                    <AntDesign name='edit' size={24} color='black'/>
                )
            }}  
        />
    </Tabs>
    
  )
}

export default ClientLayout